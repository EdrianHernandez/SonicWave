import { Album, Track, Playlist } from './types';

export const MOCK_ALBUMS: Album[] = [
  {
    id: '1',
    title: 'Midnight Horizons',
    artist: 'The Luna Collective',
    year: 2023,
    coverUrl: 'https://picsum.photos/id/48/300/300',
  },
  {
    id: '2',
    title: 'Neon Dreams',
    artist: 'Cyber Synth',
    year: 2022,
    coverUrl: 'https://picsum.photos/id/56/300/300',
  },
  {
    id: '3',
    title: 'Acoustic Soul',
    artist: 'Sarah Jenkins',
    year: 2024,
    coverUrl: 'https://picsum.photos/id/65/300/300',
  },
  {
    id: '4',
    title: 'Heavy Impact',
    artist: 'Thunderstruck',
    year: 2021,
    coverUrl: 'https://picsum.photos/id/76/300/300',
  },
  {
    id: '5',
    title: 'Lo-Fi Study Beats',
    artist: 'Chill Hopper',
    year: 2023,
    coverUrl: 'https://picsum.photos/id/88/300/300',
  },
  {
    id: '6',
    title: 'Golden Hour',
    artist: 'Sunset Trio',
    year: 2020,
    coverUrl: 'https://picsum.photos/id/91/300/300',
  },
];

export const MOCK_TRACKS: Track[] = [
  {
    id: 't1',
    title: 'Starry Night Blues',
    artist: 'The Luna Collective',
    album: 'Midnight Horizons',
    duration: '3:45',
    plays: '12,453,222',
    coverUrl: 'https://picsum.photos/id/48/50/50',
  },
  {
    id: 't2',
    title: 'Digital Love',
    artist: 'Cyber Synth',
    album: 'Neon Dreams',
    duration: '4:12',
    plays: '8,990,120',
    coverUrl: 'https://picsum.photos/id/56/50/50',
  },
  {
    id: 't3',
    title: 'Morning Coffee',
    artist: 'Sarah Jenkins',
    album: 'Acoustic Soul',
    duration: '2:58',
    plays: '5,332,100',
    coverUrl: 'https://picsum.photos/id/65/50/50',
  },
  {
    id: 't4',
    title: 'Rainy Day Jazz',
    artist: 'The Smooth Operators',
    album: 'City Lights',
    duration: '5:20',
    plays: '2,100,550',
    coverUrl: 'https://picsum.photos/id/102/50/50',
  },
  {
    id: 't5',
    title: 'Electric Avenue',
    artist: 'Retro Wave',
    album: 'Synth City',
    duration: '3:30',
    plays: '15,670,890',
    coverUrl: 'https://picsum.photos/id/111/50/50',
  },
];

export const MOCK_PLAYLISTS: Playlist[] = [
  { id: 'p1', name: 'Driving Beats' },
  { id: 'p2', name: 'Focus Mode' },
  { id: 'p3', name: 'Late Night Chill' },
  { id: 'p4', name: 'Gym Hype' },
  { id: 'p5', name: 'Throwback 90s' },
];