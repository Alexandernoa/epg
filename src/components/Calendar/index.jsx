import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import usePresenter from './hooks/usePresenter'
import Favorites from "../Favorites"
import './styles.css'
import 'swiper/css'

const Calendar = () => {
  const { daysList, swiperConfig } = usePresenter()

  return (
    <div className={'calendar'}>
      <Swiper { ...swiperConfig }>
        { daysList.map(day => (
          <SwiperSlide key={day.date}>
            <div>{ day.name }</div>
            <div>{ day.date }</div>
          </SwiperSlide>
        )) }
      </Swiper>

      <Favorites />
    </div>

  )
}

export default Calendar
