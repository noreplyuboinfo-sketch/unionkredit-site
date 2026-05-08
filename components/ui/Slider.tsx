'use client';
import { cn } from "@/lib/utils";
import { ChangeEvent, InputHTMLAttributes } from "react";

interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
}

export function Slider({ value, min, max, step = 1, onChange, className, ...props }: SliderProps) {
  const percentage = ((value - min) / (max - min)) * 100;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <div className={cn("relative w-full py-4", className)}>
      <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 h-2 bg-brand-light rounded-full" />
      <div 
        className="absolute top-1/2 transform -translate-y-1/2 left-0 h-2 bg-brand rounded-full pointer-events-none" 
        style={{ width: `${percentage}%` }}
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="absolute top-1/2 transform -translate-y-1/2 left-0 w-full h-2 opacity-0 cursor-pointer"
        {...props}
      />
      <div 
        className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-white border-2 border-brand rounded-full pointer-events-none shadow-md"
        style={{ left: `${percentage}%` }}
      />
    </div>
  );
}
