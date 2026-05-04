import React from 'react';
import { AvatarState } from '../types';

interface GalleryGridProps {
  onSelect: (hairSeed: string, skinColor: string) => void;
  currentAvatar: AvatarState;
}

const SKIN_COLORS = ['f8d25c', 'ffdbb4', 'edb98a', 'd08b5b', 'ae5d29', '614335'];

export const GalleryGrid: React.FC<GalleryGridProps> = ({ onSelect, currentAvatar }) => {
  return (
    <div className="w-[320px] flex flex-col gap-4 h-[640px]">
      <h4 className="text-gray-400 font-bold text-sm tracking-tight">Hairstyles Skintones Update 1</h4>
      <div className="flex-1 bg-[#1e40af] p-4 grid grid-cols-3 gap-3 overflow-y-auto rounded-md shadow-inner scrollbar-hide">
        {Array.from({ length: 18 }).map((_, i) => {
          const skin = SKIN_COLORS[i % SKIN_COLORS.length];
          const hairSeed = `hair-${i + 10}`;
          const isActive = currentAvatar.hair === hairSeed && currentAvatar.skinColor === skin;
          
          return (
            <div 
              key={i} 
              onClick={() => onSelect(hairSeed, skin)}
              className={`aspect-square bg-blue-900/40 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 border-2 hover:bg-blue-800/60 flex items-center justify-center ${
                isActive ? 'border-white scale-95 bg-blue-700/80 shadow-lg' : 'border-transparent hover:scale-105'
              }`}
            >
              <img 
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${hairSeed}&skinColor=${skin}&topColor=4a3728&eyes=default`} 
                alt={`option-${i}`} 
                className="w-[90%] h-[90%] object-contain"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
