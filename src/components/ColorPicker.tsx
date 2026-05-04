import React from 'react';

interface ColorPickerProps {
  activeColor: string;
  onChange: (hex: string) => void;
}

const colors = [
  { name: 'Amber', hex: '#f59e0b' },
  { name: 'Red', hex: '#ef4444' },
  { name: 'Blue', hex: '#3b82f6' },
  { name: 'Emerald', hex: '#10b981' },
  { name: 'White', hex: '#ffffff' },
  { name: 'Black', hex: '#000000' },
];

export const ColorPicker: React.FC<ColorPickerProps> = ({ activeColor, onChange }) => {
  return (
    <div className="space-y-3">
      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">Color</span>
      <div className="flex gap-2">
        {colors.map((c) => (
          <button
            key={c.hex}
            onClick={() => onChange(c.hex)}
            className={`w-7 h-7 rounded-md transition-all duration-200 border-2 ${
              activeColor === c.hex 
              ? 'border-white scale-110 shadow-lg' 
              : 'border-transparent hover:scale-110'
            }`}
            style={{ backgroundColor: c.hex }}
            title={c.name}
          />
        ))}
      </div>
      
      <div className="mt-4 p-2 bg-[#1e293b] rounded-lg border border-white/5">
        <div className="h-20 w-full bg-gradient-to-tr from-orange-500 via-orange-300 to-white rounded relative overflow-hidden mb-2">
          <div className="absolute top-2 right-2 w-4 h-4 rounded-full border-2 border-white shadow-md bg-orange-600 cursor-pointer" />
        </div>
        <div className="flex justify-between items-center text-[10px] font-mono text-gray-400 uppercase tracking-tighter">
          <span className="bg-black/20 px-1 rounded">#E89623</span>
          <span className="bg-black/20 px-1 rounded">232 150 35</span>
        </div>
      </div>
    </div>
  );
};
