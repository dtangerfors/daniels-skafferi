import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

import 'swiper/css'
import '../../styles/swiper.css'

import CarouselCard from '../cards/CarouselCard'

export default function Carousel({recipes}) {
   return (
      <div className="py-5.5 pr-[15%] lg:pr-0 relative">
      <Swiper
        spaceBetween={10}
        slidesPerView="1"
        modules={[Navigation]}
        navigation
        breakpoints={{
          500: {
          slidesPerView: "2"
        },
          800: {
          slidesPerView: "2",
          spaceBetween:22
        }
      }}
      >
      {recipes.map((recipe) => {
          return (
            <SwiperSlide key={recipe.node.id}>
              <CarouselCard recipe={recipe.node} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
   )
}
