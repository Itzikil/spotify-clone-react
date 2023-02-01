import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";


import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from '../redux/features/playerSlice'

const SongCard = ({ song, activeSong, isPlaying, data, i }) => {
  const dispatch = useDispatch()

  const handlePauseClick = () => {
    dispatch(playPause(false))
  }

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }))
    dispatch(playPause(true))
  }

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex
         ${((activeSong?.trackName === song.trackName && song.trackName) || (activeSong?.trackName === song.name && song.name)) ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
          <PlayPause song={song} handlePause={handlePauseClick} handlePlay={handlePlayClick} activeSong={activeSong} isPlaying={isPlaying} />
        </div>
        <img src={song?.trackUri ? song.displayImageUri : song.albumOfTrack.coverArt.sources[0].url} alt="song_img" />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="font-semibold flex-col text-white truncate">
          <Link to={`/songs/${song?.trackUri ? song.trackUri.slice(14) : song.uri.slice(14)}`}>
            {song?.trackUri ? song.trackName : song.name}
          </Link>
        </p>
        <p className="text-sm text-gray-300 mt-1 truncate">
          <Link to={song.artists ? `/artists/${song?.artists.items ? song.artists.items[0].uri.slice(15) : song.artists[0].spotifyUri.slice(15)}` : '/top-artists'}>
            {song?.trackUri ? song.artists[0].name : song.artists.items[0].profile.name}
          </Link>
        </p>
      </div>
    </div>
  )
}
export default SongCard;
