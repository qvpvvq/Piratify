import type React from "react";

export interface Track {
  id: number;
  title: string;
  artist: string;
  iconURL: string;
  fileURL: string;
}

export interface PlayerStore {
  currentTrack: Track | null;
  isPlaying: boolean;
  currentTime: number;
  volume: number;
  isLooped: boolean;
  setVolume: (value: number) => void;
  setCurrentTrack: (track: Track) => void;
  setIsPlaying: (value: boolean) => void;
  togglePlay: () => void;
  toggleLooped: () => void;
}

export interface TrackInfoProps {
  track: Track;
  setCurrentTrack: (track: Track) => void;
  isActive?: boolean;
}

export interface PlaybackProps {
  audioRef: React.RefObject<HTMLAudioElement | null>;
}
