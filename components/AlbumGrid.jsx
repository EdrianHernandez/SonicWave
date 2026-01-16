import React from 'react';
import { Play } from 'lucide-react';

const AlbumGrid = ({ albums, title }) => {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-white tracking-tight hover:underline cursor-pointer">{title}</h2>
        <a href="#" className="text-sm font-bold text-brand-grey hover:underline uppercase tracking-wider">Show all</a>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {albums.map((album) => (
          <div 
            key={album.id} 
            className="group bg-neutral-900/40 hover:bg-neutral-800 p-4 rounded-md transition-all duration-300 ease-in-out cursor-pointer relative"
          >
            <div className="relative mb-4">
              <img 
                src={album.coverUrl} 
                alt={album.title} 
                className="w-full aspect-square object-cover rounded shadow-lg group-hover:shadow-xl"
              />
              <button className="absolute bottom-2 right-2 w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-black opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl z-10 hover:scale-105">
                <Play className="w-6 h-6 fill-black ml-1" />
              </button>
            </div>
            
            <h3 className="font-bold text-white text-base truncate mb-1">{album.title}</h3>
            <p className="text-sm text-brand-grey line-clamp-2">
              {album.artist} • {album.year}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AlbumGrid;
