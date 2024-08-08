import { FaStar, FaRegStarHalfStroke } from 'react-icons/fa6'

function CardRatingComponent({ cardRating }) {
  const rating = Math.min(cardRating, 5) // Ensure the rating does not exceed 5
  // console.log(rating);
  const fullStars = Math.floor(rating) // Number of full stars
  const hasHalfStar = rating - fullStars >= 0.5 // Check if a half star is needed

  return (
    <div className="cardRating">
      {Array.from({ length: fullStars }).map((_, i) => (
        <FaStar key={`full-${i}`} />
      ))}
      {hasHalfStar && <FaRegStarHalfStroke />}
      {Array.from({ length: 5 - fullStars - (hasHalfStar ? 1 : 0) }).map(
        (_, i) => (
          <FaStar key={`empty-${i}`} style={{ display: 'none' }} />
        ),
      )}
    </div>
  )
}

export default CardRatingComponent
