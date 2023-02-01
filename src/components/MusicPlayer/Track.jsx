import React from 'react';

// const Name = ({name , activeSong}) => {
//   console.log(activeSong , name);
//   if (name === 'song'){
//     return activeSong?.trackName ? activeSong.trackName : activeSong.name
//   } 
//   else return activeSong?.artists[0] ? activeSong.artists[0].name : activeSong.artists.items[0].profile.name
// }

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex-1 flex items-center justify-start">
    <div className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-16 w-16 mr-4`}>
      <img src={activeSong?.trackName ? activeSong?.displayImageUri : activeSong.albumOfTrack.coverArt.sources[0].url} alt="cover art" className="rounded-full" />
    </div>
    <div className="w-[50%]">
      <p className="truncate text-white font-bold text-lg">
        {/* <Name name={'song'} activeSong={activeSong} /> */}
        {activeSong?.trackName ? activeSong.trackName : activeSong.name}
      </p>
      <p className="truncate text-gray-300">
        {/* <Name name={'album'} activeSong={activeSong}/> */}
        {activeSong?.artists[0] ? activeSong.artists[0].name : activeSong.artists.items[0].profile.name}
      </p>
    </div>
  </div>
);

export default Track;
