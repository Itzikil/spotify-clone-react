import { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { Error, Loader, SongCard } from '../components'
import { useGetTopChartsByCountryQuery } from '../redux/services/spotifyCore'
import data from '../data/aroundYou.json'

const CountryTracks = () => {

    const [country, setCountry] = useState('')
    const [loding, setLoding] = useState('')
    const { activeSong, isPlaying } = useSelector((state) => state.player)
    // const { data, isFetching, error } = useGetTopChartsByCountryQuery(country)

    useEffect(() => {
        setCountry('IL')
    }, [country])

    // if(isFetching ) return <Loader title="Loading songs around you"/>
    // if(error && country) return <Error/> 

    return (
        <div className='flex flex-col'>
            <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>Around You <span className="font-black">{country}</span></h2>
            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
                {data?.map(({ trackMetadata: song }, i) => (
                    <SongCard key={song.trackUri} song={song} isPlaying={isPlaying} activeSong={activeSong} data={song} i={i} />
                ))}
            </div>
        </div>
    )
}
export default CountryTracks
