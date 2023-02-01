import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components'
import { useGetSongDetailsQuery, useGetSongLyricsQuery, useGetArtistQuery } from "../redux/services/shazamCore";
import artistSong from '../data/artistsSingles.json'
import artistData from '../data/artist.json'
import songLyrics from '../data/lyrics.json'
import relatedArtists from '../data/relatedArtists.json'

const ArtistDetails = () => {
  const { id: artistid } = useParams()
  const { activeSong, isPlaying } = useSelector((state) => state.player)
  const artistSongs = artistSong.data.artist.discography.singles.items
  // const { data: songLyrics, isFetching: isFetchingSongLyrics } = useGetSongLyricsQuery({ songid })
  // const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery({ songid })
  // const { data: artistData, isFetching: isFetchingArtist, error } = useGetArtistQuery({ artistid })

  // if (isFetchingArtist ) return <Loader title="Loading artist details" />
  // if (error) return <Error />
  return (
    <div className="flex flex-col">
      <DetailsHeader artistid={artistid} artistData={artistData} />

      <RelatedSongs artistid={artistid} data={artistSongs} relatedArtists={relatedArtists} isPlaying={isPlaying} activeSong={activeSong} />
    </div>
  )
}

export default ArtistDetails;
