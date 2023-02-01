import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from "swiper"
import data from "../data/data.json"


import PlayPause from "./PlayPause"
import { playPause, setActiveSong } from "../redux/features/playerSlice"
import { useGetTopChartsQuery } from '../redux/services/shazamCore'

import 'swiper/css'
import 'swiper/css/free-mode'

const TopChartCard = ({ song, i  ,isPlaying , activeSong , handlePauseClick , handlePlayClick}) => (
  <div className="w-full flex items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2">
    <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>
    <div className="flex flex-1 justify-between items-center">
      <img src={song?.displayImageUri} alt="" className="w-20 h-20 rounded-lg" />
      <div className="flex flex-1 flex-col justify-center mx-3">
        <Link to={`/spotify-clone-react/songs/${song.trackUri.slice(14)}`}>
          <p className="text-xl font-bold text-white">{song?.trackName} </p>
        </Link>
        <Link to={`/spotify-clone-react/artists/${song.artists[0].spotifyUri.slice(15)}`}>
          <p className="text-base font-bold text-gray-300 mt-1">{song?.artists[0].name}</p>
        </Link>
      </div>
    </div>
    <PlayPause isPlaying={isPlaying} activeSong={activeSong} song={song} handlePlay={handlePlayClick} handlePause={handlePauseClick}/>
  </div>
)

const TopPlay = () => {
  const dispatch = useDispatch()
  const { activeSong, isPlaying } = useSelector((state) => state.player)
  // const { data } = useGetTopChartsQuery()
  const divRef = useRef(null)

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' })
  })

  const topPlays = data?.slice(0, 5)
  const handlePauseClick = () => {
    dispatch(playPause(false))
  }

  const handlePlayClick = (song,i) => {
    dispatch(setActiveSong({ song, data, i }))
    dispatch(playPause(true))
  }

  return (
    <div ref={divRef} className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] flex flex-col">
      <div className="w-full flex flex-col">
        <div className="flex justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Top Charts</h2>
          <Link to="/spotify-clone-react/top-charts">
            <p className="text-gray-300 text-base cursor-pointer">See more</p>
          </Link>
        </div>
        <div className="mt-4 flex flex-col gap-1">
          {topPlays?.map(({ trackMetadata: song }, i) => <TopChartCard song={song} i={i} key={song.trackName}
            isPlaying={isPlaying} activeSong={activeSong} handlePauseClick={handlePauseClick} handlePlayClick={()=>handlePlayClick(song,i)} />)}
        </div>
      </div>

      <div className="w-full lfex flex-col mt-8">
        <div className="flex justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Top Artists</h2>
          <Link to="/spotify-clone-react/top-artists">
            <p className="text-gray-300 text-base cursor-pointer">See more</p>
          </Link>
        </div>
        <Swiper slidesPerView="auto" spaceBetween={15} freeMode centeredSlides centeredSlidesBounds modules={[FreeMode]} className="mt-4">
          {topPlays?.map(({ trackMetadata: song }, i) =>
            <SwiperSlide key={song?.trackName} style={{ width: '25%', height: 'auto' }} className="shadow-lg rounded-full animate-slideright" >
              <Link to={`/spotify-clone-react/artists/${song?.artists[0]}`}>
                <img src={song?.displayImageUri} alt="name" className="rounded-full w-full object-cover" />
              </Link>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div>
  )
}

export default TopPlay
