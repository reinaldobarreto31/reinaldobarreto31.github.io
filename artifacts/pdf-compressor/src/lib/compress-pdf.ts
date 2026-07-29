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

// DPI reference (alinhado com perfis Ghostscript):
//   /screen  =  72 dpi → scale 1.00
//   /ebook   = 150 dpi → scale 2.08
//   /printer = 300 dpi → scale 4.17
export const PRESETS: CompressionPreset[] = [
  {
    id: 'governo',
    label: 'Governo BR',
    description: 'Máx. 2 MB — padrão SEI/protocolo',
    targetMB: 2,
    quality: 0.55,
    scale: 1.0,   // /screen — 72 dpi
  },
  {
    id: 'empresa',
    label: 'Empresa',
    description: 'Máx. 5 MB — envio corporativo',
    targetMB: 5,
    quality: 0.72,
    scale: 2.08,  // /ebook — 150 dpi
  },
  {
    id: 'email',
    label: 'E-mail',
    description: 'Máx. 8 MB — anexo de e-mail',
    targetMB: 8,
    quality: 0.80,
    scale: 2.08,  // /ebook — 150 dpi
  },
  {
    id: 'otimo',
    label: 'Ótimo',
    description: 'Máx. 15 MB — boa qualidade',
    targetMB: 15,
    quality: 0.88,
    scale: 2.08,  // /ebook — 150 dpi
  },
  {
    id: 'maximo',
    label: 'Máximo',
    description: 'Máx. 25 MB — alta fidelidade',
    targetMB: 25,
    quality: 0.95,
    scale: 4.17,  // /printer — 300 dpi
  },
  {
    id: 'personalizado',
    label: 'Personalizado',
    description: 'Defina o tamanho alvo',
    targetMB: 10,
    quality: 0.80,
    scale: 2.08,  // /ebook — 150 dpi (padrão)
  },
];

export interface ProgressEvent {
  page: number;
  total: number;
  filename: string;
}

export type ProgressCallback = (ev: ProgressEvent) => void;

export interface CompressResult {
  bytes: Uint8Array;
  targetMet: boolean;
  actualMB: number;
}

export async function compressPdf(
  file: File,
  preset: CompressionPreset,
  onProgress: ProgressCallback,
  cancelledRef: { current: boolean },
): Promise<CompressResult> {
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

  // useObjectStreams: false melhora compatibilidade e compressão
  // conforme recomendado pela estratégia padrão de mercado com pdf-lib
  const pdfBytes = await outDoc.save({ useObjectStreams: false });
  const actualMB = pdfBytes.byteLength / (1024 * 1024);

  return {
    bytes: pdfBytes,
    targetMet: actualMB <= preset.targetMB,
    actualMB,
  };
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
