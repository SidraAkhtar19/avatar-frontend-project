import React, { useState } from 'react';
import { 
  Home, 
  ShoppingBag, 
  Trophy, 
  Settings, 
  Gem,
  Box,
  LayoutGrid
} from 'lucide-react';
import { ColorPicker } from './ColorPicker';
import { AvatarState, Category } from '../types';

interface HUDProps {
  avatar: AvatarState;
  setAvatar: React.Dispatch<React.SetStateAction<AvatarState>>;
}

export const HUD: React.FC<HUDProps> = ({ avatar, setAvatar }) => {
  const [activeTab, setActiveTab] = useState<Category>('EYES');

  const eyeStyles: AvatarState['eyes'][] = ['default', 'wink', 'surprised', 'happy', 'closed'];

  return (
    <div className="relative bg-[#0a192f] border-[6px] border-[#1e293b] rounded-[2.5rem] overflow-hidden shadow-2xl w-full max-w-4xl aspect-[16/10] flex flex-col font-sans">
      
      {/* Top HUD Bar */}
      <div className="flex items-center justify-between px-8 py-4 bg-[#112240] border-b border-[#1e293b]/50">
        <div className="flex items-center gap-6">
          <button className="p-2.5 bg-[#1e293b] rounded-xl text-blue-400 hover:bg-[#25334a] transition-colors">
            <Box size={20} />
          </button>
          <nav className="flex items-center gap-8 text-[11px] font-black tracking-widest text-gray-400">
            <button className="flex items-center gap-2 hover:text-white transition-colors">
              <Home size={16} /> HOME
            </button>
            <button className="flex items-center gap-2 text-blue-400">
              <ShoppingBag size={16} /> SHOP
            </button>
            <button className="flex items-center gap-2 hover:text-white transition-colors">
              <Trophy size={16} /> RANK
            </button>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-[#1e293b] px-4 py-1.5 rounded-full flex items-center gap-2 border border-cyan-500/20">
             <Gem size={14} className="text-cyan-400" /> 
             <span className="text-[11px] font-black tracking-tight">166</span>
          </div>
          <div className="bg-[#1e293b] px-4 py-1.5 rounded-full flex items-center gap-2 border border-teal-500/20">
             <span className="text-teal-400 font-black text-[10px]">XP</span> 
             <span className="text-[11px] font-black tracking-tight">199</span>
          </div>
          <div className="bg-[#1e293b] px-4 py-1.5 rounded-full flex items-center gap-2 border border-white/5">
             <span className="text-yellow-400 font-black text-[10px]">Python</span>
          </div>
          <button className="ml-2 text-gray-500 hover:text-white transition-colors">
            <Settings size={20} />
          </button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Vertical HUD Tabs */}
        <div className="w-24 border-r border-[#1e293b]/50 flex flex-col items-center py-10 gap-10">
            {(['HEAD', 'EYES', 'HAIR'] as Category[]).map(cat => (
                <button 
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`text-[10px] font-black tracking-[0.2em] py-2 px-1 w-full text-center transition-all relative ${
                      activeTab === cat 
                      ? 'text-white' 
                      : 'text-gray-600 hover:text-gray-400'
                    }`}
                >
                    {activeTab === cat && (
                      <div className="absolute inset-y-0 left-0 w-1 bg-blue-500 rounded-r-full shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                    )}
                    <span className={activeTab === cat ? 'bg-blue-600 px-3 py-1.5 rounded-md' : ''}>
                      {cat}
                    </span>
                </button>
            ))}
        </div>

        {/* Center Avatar Display */}
        <div className="flex-1 bg-[radial-gradient(circle_at_center,_#162a4d_0%,_#0a192f_70%)] flex flex-col items-center justify-center relative">
             {/* Decorative grid elements */}
             <div className="absolute inset-0 opacity-10 pointer-events-none" 
                  style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
             
             {/* Avatar Render Area */}
             <div className="relative group">
                <div className="absolute -inset-8 border border-blue-500/20 rounded-xl transition-all group-hover:border-blue-500/40" />
                <div className="relative w-64 h-96 z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  <img 
                    key={`${avatar.eyes}-${avatar.hair}-${avatar.topColor}-${avatar.skinColor}`}
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${avatar.hair}&eyebrows=default&eyes=${avatar.eyes}&topColor=${avatar.topColor.replace('#','')}&skinColor=${avatar.skinColor}`} 
                    alt="Avatar Preview" 
                    className="w-full h-full object-contain transition-all duration-500 animate-in fade-in zoom-in-95"
                  />
                </div>
                {/* Dimensions Label */}
                <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 bg-blue-500/10 text-blue-400 text-[10px] px-5 py-1.5 font-black tracking-widest border border-blue-500/30 rounded backdrop-blur-sm">
                  305 × 688.34
                </div>
             </div>
        </div>

        {/* Right HUD Controls */}
        <div className="w-72 p-8 flex flex-col gap-10 border-l border-[#1e293b]/50 bg-[#0d1d36]/50">
            <div className="space-y-4">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">Eyes</span>
                <div className="grid grid-cols-2 gap-3">
                    {eyeStyles.slice(0, 4).map((style, i) => (
                        <button 
                            key={style}
                            onClick={() => setAvatar({...avatar, eyes: style, eyesOptionIndex: i})}
                            className={`h-14 bg-[#112240] rounded-xl border-2 transition-all duration-200 flex items-center justify-center hover:bg-[#1e293b] ${
                              avatar.eyes === style 
                              ? 'border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.4)] bg-[#1e293b]' 
                              : 'border-[#1e293b]'
                            }`}
                        >
                            <div className="flex gap-2">
                                <div className={`w-2.5 h-2.5 bg-white rounded-full ${style === 'closed' ? 'h-0.5 mt-1' : ''}`} />
                                <div className={`w-2.5 h-2.5 bg-white rounded-full ${style === 'wink' ? 'h-0.5 mt-1' : ''} ${style === 'closed' ? 'h-0.5 mt-1' : ''}`} />
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            <ColorPicker 
              activeColor={avatar.topColor} 
              onChange={(c) => setAvatar({...avatar, topColor: c})} 
            />
        </div>
      </div>

      {/* Bottom Nav Bar */}
      <div className="h-14 bg-[#112240] border-t border-[#1e293b]/50 flex items-center justify-center gap-16">
            <button className="text-gray-500 hover:text-blue-400 transition-colors">
              <Settings size={20} />
            </button>
            <button className="text-blue-400">
              <Box size={22} />
            </button>
            <button className="text-gray-500 hover:text-blue-400 transition-colors">
              <Home size={20} />
            </button>
            <button className="text-gray-500 hover:text-blue-400 transition-colors">
              <LayoutGrid size={20} />
            </button>
      </div>
    </div>
  );
};
