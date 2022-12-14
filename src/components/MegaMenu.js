import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { motion } from 'framer-motion'
import { PrismicText } from '@prismicio/react'

function MenuLink({ to, children }) {
  return (
    <li className="mb-2">
      <Link
        to={to}
        className="text-neutral-500 hover:text-neutral-700"
        activeClassName="text-primary"
        partiallyActive={true}
      >
        {children}
      </Link>
    </li>
  )
}

const MegaMenu = ({ open }) => {
  const data = useStaticQuery(graphql`
  {
    allPrismicCourse {
      edges {
        node {
          url
          data {
            title {
              raw
            }
          }
          id
        }
      }
    }
    allPrismicCategory {
      edges {
        node {
          url
          id
          data {
            title {
              raw
            }
          }
        }
      }
    }
  }  
  `)

  const allCourseLinks = data.allPrismicCourse.edges;
  const allCategoryLinks = data.allPrismicCategory.edges;

  return (
    <motion.div
      initial={{
        y: '-100%',
        opacity: 0,
        display: 'none',
      }}
      animate={{
        y: open ? 0 : '-100%',
        opacity: open ? 1 : 0,
        display: open ? 'block' : 'none',
      }}
      transition={{ type: 'tween', duration: 0.3 }}
      className="absolute top-12 md:top-16 left-0 w-full -z-10 bg-neutral-50 border-neutral-200 border-b px-6 pt-10 pb-6"
    >
      <div className="max-w-screen-lg mx-auto py-6" key="menu-container">
        <ul className="flex flex-wrap gap-4" key="menu-list">
        <li className="w-full" key="menu-item-category">
            <p className="font-serif text-lg text-primary border-b-2 border-dotted border-neutral-300 pb-2 mb-4">
              Kategori
            </p>
            <ul>
              {allCategoryLinks.map((CategoryLink, i) => (<MenuLink key={CategoryLink.node.id} to={CategoryLink.node.url}><PrismicText field={CategoryLink.node.data.title.raw} /></MenuLink>))}
            </ul>
          </li>
        <li className="flex-1" key="menu-item-course">
            <p className="font-serif text-lg text-primary border-b-2 border-dotted border-neutral-300 pb-2 mb-4">
              Typ av r??tt
            </p>
            <ul>
              {allCourseLinks.map((CourseLink, i) => (<MenuLink key={CourseLink.node.id} to={CourseLink.node.url}><PrismicText field={CourseLink.node.data.title.raw} /></MenuLink>))}
            </ul>
          </li>
          <li className="flex-1" key="menu-item-info">
            <p className="font-serif text-lg text-primary border-b-2 border-dotted border-neutral-300 pb-2 mb-4">
              Om
            </p>
            <ul>
              <MenuLink to="/om" key="menu-item-2-1">Om</MenuLink>
              <MenuLink to="/cookies" key="menu-item-2-2">Cookies</MenuLink>
              <MenuLink to="/webbplatsinformation" key="menu-item-2-3">
                Webbplatsinformation
              </MenuLink>
            </ul>
          </li>
        </ul>
      </div>
    </motion.div>
  )
}

export default MegaMenu
