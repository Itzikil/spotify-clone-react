import SongBar from "./SongBar";

const RelatedSongs = ({ data, artistid, isPlaying, activeSong, handlePlayClick, handlePauseClick }) => (
  console.log(data),
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-white">Related Songs:</h1>
    <div className="flex flex-col mt-6 w-full">
      {data?.map((song, i) => (
        <SongBar key={artistid + i || song.id} artistid={artistid} song={song} isPlaying={isPlaying} i={i} activeSong={activeSong}
          handlePlayClick={handlePlayClick} handlePauseClick={handlePauseClick} />
      ))}
    </div>
  </div>
)

export default RelatedSongs;
