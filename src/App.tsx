import React, { useState } from 'react';
import { BountyBadge } from './components/BountyBadge';
import { InstructionCard } from './components/InstructionCard';
import { HUD } from './components/HUD';
import { GalleryGrid } from './components/GalleryGrid';
import { AvatarState } from './types';

export default function App() {
  const [avatar, setAvatar] = useState<AvatarState>({
    eyes: 'default',
    hair: 'hair-10',
    topColor: '#f59e0b',
    skinColor: 'ffdbb4',
    eyesOptionIndex: 0
  });

  const handleGallerySelect = (hair: string, skin: string) => {
    setAvatar(prev => ({
      ...prev,
      hair,
      skinColor: skin
    }));
  };

  return (
    <div className="min-h-screen p-12 flex flex-col items-center justify-start bg-[#333333]">
      <div className="w-full max-w-[1500px] flex flex-col gap-12">
        
        {/* Header Section */}
        <header className="flex flex-col gap-8 animate-in slide-in-from-top duration-700">
          <BountyBadge />
          <div className="space-y-1">
            <h1 className="text-5xl font-black tracking-tight text-white uppercase italic">
              Avatar Builder Dashboard
            </h1>
            <p className="text-gray-400 font-bold tracking-widest uppercase text-sm">
              Level 1 Prototype
            </p>
          </div>
        </header>

        {/* Main Content Layout */}
        <main className="flex gap-10 items-start">
          {/* Left Instructions */}
          <div className="animate-in slide-in-from-left duration-700 delay-150">
            <InstructionCard />
          </div>

          {/* Center Main Interface */}
          <div className="flex-1 animate-in zoom-in-95 duration-700 delay-300">
            <HUD avatar={avatar} setAvatar={setAvatar} />
          </div>

          {/* Right Gallery Options */}
          <div className="animate-in slide-in-from-right duration-700 delay-450">
            <GalleryGrid onSelect={handleGallerySelect} currentAvatar={avatar} />
          </div>
        </main>

      </div>

      {/* Footer / Info */}
      <footer className="mt-20 text-gray-600 text-[10px] font-bold tracking-[0.4em] uppercase">
        Pixel Perfect Avatar Builder System &copy; 2024
      </footer>
    </div>
  );
}
