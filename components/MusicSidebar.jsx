import React from 'react';
import { Home, Library, PlusSquare, Heart, Globe, Disc, Mic2 } from 'lucide-react';

const MusicSidebar = ({ playlists }) => {
  return (
    <aside className="w-64 bg-black h-full flex flex-col gap-y-2 p-2 hidden md:flex flex-shrink-0">
      <div className="bg-neutral-900 rounded-lg p-4 flex flex-col gap-4">
        <div className="flex items-center gap-2 px-2 py-1 text-white hover:text-white cursor-pointer transition-colors">
            <Globe className="w-6 h-6 text-brand-green" />
            <span className="font-bold text-lg tracking-tight">SonicWave</span>
        </div>
        
        <nav className="flex flex-col gap-2">
          <a href="#" className="flex items-center gap-4 px-4 py-2 text-white bg-neutral-800 rounded-md font-medium transition-colors">
            <Home className="w-6 h-6" />
            <span>Home</span>
          </a>
          <a href="#" className="flex items-center gap-4 px-4 py-2 text-brand-grey hover:text-white font-medium transition-colors">
            <Disc className="w-6 h-6" />
            <span>Search</span>
          </a>
        </nav>
      </div>

      <div className="bg-neutral-900 rounded-lg flex-1 overflow-hidden flex flex-col">
        <div className="p-4 shadow-md z-10">
          <div className="flex items-center justify-between text-brand-grey hover:text-white transition-colors cursor-pointer mb-4">
            <div className="flex items-center gap-2">
              <Library className="w-6 h-6" />
              <span className="font-bold">Your Library</span>
            </div>
            <PlusSquare className="w-5 h-5 hover:text-white" />
          </div>
          
          <div className="flex gap-2 mb-2">
             <span className="bg-neutral-800 px-3 py-1 rounded-full text-xs font-medium text-white cursor-pointer hover:bg-neutral-700">Playlists</span>
             <span className="bg-neutral-800 px-3 py-1 rounded-full text-xs font-medium text-white cursor-pointer hover:bg-neutral-700">Artists</span>
          </div>
        </div>

        <div className="overflow-y-auto flex-1 px-2 pb-4">
           {/* Special Liked Songs Entry */}
           <div className="flex items-center gap-3 p-2 rounded-md hover:bg-neutral-800 cursor-pointer group">
             <div className="w-12 h-12 bg-gradient-to-br from-indigo-700 to-blue-300 rounded flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-all">
                <Heart className="w-6 h-6 text-white fill-white" />
             </div>
             <div>
                <p className="text-white font-medium">Liked Songs</p>
                <p className="text-sm text-brand-grey">Playlist • 142 songs</p>
             </div>
           </div>

          {playlists.map((playlist) => (
            <div key={playlist.id} className="flex items-center gap-3 p-2 rounded-md hover:bg-neutral-800 cursor-pointer group">
               <div className="w-12 h-12 bg-neutral-800 rounded flex items-center justify-center flex-shrink-0">
                  <Mic2 className="w-6 h-6 text-brand-grey" />
               </div>
               <div className="overflow-hidden">
                <p className="text-white font-medium truncate">{playlist.name}</p>
                <p className="text-sm text-brand-grey truncate">Playlist • You</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default MusicSidebar;
