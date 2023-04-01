import * as React from 'react'
import { Link } from 'gatsby'
import { ArrowRight, ArrowLeft } from 'iconoir-react'

import "./style.css"

// Create URL path for numeric pagination
const getPageNumberPath = (currentIndex) => {
  if (currentIndex === 0) {
    return '/recept/1'
  }
  return '/recept/' + (currentIndex + 1)
}

export const Pagination = ({ pageInfo }) => {
  if (!pageInfo) return null
  const { currentPage, pageCount } = pageInfo

  // Create URL path for previous and next buttons
  const prevPagePath = currentPage - 1 === 1 ? '/recept/1' : '/recept/' + (currentPage - 1).toString()
  const nextPagePath = '/recept/' + (currentPage + 1).toString()

  // Check if page is first or last to disable previous and next buttons
  const prevClass = currentPage === 1 ? 'pagination__item pagination__item--arrow disabled' : 'pagination__item pagination__item--arrow enabled'
  const nextClass = currentPage === pageCount ? 'pagination__item pagination__item--arrow disabled' : 'pagination__item pagination__item--arrow enabled'

  return (
    <div className="pagination">
      <Link className={prevClass} to={prevPagePath} rel="prev">
        {<ArrowLeft />}
      </Link>
      {/*  Render numeric pagination  */}
      {Array.from({ length: pageCount }, (_, i) => {
        let numClass = 'pagination__item page-number'
        if (currentPage === i + 1) {
          numClass = 'pagination__item current-page'
        }
        return (
          <Link to={getPageNumberPath(i)} className={numClass} key={i + 1}>
            {i + 1}
          </Link>
        )
      })}
      <Link className={nextClass} to={nextPagePath} rel="next">
        {<ArrowRight />}
      </Link>
    </div>
  )
}