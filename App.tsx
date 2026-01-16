import React, { useState, useEffect } from 'react';
import MusicSidebar from './components/MusicSidebar';
import AlbumGrid from './components/AlbumGrid';
import TopTracksList from './components/TopTracksList';
import PlaybackControls from './components/PlaybackControls';
import { MOCK_ALBUMS, MOCK_TRACKS, MOCK_PLAYLISTS } from './constants';
import { Track } from './types';
import { ChevronLeft, ChevronRight, User, Bell } from 'lucide-react';

const App: React.FC = () => {
  // Mock State
  const [currentTrack, setCurrentTrack] = useState<Track | null>(MOCK_TRACKS[0]);
  const [backgroundOpacity, setBackgroundOpacity] = useState(0);

  // Scroll handler for top bar transparency effect
  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    const opacity = Math.min(scrollTop / 150, 1);
    setBackgroundOpacity(opacity);
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div className="flex h-screen bg-black text-white font-sans overflow-hidden selection:bg-brand-green selection:text-black">
      
      {/* Sidebar - Hidden on mobile, handled by CSS media queries in component */}
      <MusicSidebar playlists={MOCK_PLAYLISTS} />

      {/* Main Content Area */}
      <main 
        className="flex-1 relative overflow-y-auto bg-neutral-900 rounded-lg my-2 mr-2"
        onScroll={handleScroll}
      >
        {/* Dynamic Background Gradient */}
        <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-b from-indigo-900/50 to-neutral-900 pointer-events-none z-0" />

        {/* Sticky Top Bar */}
        <header 
          className="sticky top-0 z-40 px-6 py-4 flex items-center justify-between transition-colors duration-200"
          style={{ backgroundColor: `rgba(23, 23, 23, ${backgroundOpacity})` }}
        >
          <div className="flex gap-2">
            <button className="bg-black/50 rounded-full p-1 text-neutral-400 hover:text-white cursor-not-allowed">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="bg-black/50 rounded-full p-1 text-neutral-400 hover:text-white cursor-not-allowed">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex items-center gap-4">
             <button className="text-white bg-black/50 hover:bg-neutral-800 font-bold py-1.5 px-4 rounded-full text-sm transition-transform hover:scale-105">
                Explore Premium
             </button>
             <button className="text-white bg-black/50 rounded-full p-2 hover:bg-neutral-800 hover:text-white transition-transform hover:scale-105">
                <Bell className="w-4 h-4" />
             </button>
             <button className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center hover:scale-105 transition-transform border-2 border-transparent hover:border-white">
                <User className="w-5 h-5" />
             </button>
          </div>
        </header>

        {/* Content Content */}
        <div className="relative z-10 px-6 pb-32 pt-2">
          
          <h1 className="text-3xl font-bold mb-6 tracking-tight">{getGreeting()}</h1>

          {/* Recently Played Quick Grid (Mini Feature) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
            {MOCK_ALBUMS.slice(0, 6).map((album) => (
               <div key={`recent-${album.id}`} className="flex items-center bg-neutral-800/50 hover:bg-neutral-700/80 rounded overflow-hidden cursor-pointer transition-colors group">
                 <img src={album.coverUrl} alt={album.title} className="w-16 h-16 object-cover shadow-lg" />
                 <span className="font-bold text-sm ml-4 truncate flex-1">{album.title}</span>
                 {/* Play Button - Only visible on hover */}
                 <div className="mr-4 w-10 h-10 bg-brand-green rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all shadow-xl hover:scale-105">
                    <svg role="img" height="20" width="20" aria-hidden="true" viewBox="0 0 24 24" className="fill-black"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>
                 </div>
               </div>
            ))}
          </div>

          <TopTracksList tracks={MOCK_TRACKS} />
          
          <AlbumGrid title="Jump Back In" albums={MOCK_ALBUMS} />
          
          <AlbumGrid title="Made For You" albums={[...MOCK_ALBUMS].reverse()} />
          
        </div>
      </main>

      <PlaybackControls currentTrack={currentTrack} />
    </div>
  );
};

export default App;