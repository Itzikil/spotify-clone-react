import { useNavigate } from "react-router-dom";


const ArtistCard = ({track}) => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      {/* <img src={track?.images?.cover} alt="artist" className="w-full h-56 rounded-lg"/> */}
      <p className="text-white text-xl">{track.rank}. {track?.artist}</p>
      <p className="text-gray-500 text-sm">{track?.followers.toLocaleString()} Followers</p>
    </div>

  )
}

export default ArtistCard;
