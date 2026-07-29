import * as pdfjsLib from 'pdfjs-dist';
import { PDFDocument } from 'pdf-lib';

// Use the bundled worker for pdfjs-dist v6
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.mjs',
  import.meta.url,
).toString();

export interface CompressionPreset {
  id: string;
  label: string;
  description: string;
  targetMB: number;
  quality: number; // 0.0 – 1.0 JPEG quality
  scale: number;   // page render scale (1.0 = 72dpi equivalent)
}

export const PRESETS: CompressionPreset[] = [
  {
    id: 'governo',
    label: 'Governo BR',
    description: 'Máx. 2 MB — padrão SEI/protocolo',
    targetMB: 2,
    quality: 0.55,
    scale: 1.2,
  },
  {
    id: 'empresa',
    label: 'Empresa',
    description: 'Máx. 5 MB — envio corporativo',
    targetMB: 5,
    quality: 0.7,
    scale: 1.5,
  },
  {
    id: 'email',
    label: 'E-mail',
    description: 'Máx. 8 MB — anexo de e-mail',
    targetMB: 8,
    quality: 0.8,
    scale: 1.8,
  },
  {
    id: 'otimo',
    label: 'Ótimo',
    description: 'Máx. 15 MB — boa qualidade',
    targetMB: 15,
    quality: 0.88,
    scale: 2.0,
  },
  {
    id: 'maximo',
    label: 'Máximo',
    description: 'Máx. 25 MB — alta fidelidade',
    targetMB: 25,
    quality: 0.95,
    scale: 2.5,
  },
  {
    id: 'personalizado',
    label: 'Personalizado',
    description: 'Defina o tamanho alvo',
    targetMB: 10,
    quality: 0.82,
    scale: 1.8,
  },
];

export interface ProgressEvent {
  page: number;
  total: number;
  filename: string;
}

export type ProgressCallback = (ev: ProgressEvent) => void;

export async function compressPdf(
  file: File,
  preset: CompressionPreset,
  onProgress: ProgressCallback,
  cancelledRef: { current: boolean },
): Promise<Uint8Array> {
  const arrayBuffer = await file.arrayBuffer();

  // Load with pdfjs
  const loadingTask = pdfjsLib.getDocument({ data: new Uint8Array(arrayBuffer) });
  const pdfDoc = await loadingTask.promise;
  const totalPages = pdfDoc.numPages;

  // Create new pdf-lib document
  const outDoc = await PDFDocument.create();

  for (let i = 1; i <= totalPages; i++) {
    if (cancelledRef.current) {
      throw new Error('CANCELLED');
    }

    onProgress({ page: i, total: totalPages, filename: file.name });

    const page = await pdfDoc.getPage(i);
    const viewport = page.getViewport({ scale: preset.scale });

    const canvas = document.createElement('canvas');
    canvas.width = Math.floor(viewport.width);
    canvas.height = Math.floor(viewport.height);
    const ctx = canvas.getContext('2d')!;

    await page.render({ canvasContext: ctx, viewport }).promise;

    if (cancelledRef.current) {
      throw new Error('CANCELLED');
    }

    const dataUrl = canvas.toDataURL('image/jpeg', preset.quality);
    const base64 = dataUrl.split(',')[1];
    const imgBytes = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));

    const jpgImage = await outDoc.embedJpg(imgBytes);
    const outPage = outDoc.addPage([viewport.width, viewport.height]);
    outPage.drawImage(jpgImage, {
      x: 0,
      y: 0,
      width: viewport.width,
      height: viewport.height,
    });
  }

  const pdfBytes = await outDoc.save();

  // Verify target size
  const resultMB = pdfBytes.byteLength / (1024 * 1024);
  if (resultMB > preset.targetMB) {
    throw new Error(
      `Não foi possível atingir ${preset.targetMB} MB. Resultado: ${resultMB.toFixed(1)} MB. Tente um preset com menor qualidade.`,
    );
  }

  return pdfBytes;
}

export function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
}

export function savePdf(bytes: Uint8Array, originalName: string) {
  const base = originalName.replace(/\.pdf$/i, '');
  const blob = new Blob([bytes], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${base}_comprimido.pdf`;
  a.click();
  URL.revokeObjectURL(url);
}
