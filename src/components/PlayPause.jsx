// import { FaPauseCircle, FaPlayingCicle } from 'react-icons/fa'
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

import SongBar from './SongBar'

const PlayPause = ({ handlePause, handlePlay, song, activeSong, isPlaying, data }) => (
  (isPlaying && ((activeSong?.trackName === song.trackName && song.trackName) || (activeSong?.trackName === song.name && song.name)) ? (
    <FaPauseCircle
    size={35} className="text-gray-300" onClick={handlePause}
    />
  ) : (
    <FaPlayCircle
    size={35} className="text-gray-300" onClick={handlePlay}
    />
  )
  ))

export default PlayPause
