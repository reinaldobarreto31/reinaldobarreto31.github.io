import { Download, RefreshCw, FileCheck2, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface ResultCardProps {
  originalSize: number; // in bytes
  compressedSize: number; // in bytes
  onDownload: () => void;
  onReset: () => void;
  targetSizeMB: number | null;
}

export function ResultCard({
  originalSize,
  compressedSize,
  onDownload,
  onReset,
  targetSizeMB,
}: ResultCardProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const reductionPercent = Math.max(0, Math.round(((originalSize - compressedSize) / originalSize) * 100));
  const isGoodReduction = reductionPercent > 20;
  const targetBytes = targetSizeMB ? targetSizeMB * 1024 * 1024 : Infinity;
  const missedTarget = targetSizeMB !== null && compressedSize > targetBytes;

  return (
    <div className={cn(
      "w-full max-w-xl mx-auto space-y-8 transition-all duration-700",
      show ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
    )}>
      
      <div className="flex flex-col items-center justify-center space-y-4 mb-8">
        <div className="w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/30 relative">
          <div className="absolute inset-0 rounded-full border border-green-500/50 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_1]" />
          <FileCheck2 className="w-12 h-12 text-green-500" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          COMPRIMIDO
        </h2>
      </div>

      <div className="bg-card border border-border rounded-xl p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-3 opacity-10 pointer-events-none">
          <FileCheck2 className="w-32 h-32" />
        </div>

        <div className="grid grid-cols-2 gap-6 relative z-10">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground font-mono">Tamanho Original</p>
            <p className="text-2xl font-mono font-semibold" data-testid="text-original-size">
              {formatSize(originalSize)}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground font-mono">Novo Tamanho</p>
            <p className="text-2xl font-mono font-bold text-primary" data-testid="text-compressed-size">
              {formatSize(compressedSize)}
            </p>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border/50 flex items-center justify-between relative z-10">
          <p className="text-sm text-muted-foreground font-mono">Redução Total</p>
          <div className="flex items-center gap-2">
            <span 
              className={cn(
                "text-3xl font-black font-mono tracking-tighter",
                isGoodReduction ? "text-green-500" : "text-yellow-500"
              )}
              data-testid="text-reduction-percent"
            >
              ↓ {reductionPercent}%
            </span>
          </div>
        </div>
      </div>

      {missedTarget && (
        <div className="bg-yellow-500/10 border border-yellow-500/30 text-yellow-500/90 p-4 rounded-lg flex items-start gap-3 animate-in fade-in slide-in-from-top-2">
          <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
          <p className="text-sm">
            Não foi possível atingir o tamanho alvo exato. A compressão atingiu o limite para manter a legibilidade.
            Resultado: <strong>{formatSize(compressedSize)}</strong>.
          </p>
        </div>
      )}

      <div className="flex flex-col gap-4">
        <Button 
          size="lg" 
          onClick={onDownload}
          className="w-full text-lg h-14 bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(204,0,0,0.3)] hover:shadow-[0_0_30px_rgba(204,0,0,0.6)] transition-all font-bold tracking-wide group"
          data-testid="button-download"
        >
          <Download className="w-6 h-6 mr-3 group-hover:-translate-y-1 transition-transform" />
          Baixar PDF Comprimido
        </Button>
        <Button 
          variant="outline" 
          size="lg"
          onClick={onReset}
          className="w-full h-14 font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground"
          data-testid="button-reset"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Comprimir Outro
        </Button>
      </div>
    </div>
  );
}
