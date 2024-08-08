import { useContext, useState } from 'react'
import { CardContext } from '../../contextProvider/CardFilter'

import '/src/styling/Categories.css'

function Categories() {
  const { newCardData, cardValue } = useContext(CardContext)

  const handleClick = (category) => {
    newCardData(category)
  }

  const categories = [
    'All Recommendation',
    'Adobe Illustrator',
    'Adobe Photoshop',
    'UI Design',
    'Web Programming',
    'Mobile Programming',
    'Backend Development',
    'Vue JS',
  ]

  return (
    <div className="categoriesText">
      {categories.map((category, index) => (
        <span
          key={index}
          className={`categoriesSpan ${cardValue === category ? 'selected' : ''}`}
          onClick={() => handleClick(category)}
        >
          {category}
        </span>
      ))}
    </div>
  )
}

export default Categories
