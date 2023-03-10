import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components'
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery, useGetSongLyricsQuery, useGetRelatedArtistsQuery } from "../redux/services/shazamCore";

const SongDetails = () => {
    const { songid } = useParams()
    const dispatch = useDispatch()
    const { activeSong, isPlaying } = useSelector((state) => state.player)
    const { data: songLyrics, isFetching: isFetchingSongLyrics } = useGetSongLyricsQuery( songid )
    const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery( songid )
    const { data: relatedArtist, isFetching: isFetchingRelatedArtists ,error} = useGetRelatedArtistsQuery( songData?.tracks[0]?.artists[0].uri.slice(15))
    const relatedArtists = relatedArtist?.artists

    const handlePauseClick = () => {
        dispatch(playPause(false))
      }
    
      const handlePlayClick = () => {
        dispatch(setActiveSong({ song, data, i }))
        dispatch(playPause(true))
      }

    if (isFetchingRelatedArtists || isFetchingSongDetails) return <Loader title="Searching song details" />
    if (error) return <Error />
    console.log(songLyrics);
    return (
        <div className="flex flex-col">
            <DetailsHeader artistId={''} songData={songData} />
            <div className="mb-10">
                <h2 className="text-white text-3xl font-bold">Lyrics:</h2>
                <div className="mt-5">
                    {songLyrics?.lyrics.lines.map(({ words }, i) =>
                        <p className="text-gray-400 text-base my-1" key={i}>{words}</p>
                    )}
                </div>
            </div>
            <RelatedSongs data={relatedArtists} isPlaying={isPlaying} activeSong={activeSong} handlePlayClick={handlePlayClick} handlePauseClick={handlePauseClick} />
        </div>
    )
}

export default SongDetails;
