import React from 'react';
import { Clock, Heart, Play } from 'lucide-react';

const TopTracksList = ({ tracks }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Popular</h2>
      
      <div className="flex flex-col">
        {/* Header - visible on medium+ screens */}
        <div className="hidden md:flex items-center text-brand-grey text-sm border-b border-neutral-800 pb-2 mb-2 px-4">
          <div className="w-8 text-center">#</div>
          <div className="flex-1 ml-4">Title</div>
          <div className="w-48">Album</div>
          <div className="w-24 text-right">Plays</div>
          <div className="w-16 text-right flex justify-end pr-2"><Clock className="w-4 h-4" /></div>
        </div>

        {tracks.map((track, index) => (
          <div 
            key={track.id} 
            className="track-row group flex items-center py-2 px-2 md:px-4 rounded-md hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            {/* Number / Play Icon */}
            <div className="w-8 text-center text-brand-grey font-medium text-base relative h-5 flex items-center justify-center">
               <span className="group-hover:hidden">{index + 1}</span>
               <Play className="w-4 h-4 fill-white text-white hidden group-hover:block" />
            </div>

            {/* Track Info */}
            <div className="flex-1 flex items-center gap-3 ml-2 md:ml-4 overflow-hidden">
              <img src={track.coverUrl} alt={track.title} className="w-10 h-10 rounded shadow-sm" />
              <div className="flex flex-col truncate">
                <span className="text-white font-medium text-base truncate group-hover:text-brand-green transition-colors">{track.title}</span>
                <span className="text-brand-grey text-sm truncate md:hidden">{track.artist}</span>
                <span className="text-brand-grey text-sm truncate hidden md:inline group-hover:text-white">{track.artist}</span>
              </div>
            </div>

            {/* Album (Hidden on small) */}
            <div className="w-48 text-brand-grey text-sm hidden md:flex items-center truncate group-hover:text-white">
              {track.album}
            </div>

            {/* Plays (Hidden on small) */}
             <div className="w-24 text-brand-grey text-sm text-right hidden lg:block tabular-nums">
              {track.plays}
            </div>

            {/* Duration / Like */}
            <div className="w-16 flex items-center justify-end gap-4">
               <Heart className="w-4 h-4 text-brand-grey opacity-0 group-hover:opacity-100 hover:text-white transition-all" />
               <span className="text-brand-grey text-sm tabular-nums">{track.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopTracksList;
