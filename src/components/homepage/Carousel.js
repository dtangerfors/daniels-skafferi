import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import '../../styles/swiper.css'

import CarouselCard from '../cards/CarouselCard'

export default function Carousel({recipes}) {
   return (
      <div className="py-5.5 pr-[25%]">
      <Swiper
        spaceBetween={10}
        slidesPerView="1"
        breakpoints={{
          500: {
          slidesPerView: "2"
        },
          800: {
          slidesPerView: "3"
        }
      }}
      >
      {recipes.map((recipe) => {
          return (
            <SwiperSlide>
              <CarouselCard key={recipe.node.id} recipe={recipe.node} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
   )
}
