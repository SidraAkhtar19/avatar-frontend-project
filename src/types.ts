export type Category = 'HEAD' | 'EYES' | 'HAIR';

export interface AvatarState {
  eyes: 'default' | 'wink' | 'surprised' | 'happy' | 'closed';
  hair: string;
  topColor: string;
  skinColor: string;
  eyesOptionIndex: number;
}

export interface ColorOption {
  name: string;
  hex: string;
}
