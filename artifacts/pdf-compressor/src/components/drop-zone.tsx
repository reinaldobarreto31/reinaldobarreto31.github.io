import React, { useCallback, useState } from 'react';
import { UploadCloud, FileType } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DropZoneProps {
  onFileSelect: (file: File) => void;
}

export function DropZone({ onFileSelect }: DropZoneProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragging(true);
    } else if (e.type === 'dragleave') {
      setIsDragging(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0 && files[0].type === 'application/pdf') {
      onFileSelect(files[0]);
    }
  }, [onFileSelect]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      onFileSelect(files[0]);
    }
  }, [onFileSelect]);

  return (
    <div className="w-full max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div
        className={cn(
          "relative group w-full flex flex-col items-center justify-center p-12 md:p-24 border-2 border-dashed rounded-xl transition-all duration-300 ease-out",
          isDragging 
            ? "border-primary bg-primary/5 scale-[1.02]" 
            : "border-border hover:border-primary/50 hover:bg-card/50",
          !isDragging && "animate-[pulse-glow_4s_cubic-bezier(0.4,0,0.6,1)_infinite]"
        )}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        data-testid="drop-zone"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-20 h-20 mb-6 rounded-2xl bg-secondary flex items-center justify-center border border-border group-hover:scale-110 transition-transform duration-500 shadow-2xl shadow-primary/20">
            <FileType className="w-10 h-10 text-primary" strokeWidth={1.5} />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
            Arraste seu PDF aqui
          </h2>
          
          <p className="text-muted-foreground mb-8 max-w-sm">
            Processamento 100% no navegador. Nenhum arquivo é enviado para a nuvem.
          </p>

          <label className="relative cursor-pointer">
            <span className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium transition-all bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(204,0,0,0.4)] hover:shadow-[0_0_30px_rgba(204,0,0,0.6)]">
              <UploadCloud className="w-5 h-5 mr-2" />
              Selecionar arquivo
            </span>
            <input
              type="file"
              className="sr-only"
              accept="application/pdf"
              onChange={handleChange}
              data-testid="input-file"
            />
          </label>

          <div className="mt-8 flex items-center gap-4 text-xs font-mono text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Tamanho máximo: Sem limite
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
