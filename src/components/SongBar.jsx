import React from 'react';
import { Link } from 'react-router-dom';

import PlayPause from './PlayPause';

// const song = artistid ? song

const SongBar = ({ song, i, artistid, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
  <div className={`w-full flex flex-row items-center hover:bg-[#4c426e] ${activeSong?.title === song?.title ? 'bg-[#4c426e]' : 'bg-transparent'} py-2 p-4 rounded-lg cursor-pointer mb-2`}>
    <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img
        className="w-20 h-20 rounded-lg"
        src={artistid ? song?.releases.items[0].coverArt.sources[0].url : song?.images[0].url}
        alt={song?.title}
      />
      <div className="flex-1 flex flex-col justify-center mx-3">
        {!artistid ? (
          <Link to={`/songs/${song.key}`}>
            <p className="text-xl font-bold text-white">
              {song?.name}
            </p>
          </Link>
        ) : (
          <p className="text-xl font-bold text-white">
            {song?.releases.items[0].name}
          </p>
        )}
        <p className="text-base text-gray-300 mt-1">
          {artistid ? song?.releases.items[0].date.year : song?.followers.total.toLocaleString('en') + ' followes'}
        </p>
      </div>
    </div>
    {!artistid
      ? (
        <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={handlePauseClick}
          handlePlay={() => handlePlayClick(song, i)}
        />
      )
      : null}
  </div>
);

export default SongBar;