export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  coverUrl: string;
  plays: string;
}

export interface Album {
  id: string;
  title: string;
  artist: string;
  coverUrl: string;
  year: number;
}

export interface Playlist {
  id: string;
  name: string;
}

export interface PlayerState {
  isPlaying: boolean;
  progress: number; // 0 to 100
  volume: number; // 0 to 100
  currentTrack: Track | null;
}