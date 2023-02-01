import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components'
import { useGetArtistQuery, useGetRelatedArtistsQuery } from "../redux/services/shazamCore";
import { useGetArtistSongsQuery } from "../redux/services/spotifyCore";
// import artistSong from '../data/artistsSingles.json'
// import artistData from '../data/artist.json'
// import relatedArtists from '../data/relatedArtists.json'

const ArtistDetails = () => {
  const { id: artistid } = useParams()
  const { activeSong, isPlaying } = useSelector((state) => state.player)
  const { data: artistSong, isFetching: isFetchingArtistSong } = useGetArtistSongsQuery(artistid)
  const { data: relatedArtists, isFetching: isFetchingRelatedArtists } = useGetRelatedArtistsQuery(artistid)
  const { data: artistData, isFetching: isFetchingArtist } = useGetArtistQuery(artistid)
  const artistSongs = artistSong?.data.artist?.discography.singles.items
  
  if (isFetchingArtist) return <Loader title="Loading artist details" />

  return (
    <div className="flex flex-col">
      <DetailsHeader artistid={artistid} artistData={artistData} />

      <RelatedSongs artistid={artistid} data={artistSongs} relatedArtists={relatedArtists} isPlaying={isPlaying} activeSong={activeSong} />
    </div>
  )
}

export default ArtistDetails;
