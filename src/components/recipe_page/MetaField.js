import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import { PrismicText } from '@prismicio/react'

const MetaField = ({ category, course, publishDate }) => {
   const categoryID = category[0].category.uid;
   const courseID = course[0].course.uid;

   const data = useStaticQuery(graphql`
   {
      allPrismicCategory {
        edges {
          node {
            uid
            url
            data {
              title {
                richText
              }
            }
          }
        }
      }
      allPrismicCourse {
        edges {
          node {
            uid
            url
            data {
              title {
                richText
              }
            }
          }
        }
      }
    }
  `)

  const publishedAt = new Date(publishDate).toLocaleDateString();
  const metaCategory = data.allPrismicCategory.edges.filter(uid => uid.node.uid === categoryID)[0].node;
  const metaCourse = data.allPrismicCourse.edges.filter(uid => uid.node.uid === courseID)[0].node;

  return (
    <ul className="flex mt-4">
      <li className="text-base text-sans flex items-center mr-4">
        <i className="ri-calendar-line text-primary mr-2 leading-none"></i>{' '}
        {publishedAt}
      </li>
      <li className="text-base text-sans flex items-center mr-4">
        <i className="ri-book-3-line text-primary mr-2 leading-none"></i>{' '}
        <Link to={metaCategory.url}>
          <PrismicText field={metaCategory.data.title.richText} />
        </Link>
      </li>
      <li className="text-base text-sans flex items-center mr-4">
        <i className="ri-book-3-line text-primary mr-2 leading-none"></i>{' '}
         <Link to={metaCourse.url}>
         <PrismicText field={metaCourse.data.title.richText} />
         </Link>
      </li>
    </ul>
  )
}

export default MetaField