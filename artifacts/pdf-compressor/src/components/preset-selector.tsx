import { PRESETS, CompressionPreset } from '@/lib/compress-pdf';
import { cn } from '@/lib/utils';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Settings, Zap, Briefcase, Mail, Shield, Check } from 'lucide-react';
import React, { useState } from 'react';

interface PresetSelectorProps {
  selectedId: string;
  onSelect: (id: string) => void;
  customTargetMB: number;
  onCustomTargetChange: (val: number) => void;
  originalSizeMB: number;
}

const ICONS: Record<string, React.ElementType> = {
  'gov-br': Shield,
  'empresa': Briefcase,
  'email': Mail,
  'otimo': Check,
  'maximo': Zap,
  'custom': Settings,
};

export function PresetSelector({
  selectedId,
  onSelect,
  customTargetMB,
  onCustomTargetChange,
  originalSizeMB,
}: PresetSelectorProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 perspective-1000">
        {PRESETS.map((preset) => {
          const isSelected = selectedId === preset.id;
          const Icon = ICONS[preset.id] || Settings;

          return (
            <button
              key={preset.id}
              onClick={() => onSelect(preset.id)}
              onMouseEnter={() => setHoveredId(preset.id)}
              onMouseLeave={() => setHoveredId(null)}
              data-testid={`preset-card-${preset.id}`}
              className={cn(
                "relative group text-left p-6 rounded-xl border transition-all duration-300 transform-gpu",
                isSelected
                  ? "bg-secondary border-primary shadow-[0_0_15px_rgba(204,0,0,0.3)]"
                  : "bg-card border-border hover:border-primary/50 hover:bg-card/80",
                hoveredId === preset.id && !isSelected && "scale-[1.02] -translate-y-1"
              )}
            >
              {isSelected && (
                <div className="absolute inset-0 bg-primary/5 rounded-xl animate-pulse" />
              )}
              <div className="relative z-10 flex items-start justify-between mb-4">
                <div className={cn(
                  "p-2 rounded-lg transition-colors",
                  isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground group-hover:text-primary"
                )}>
                  <Icon className="w-5 h-5" />
                </div>
                {preset.maxSizeMB && (
                  <span className="font-mono text-xs font-semibold px-2 py-1 rounded-md bg-background border border-border">
                    ~{preset.maxSizeMB} MB
                  </span>
                )}
              </div>
              <div className="relative z-10">
                <h3 className={cn("font-bold mb-1", isSelected ? "text-primary-foreground" : "text-foreground")}>
                  {preset.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {preset.description}
                </p>
              </div>

              {/* Quality indicator dots */}
              {!preset.maxSizeMB && preset.id !== 'custom' && (
                <div className="mt-4 flex gap-1 relative z-10">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className={cn(
                        "h-1 flex-1 rounded-full",
                        i < Math.round(preset.jpegQuality * 5)
                          ? "bg-primary"
                          : "bg-muted"
                      )}
                    />
                  ))}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {selectedId === 'custom' && (
        <div className="p-6 rounded-xl border border-primary/30 bg-secondary/50 animate-in zoom-in-95 duration-300">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1 w-full space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-foreground">
                  Tamanho Alvo (MB)
                </label>
                <span className="font-mono text-primary font-bold">
                  {customTargetMB.toFixed(1)} MB
                </span>
              </div>
              <Slider
                value={[customTargetMB]}
                min={0.5}
                max={Math.max(20, Math.ceil(originalSizeMB))}
                step={0.5}
                onValueChange={([val]) => onCustomTargetChange(val)}
                className="[&_[role=slider]]:border-primary [&_[role=slider]]:focus-visible:ring-primary"
              />
              <div className="flex justify-between text-xs font-mono text-muted-foreground">
                <span>0.5 MB</span>
                <span>{Math.max(20, Math.ceil(originalSizeMB))} MB</span>
              </div>
            </div>
            <div className="w-full md:w-32">
              <Input
                type="number"
                value={customTargetMB}
                onChange={(e) => onCustomTargetChange(Number(e.target.value) || 0.5)}
                min={0.5}
                step={0.1}
                className="font-mono text-center text-lg border-primary/50 focus-visible:ring-primary"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
