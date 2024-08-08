import { FaStar, FaRegStarHalfStroke } from 'react-icons/fa6'
import img1 from '/src/assets/homePage1/trendingCourse/image1.png'
import img2 from '/src/assets/homePage1/trendingCourse/image2.png'
import img4 from '/src/assets/homePage1/trendingCourse/image4.png'
import img6 from '/src/assets/homePage1/trendingCourse/image6.png'
import CardContainer from '../common/CardContainer'
import '../../styling/UpcomingWebinar.css'

function UpcomingWebinar() {
  const trendingCourseData = [
    {
      cardImg: img1,
      cardContent: 'Adobe Illustrator Scratch Course',
      cardAuthor: 'Kitani Studio',
      cardDescription:
        'More than 8yr Experience as Illustrator. Learn how to become a professional Illustrator Now...',
      cardRating: (
        <>
          <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStarHalfStroke />{' '}
          (1.2k)
        </>
      ),
      cardNewPrice: '$24.92',
      cardOldPrice: '$32.90',
    },
    {
      cardImg: img2,
      cardContent: 'Bootcamp Vue.js Web Framework',
      cardAuthor: 'Kitani Studio',
      cardDescription:
        'Learn how to make web applications with Vue.js Framework.',
      cardRating: (
        <>
          <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStarHalfStroke />{' '}
          (1.2k)
        </>
      ),
      cardNewPrice: '$24.92',
      cardOldPrice: '$32.90',
    },
    {
      cardImg: img4,
      cardContent: 'Ionic - Build iOS, Android & Web...',
      cardAuthor: 'Kitani Studio',
      cardDescription:
        'More than 8yr Experience as Illustrator. Learn how to become a professional Illustrator Now...',
      cardRating: (
        <>
          <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStarHalfStroke />{' '}
          (1.2k)
        </>
      ),
      cardNewPrice: '$24.92',
      cardOldPrice: '$32.90',
    },
    {
      cardImg: img6,
      cardContent: 'Bootcamp Vue.js Web Framework',
      cardAuthor: 'Kitani Studio',
      cardDescription:
        'More than 8yr Experience as Illustrator. Learn how to become a professional Illustrator Now...',
      cardRating: (
        <>
          <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStarHalfStroke />{' '}
          (1.2k)
        </>
      ),
      cardNewPrice: '$24.92',
      cardOldPrice: '$32.90',
    },
  ]

  return (
    <>
      <CardContainer header="Upcoming Webinar" data={trendingCourseData} />
      <div className="recommendationsDiv">
        <div>
          <p>Get personal learning recommendations based on your needs</p>
        </div>
        <button>Get Started</button>
      </div>
    </>
  )
}

export default UpcomingWebinar
