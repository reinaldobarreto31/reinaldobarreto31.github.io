import { useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  Upload,
  X,
  CheckCircle2,
  AlertTriangle,
  Download,
  RotateCcw,
  Sliders,
  Zap,
} from 'lucide-react';
import {
  PRESETS,
  CompressionPreset,
  compressPdf,
  formatBytes,
  savePdf,
} from '@/lib/compress-pdf';

const QUALITY_LABELS: Record<number, string> = {
  1: 'Mínima',
  2: 'Muito baixa',
  3: 'Baixa',
  4: 'Média-baixa',
  5: 'Média',
  6: 'Média-alta',
  7: 'Boa',
  8: 'Alta',
  9: 'Muito alta',
  10: 'Máxima',
};

const SCALE_OPTIONS = [
  { label: '72 dpi — menor arquivo', value: 1.0 },
  { label: '96 dpi — equilíbrio', value: 1.33 },
  { label: '144 dpi — boa qualidade', value: 2.0 },
  { label: '216 dpi — alta fidelidade', value: 3.0 },
];

type AppState = 'drop' | 'loaded' | 'processing' | 'done' | 'error';

export default function Home() {
  const [state, setState] = useState<AppState>('drop');
  const [file, setFile] = useState<File | null>(null);
  const [selectedPreset, setSelectedPreset] = useState<CompressionPreset>(PRESETS[0]);
  const [customMB, setCustomMB] = useState(10);
  const [customQuality, setCustomQuality] = useState(7); // 1–10
  const [customScale, setCustomScale] = useState(1.33);
  const [targetMet, setTargetMet] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [resultBytes, setResultBytes] = useState<Uint8Array | null>(null);
  const [originalSize, setOriginalSize] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');
  const [isDragOver, setIsDragOver] = useState(false);
  const [downloadName, setDownloadName] = useState('');

  const cancelledRef = useRef({ current: false });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const activePreset: CompressionPreset =
    selectedPreset.id === 'personalizado'
      ? {
          ...selectedPreset,
          targetMB: customMB,
          quality: customQuality / 10,
          scale: customScale,
        }
      : selectedPreset;

  const handleFile = useCallback((f: File) => {
    if (!f.name.toLowerCase().endsWith('.pdf')) {
      setErrorMsg('Somente arquivos PDF são aceitos.');
      setState('error');
      return;
    }
    setFile(f);
    setOriginalSize(f.size);
    setState('loaded');
  }, []);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const f = e.dataTransfer.files[0];
    if (f) handleFile(f);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) handleFile(f);
  };

  const startCompression = async () => {
    if (!file) return;
    cancelledRef.current = { current: false };
    setState('processing');
    setProgress(0);
    setCurrentPage(0);
    setTotalPages(0);

    try {
      const result = await compressPdf(
        file,
        activePreset,
        (ev) => {
          setCurrentPage(ev.page);
          setTotalPages(ev.total);
          setProgress(Math.round((ev.page / ev.total) * 100));
        },
        cancelledRef.current,
      );
      setResultBytes(result.bytes);
      setTargetMet(result.targetMet);
      setDownloadName(file.name.replace(/\.pdf$/i, '') + '_comprimido');
      setState('done');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      if (msg === 'CANCELLED') {
        setState('loaded');
      } else {
        setErrorMsg(msg);
        setState('error');
      }
    }
  };

  const handleCancel = () => {
    cancelledRef.current.current = true;
  };

  const handleDownload = () => {
    if (!resultBytes) return;
    const name = (downloadName.trim() || 'documento_comprimido') + '.pdf';
    const blob = new Blob([resultBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    setFile(null);
    setResultBytes(null);
    setErrorMsg('');
    setProgress(0);
    setState('drop');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="min-h-screen bg-[#080808] font-sans flex flex-col">
      {/* ── Navbar ── */}
      <nav className="border-b border-red-900/30 bg-black/60 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-red-500" />
            <span className="font-mono font-bold text-white tracking-tight text-sm">
              Compressor de PDF
            </span>
          </div>
          <span className="text-xs text-gray-500 font-mono">
            reinaldo<span className="text-red-500">.</span>dev
          </span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <div className="max-w-4xl mx-auto px-4 pt-12 pb-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
        >
          Compressor de{' '}
          <span className="text-red-500">PDF</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mt-2 text-gray-400 text-sm"
        >
          Reduza PDFs para os padrões brasileiros — Governo, Empresa, E-mail e mais.
          <br />
          100% no navegador. Nenhum arquivo enviado a servidores.
        </motion.p>
      </div>

      {/* ── Main Card ── */}
      <div className="flex-1 max-w-2xl w-full mx-auto px-4 pb-12 pt-6">
        <AnimatePresence mode="wait">

          {/* ── DROP ZONE ── */}
          {state === 'drop' && (
            <motion.div
              key="drop"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div
                data-testid="drop-zone"
                onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
                onDragLeave={() => setIsDragOver(false)}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`
                  relative cursor-pointer rounded-xl border-2 border-dashed transition-all duration-300
                  flex flex-col items-center justify-center py-16 px-8 gap-4
                  ${isDragOver
                    ? 'border-red-500 bg-red-950/20 shadow-[0_0_30px_4px_rgba(204,0,0,0.2)]'
                    : 'border-red-900/40 bg-black/40 hover:border-red-700/60 hover:bg-red-950/10'}
                `}
              >
                <div className={`p-4 rounded-full border ${isDragOver ? 'border-red-500 bg-red-900/30' : 'border-red-900/40 bg-zinc-900'}`}>
                  <Upload className={`w-8 h-8 ${isDragOver ? 'text-red-400' : 'text-red-700'}`} />
                </div>
                <div className="text-center">
                  <p className="text-white font-semibold text-base">
                    Arraste um PDF aqui
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    ou clique para selecionar o arquivo
                  </p>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,application/pdf"
                  className="hidden"
                  onChange={handleInputChange}
                  data-testid="file-input"
                />
              </div>
            </motion.div>
          )}

          {/* ── FILE LOADED ── */}
          {state === 'loaded' && file && (
            <motion.div
              key="loaded"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              {/* File info */}
              <div className="flex items-center gap-3 bg-zinc-900/80 border border-red-900/30 rounded-xl px-4 py-3">
                <FileText className="w-6 h-6 text-red-500 shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium truncate">{file.name}</p>
                  <p className="text-gray-500 text-xs">{formatBytes(originalSize)}</p>
                </div>
                <button
                  onClick={handleReset}
                  className="text-gray-500 hover:text-red-400 transition-colors"
                  title="Remover arquivo"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Preset grid */}
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-2 font-mono">
                  Escolha o preset
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {PRESETS.map((p) => (
                    <button
                      key={p.id}
                      data-testid={`preset-${p.id}`}
                      onClick={() => setSelectedPreset(p)}
                      className={`
                        rounded-lg border px-3 py-2.5 text-left transition-all duration-200
                        ${selectedPreset.id === p.id
                          ? 'border-red-500 bg-red-950/40 shadow-[0_0_12px_1px_rgba(204,0,0,0.25)]'
                          : 'border-zinc-800 bg-zinc-900/60 hover:border-red-800/60'}
                      `}
                    >
                      <div className="flex items-center gap-1.5 mb-0.5">
                        {p.id === 'personalizado'
                          ? <Sliders className="w-3 h-3 text-red-400" />
                          : <Zap className="w-3 h-3 text-red-500" />
                        }
                        <span className="text-white text-xs font-semibold">{p.label}</span>
                      </div>
                      <p className="text-gray-500 text-[11px] leading-tight">{p.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom controls */}
              {selectedPreset.id === 'personalizado' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="bg-zinc-900/60 border border-red-900/30 rounded-lg px-4 py-4 space-y-4"
                >
                  {/* Tamanho alvo */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-400 font-mono uppercase tracking-widest">Tamanho alvo</span>
                      <span className="text-red-400 font-mono font-bold text-sm">{customMB} MB</span>
                    </div>
                    <input
                      type="range" min={1} max={50} value={customMB}
                      onChange={(e) => setCustomMB(Number(e.target.value))}
                      className="w-full accent-red-500 cursor-pointer"
                      data-testid="custom-mb-slider"
                    />
                    <div className="flex justify-between text-[10px] text-gray-600 font-mono">
                      <span>1 MB</span><span>50 MB</span>
                    </div>
                  </div>

                  <div className="border-t border-zinc-800" />

                  {/* Qualidade */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-400 font-mono uppercase tracking-widest">Qualidade da imagem</span>
                      <span className="text-red-400 font-mono font-bold text-sm">
                        {customQuality * 10}% — {QUALITY_LABELS[customQuality]}
                      </span>
                    </div>
                    <input
                      type="range" min={1} max={10} step={1} value={customQuality}
                      onChange={(e) => setCustomQuality(Number(e.target.value))}
                      className="w-full accent-red-500 cursor-pointer"
                      data-testid="custom-quality-slider"
                    />
                    <div className="flex justify-between text-[10px] text-gray-600 font-mono">
                      <span>Mínima (menor arquivo)</span><span>Máxima</span>
                    </div>
                  </div>

                  <div className="border-t border-zinc-800" />

                  {/* Resolução */}
                  <div className="space-y-2">
                    <span className="text-xs text-gray-400 font-mono uppercase tracking-widest">Resolução (DPI)</span>
                    <div className="grid grid-cols-2 gap-1.5 mt-1">
                      {SCALE_OPTIONS.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => setCustomScale(opt.value)}
                          data-testid={`scale-${opt.value}`}
                          className={`text-left px-3 py-2 rounded-lg border text-[11px] font-mono transition-all ${
                            customScale === opt.value
                              ? 'border-red-500 bg-red-950/40 text-red-300'
                              : 'border-zinc-800 text-gray-500 hover:border-zinc-600'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Compress button */}
              <motion.button
                data-testid="compress-btn"
                onClick={startCompression}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm tracking-wide transition-colors shadow-[0_0_20px_2px_rgba(204,0,0,0.3)]"
              >
                Comprimir PDF
              </motion.button>
            </motion.div>
          )}

          {/* ── PROCESSING ── */}
          {state === 'processing' && (
            <motion.div
              key="processing"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-xl overflow-hidden"
            >
              {/* Glassmorphism processing card */}
              <div
                data-testid="processing-card"
                className="relative bg-black/50 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-[0_0_40px_4px_rgba(204,0,0,0.15)]"
              >
                {/* Subtle scanline overlay */}
                <div className="pointer-events-none absolute inset-0 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.015)_2px,rgba(255,255,255,0.015)_4px)]" />
                </div>

                <div className="relative space-y-5">
                  {/* Filename */}
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-red-500 shrink-0" />
                    <span className="text-white text-sm font-mono truncate" data-testid="processing-filename">
                      {file?.name}
                    </span>
                  </div>

                  {/* Progress label */}
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-gray-400">
                      {totalPages > 0
                        ? `Página ${currentPage} de ${totalPages}`
                        : 'Carregando…'}
                    </span>
                    <span className="text-red-400 font-bold">{progress}%</span>
                  </div>

                  {/* Progress bar */}
                  <div className="relative h-2 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-red-600 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    />
                    {/* Shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_1.5s_linear_infinite]" />
                  </div>

                  {/* Preset info */}
                  <p className="text-gray-500 text-xs font-mono">
                    Preset: <span className="text-red-400">{activePreset.label}</span>
                    {' '}→ alvo <span className="text-white">{activePreset.targetMB} MB</span>
                  </p>

                  {/* Cancel */}
                  <button
                    data-testid="cancel-btn"
                    onClick={handleCancel}
                    className="flex items-center gap-2 text-gray-500 hover:text-red-400 transition-colors text-xs font-mono"
                  >
                    <X className="w-3.5 h-3.5" />
                    Cancelar compressão
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* ── DONE ── */}
          {state === 'done' && resultBytes && file && (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="rounded-xl border border-green-700/40 bg-black/50 backdrop-blur-xl p-6 shadow-[0_0_30px_4px_rgba(0,200,80,0.08)] space-y-5"
              data-testid="done-card"
            >
              {/* Success icon */}
              <div className="flex justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20, delay: 0.1 }}
                >
                  <CheckCircle2 className="w-14 h-14 text-green-500" strokeWidth={1.5} />
                </motion.div>
              </div>

              <div className="text-center space-y-1">
                <p className="text-white font-bold text-lg">PDF comprimido com sucesso!</p>
                <p className="text-gray-400 text-sm font-mono truncate">{file.name}</p>
              </div>

              {/* Size comparison */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-zinc-900/80 border border-zinc-800 rounded-lg px-4 py-3 text-center">
                  <p className="text-gray-500 text-xs uppercase tracking-widest font-mono">Original</p>
                  <p className="text-white font-bold text-lg mt-1">{formatBytes(originalSize)}</p>
                </div>
                <div className="bg-zinc-900/80 border border-green-900/40 rounded-lg px-4 py-3 text-center">
                  <p className="text-gray-500 text-xs uppercase tracking-widest font-mono">Comprimido</p>
                  <p className="text-green-400 font-bold text-lg mt-1">{formatBytes(resultBytes.byteLength)}</p>
                </div>
              </div>

              {/* Reduction badge */}
              {originalSize > 0 && (
                <div className="text-center">
                  <span className="inline-block bg-green-900/30 border border-green-700/30 text-green-400 text-xs font-mono px-3 py-1 rounded-full">
                    Redução de{' '}
                    {(((originalSize - resultBytes.byteLength) / originalSize) * 100).toFixed(0)}%
                  </span>
                </div>
              )}

              {/* Target not met warning */}
              {!targetMet && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2.5 bg-yellow-950/40 border border-yellow-700/40 rounded-lg px-4 py-3"
                  data-testid="target-warning"
                >
                  <AlertTriangle className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-yellow-300 text-xs font-semibold">Alvo não atingido</p>
                    <p className="text-yellow-200/60 text-[11px] mt-0.5 leading-relaxed">
                      O PDF não pôde ser reduzido até {activePreset.targetMB} MB.
                      Tente diminuir a <strong>qualidade</strong> ou a <strong>resolução</strong> no preset Personalizado.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Rename */}
              <div className="space-y-1.5">
                <label className="text-xs text-gray-400 uppercase tracking-widest font-mono">
                  Nome do arquivo
                </label>
                <div className="flex items-center gap-0 rounded-lg border border-zinc-700 focus-within:border-red-600 transition-colors overflow-hidden bg-zinc-900/60">
                  <input
                    data-testid="download-name-input"
                    type="text"
                    value={downloadName}
                    onChange={(e) => setDownloadName(e.target.value)}
                    className="flex-1 bg-transparent px-3 py-2 text-sm text-white font-mono outline-none placeholder:text-gray-600"
                    placeholder="nome_do_arquivo"
                    spellCheck={false}
                  />
                  <span className="pr-3 text-gray-500 text-sm font-mono select-none">.pdf</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <motion.button
                  data-testid="download-btn"
                  onClick={handleDownload}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-green-700 hover:bg-green-600 text-white font-bold text-sm transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Baixar PDF
                </motion.button>
                <button
                  data-testid="reset-btn"
                  onClick={handleReset}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-zinc-700 text-gray-400 hover:text-white hover:border-zinc-500 transition-colors text-sm"
                >
                  <RotateCcw className="w-4 h-4" />
                  Novo
                </button>
              </div>
            </motion.div>
          )}

          {/* ── ERROR ── */}
          {state === 'error' && (
            <motion.div
              key="error"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="rounded-xl border border-red-700/50 bg-black/60 backdrop-blur-xl p-6 shadow-[0_0_30px_4px_rgba(204,0,0,0.15)] space-y-4"
              data-testid="error-card"
            >
              <div className="flex justify-center">
                <motion.div
                  initial={{ scale: 0, rotate: -15 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                >
                  <AlertTriangle className="w-14 h-14 text-red-500" strokeWidth={1.5} />
                </motion.div>
              </div>

              <div className="text-center space-y-2">
                <p className="text-white font-bold text-base">Falha na compressão</p>
                <p className="text-red-300/80 text-sm font-mono bg-red-950/30 border border-red-900/30 rounded-lg px-4 py-3 text-left leading-relaxed" data-testid="error-message">
                  {errorMsg}
                </p>
              </div>

              <div className="flex gap-3">
                {file && (
                  <button
                    onClick={() => setState('loaded')}
                    className="flex-1 py-2.5 rounded-xl border border-zinc-700 text-gray-300 hover:text-white hover:border-zinc-500 transition-colors text-sm font-mono"
                  >
                    Tentar outro preset
                  </button>
                )}
                <button
                  data-testid="error-reset-btn"
                  onClick={handleReset}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-red-900/40 hover:bg-red-900/60 border border-red-700/40 text-red-300 transition-colors text-sm"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Recomeçar
                </button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>

        {/* Info chips */}
        {state === 'drop' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 flex flex-wrap justify-center gap-2"
          >
            {['🔒 100% local', '⚡ Sem upload', '🇧🇷 Padrão BR', '📄 Múltiplas páginas'].map((chip) => (
              <span key={chip} className="text-xs text-gray-500 bg-zinc-900/60 border border-zinc-800 rounded-full px-3 py-1">
                {chip}
              </span>
            ))}
          </motion.div>
        )}
      </div>

      {/* ── Footer ── */}
      <footer className="border-t border-red-900/20 py-4">
        <p className="text-center text-[11px] text-gray-600 font-mono">
          Feito por{' '}
          <a
            href="https://reinaldobarreto31.github.io/"
            target="_blank"
            rel="noreferrer"
            className="text-red-600 hover:text-red-400 transition-colors"
          >
            Reinaldo Barreto
          </a>
          {' '}· Compressor de PDF · Nenhum dado é enviado
        </p>
      </footer>
    </div>
  );
}
