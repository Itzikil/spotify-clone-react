import { Link } from "react-router-dom";

const DetailsHeader = ({ artistid, artistData, songData }) => (
  // console.log(artistData),
  // console.log(artistid),
  <div className="relative w-full flex flex-col">
    <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />

    <div className="absolute inset-0 flex items-center">
      <img alt="profile" className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
        src={artistid ? artistData?.artists[0].images[0].url : songData?.tracks[0].album.images[0].url} />

      <div className="ml-5">
        <p className="font-bold sm:text-3xl text-xl text-white">{artistid ? artistData?.artists[0]?.name : songData?.tracks[0].name}</p>
        {!artistid && (
          <Link to={`/spotify-clone-react/artists/${songData?.tracks[0].artists[0].name}`}>
            <p className="text-base text-gray-400 mt-2">{songData?.tracks[0].artists[0].name}</p>
          </Link>)}
        <p className="text-base text-gray-400 mt-2">{artistData?.artists[0].genres[0]}</p>
      </div>
    </div>

    <div className="w-full sm:h-44 h-24" />
  </div>
);

export default DetailsHeader;
