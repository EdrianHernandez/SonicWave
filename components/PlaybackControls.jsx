import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, Volume2, Maximize2, Mic2, Layers } from 'lucide-react';

const PlaybackControls = ({ currentTrack }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(30);
  const [volume, setVolume] = useState(70);

  const togglePlay = () => setIsPlaying(!isPlaying);

  if (!currentTrack) return null;

  return (
    <footer className="playback-bar fixed bottom-0 left-0 right-0 h-24 bg-black border-t border-neutral-800 px-4 flex items-center justify-between z-50 text-brand-grey">
      {/* Left: Track Info */}
      <div className="flex items-center gap-4 w-1/3 min-w-[180px]">
        <img 
          src={currentTrack.coverUrl} 
          alt={currentTrack.title} 
          className="album-cover w-14 h-14 rounded shadow-lg object-cover"
        />
        <div className="flex flex-col justify-center overflow-hidden">
          <h4 className="text-white font-medium text-sm truncate hover:underline cursor-pointer">
            {currentTrack.title}
          </h4>
          <span className="text-xs text-brand-grey hover:text-white hover:underline cursor-pointer truncate">
            {currentTrack.artist}
          </span>
        </div>
        <button className="ml-2 hover:text-white">
           <div className="w-4 h-4 border border-brand-grey rounded-full flex items-center justify-center text-[10px] hover:border-white hover:scale-105 transition-transform">+</div>
        </button>
      </div>

      {/* Center: Player Controls */}
      <div className="flex flex-col items-center max-w-[40%] w-full gap-2">
        <div className="flex items-center gap-6">
          <button className="text-brand-grey hover:text-white transition-colors" aria-label="Shuffle">
            <Shuffle className="w-4 h-4" />
          </button>
          <button className="text-brand-grey hover:text-white transition-colors" aria-label="Previous">
            <SkipBack className="w-5 h-5 fill-current" />
          </button>
          <button 
            onClick={togglePlay}
            className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform" 
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-current" />
            ) : (
              <Play className="w-5 h-5 fill-current ml-0.5" />
            )}
          </button>
          <button className="text-brand-grey hover:text-white transition-colors" aria-label="Next">
            <SkipForward className="w-5 h-5 fill-current" />
          </button>
          <button className="text-brand-grey hover:text-white transition-colors" aria-label="Repeat">
            <Repeat className="w-4 h-4" />
          </button>
        </div>

        <div className="w-full flex items-center gap-2 text-xs font-mono text-brand-grey group">
          <span>1:12</span>
          <div className="relative h-1 flex-1 bg-neutral-600 rounded-full group hover:h-1.5 transition-all">
             <input 
                type="range" 
                min="0" 
                max="100" 
                value={progress}
                onChange={(e) => setProgress(Number(e.target.value))}
                className="absolute w-full h-full opacity-0 z-20 cursor-pointer"
             />
             <div 
               className="absolute top-0 left-0 h-full bg-white rounded-full group-hover:bg-brand-green" 
               style={{ width: `${progress}%` }}
             ></div>
             {/* Thumb simulated by CSS in index.html, appears on hover of group */}
          </div>
          <span>{currentTrack.duration}</span>
        </div>
      </div>

      {/* Right: Volume & Extra */}
      <div className="flex items-center justify-end gap-3 w-1/3 min-w-[180px]">
        <button className="hover:text-white" aria-label="Lyrics"><Mic2 className="w-4 h-4" /></button>
        <button className="hover:text-white" aria-label="Queue"><Layers className="w-4 h-4" /></button>
        <div className="flex items-center gap-2 w-32 group">
          <Volume2 className="w-5 h-5" />
          <div className="relative h-1 flex-1 bg-neutral-600 rounded-full hover:h-1.5 transition-all">
             <input 
                type="range" 
                min="0" 
                max="100" 
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="absolute w-full h-full opacity-0 z-20 cursor-pointer"
             />
             <div 
               className="absolute top-0 left-0 h-full bg-white rounded-full group-hover:bg-brand-green" 
               style={{ width: `${volume}%` }}
             ></div>
          </div>
        </div>
        <button className="hover:text-white" aria-label="Full Screen"><Maximize2 className="w-4 h-4" /></button>
      </div>
    </footer>
  );
};

export default PlaybackControls;
