import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { Error, Loader, SongCard } from '../components'

import data from '../data/data.json'
import { useGetBySearchQuery } from '../redux/services/spotifyCore';

const Search = () => {
  const { searchTerm } = useParams();
  console.log(searchTerm);
  console.log(useParams());
  const { activeSong, isPlaying } = useSelector((state) => state.player)
  const { data, isFetching, error } = useGetBySearchQuery(searchTerm)

  if(isFetching ) return <Loader title="Loading songs around you"/>
  if(error && country) return <Error/> 

  return (
    <div className='flex flex-col'>
      <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>Results for '{searchTerm}'</h2>
      <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
        {data.tracks.map(({ data: song }, i) => (
          <SongCard
            key={song.uri}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  )
}
export default Search