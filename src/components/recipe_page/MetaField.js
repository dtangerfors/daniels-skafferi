import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import { PrismicText } from '@prismicio/react'
import { BookStack, Calendar, Clutery } from 'iconoir-react'

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

  const publishedAt = new Date(publishDate).toLocaleDateString() || "Datum saknas";
  const metaCategory = data.allPrismicCategory.edges.filter(uid => uid.node.uid === categoryID)[0].node || "Okategoriserad";
  const metaCourse = data.allPrismicCourse.edges.filter(uid => uid.node.uid === courseID)[0].node || "Ingen vald";

  return (
    <ul className="flex mt-4">
      {publishDate && <li className="text-sm text-sans leading-none flex items-center mr-4">
      <span className="text-primary mr-1"><Calendar/></span>
        {publishedAt}
      </li>}
      {category && <li className="text-sm text-sans leading-none flex items-center mr-4">
        <span className="text-primary mr-1"><BookStack/></span>
        
        <Link to={metaCategory.url}>
          <PrismicText field={metaCategory.data.title.richText} />
        </Link>
      </li>}
      {course && <li className="text-sm text-sans leading-none flex items-center mr-4">
      <span className="text-primary mr-1"><Clutery/></span>
         <Link to={metaCourse.url}>
         <PrismicText field={metaCourse.data.title.richText} />
         </Link>
      </li>}
    </ul>
  )
}

export default MetaField