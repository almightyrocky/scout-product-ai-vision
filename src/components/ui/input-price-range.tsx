
import * as React from "react";
import { Slider } from "@/components/ui/slider";

interface InputPriceRangeProps {
  min: number;
  max: number;
  step?: number;
  value: [number, number];
  onValueChange: (value: [number, number]) => void;
  formatValue?: (value: number) => string;
}

const InputPriceRange = ({
  min,
  max,
  step = 1,
  value,
  onValueChange,
  formatValue = (value) => `$${value}`,
}: InputPriceRangeProps) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <span className="font-medium">{formatValue(value[0])}</span>
        <span className="font-medium">{formatValue(value[1])}</span>
      </div>
      <Slider
        defaultValue={value}
        min={min}
        max={max}
        step={step}
        value={value}
        onValueChange={onValueChange}
        className="py-2"
      />
    </div>
  );
};

export { InputPriceRange };
