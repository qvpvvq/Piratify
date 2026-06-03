export interface Track {
  id: number;
  title: string;
  artist: string;
  duration: number;
  iconURL: string;
  fileURL: string;
}

export interface PlayerStore {
  currentTrack: Track | null;
  isPlaying: boolean;
  currentTime: number;
  setCurrentTrack: (track: Track) => void;
  setIsPlaying: (value: boolean) => void;
  togglePlay: () => void;
}
