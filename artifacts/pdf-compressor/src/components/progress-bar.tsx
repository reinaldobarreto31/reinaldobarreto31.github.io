import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface ProgressBarProps {
  currentPage: number;
  totalPages: number;
}

export function ProgressBar({ currentPage, totalPages }: ProgressBarProps) {
  const percentage = Math.round((currentPage / Math.max(totalPages, 1)) * 100);

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center justify-center p-12 space-y-8 animate-in fade-in zoom-in-95 duration-500">
      <div className="relative w-full">
        {/* Progress track */}
        <div className="h-4 w-full bg-secondary rounded-full overflow-hidden border border-border relative">
          {/* Animated scanline inside the track */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(204,0,0,0.1)_50%,transparent_100%)] animate-[shimmer_2s_infinite]" />
          
          {/* Progress fill */}
          <div 
            className="h-full bg-gradient-to-r from-[#990000] via-primary to-[#ff4444] transition-all duration-300 ease-out relative"
            style={{ width: `${percentage}%` }}
            data-testid="progress-bar"
          >
            {/* Glow on the leading edge */}
            <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/30 blur-[2px]" />
          </div>
        </div>
        
        {/* Glow effect for the whole bar */}
        <div 
          className="absolute top-0 left-0 h-4 bg-primary blur-xl opacity-30 transition-all duration-300 pointer-events-none"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="flex flex-col items-center space-y-2 text-center">
        <div className="flex items-center justify-center gap-3">
          <Loader2 className="w-6 h-6 text-primary animate-spin" />
          <span 
            className="text-4xl md:text-5xl font-mono font-bold tracking-tighter text-primary"
            data-testid="text-progress-percent"
            style={{ textShadow: '0 0 20px rgba(204,0,0,0.5)' }}
          >
            {percentage}%
          </span>
        </div>
        
        <p 
          className="text-muted-foreground font-mono text-sm uppercase tracking-widest mt-4 flex items-center gap-2"
          data-testid="text-progress-page"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Processando página {currentPage} de {totalPages}
        </p>
      </div>

      {/* Decorative tech lines */}
      <div className="w-full flex justify-between px-4 opacity-20 pointer-events-none">
        <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
        <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </div>
  );
}
