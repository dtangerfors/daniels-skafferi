import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import '../../styles/swiper.css'
import CourseCarouselItem from './CourseCarouselItem'

export default function CourseCarousel() {
  const data = useStaticQuery(graphql`
    {
      allPrismicCourse {
        edges {
          node {
            url
            uid
            id
            data {
              title {
                raw
              }
              preview {
                url
                alt
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className="relative">
      <Swiper
        spaceBetween={10}
        slidesPerView="3"
        breakpoints={{
          500: {
          slidesPerView: "3"
        },
          800: {
          slidesPerView: "4"
        },
          1024: {
          slidesPerView: "5"
        },
      }}
      >
        {data.allPrismicCourse.edges.map((course) => {
          return (
            <SwiperSlide>
              <CourseCarouselItem course={course.node} key={course.node.id} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
