import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import img1 from "/public/homePage1/trendingCourse/image1.png";
import img2 from "/public/homePage1/trendingCourse/image2.png";
import img3 from "/public/homePage1/trendingCourse/image3.png";
import img4 from "/public/homePage1/trendingCourse/image4.png";
import imgLarge from "/public/homePage3/trendingCourses/image.png";
import './trendingCourses.css';

function TrendingCourses() {
  const trendingCourseData = [
    {
      cardImg: img1,
      cardContent: "Adobe Illustrator Scratch Course",
      cardAuthor: "Kitani Studio",
      cardDescription:
        "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
      cardRating: (
        <>
          <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStarHalfStroke /> (1.2k)
        </>
      ),
      cardPrice: "$24.92",
    },
    {
      cardImg: img2,
      cardContent: "Bootcamp Vue.js Web Framework",
      cardAuthor: "Kitani Studio",
      cardDescription: "Learn how to make web application with Vue.js Framework.",
      cardRating: (
        <>
          <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStarHalfStroke /> (1.2k)
        </>
      ),
      cardPrice: "$24.92",
    },
    {
      cardImg: img3,
      cardContent: "Design Fundamentals",
      cardAuthor: "Kitani Studio",
      cardDescription:
        "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
      cardRating: (
        <>
          <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStarHalfStroke /> (1.2k)
        </>
      ),
      cardPrice: "$24.92",
    },
    {
      cardImg: img4,
      cardContent: "Ionic - Build iOS, Android & Web...",
      cardAuthor: "Kitani Studio",
      cardDescription:
        "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
      cardRating: (
        <>
          <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStarHalfStroke /> (1.2k)
        </>
      ),
      cardPrice: "$24.92",
    },
  ];

  return (
    <div className="trending-courses-container">
      <h2>Trending Courses</h2>
      <div className="trending-courses-content">
        <div className="large-img-container">
          <img src={imgLarge} alt="Trending Course" className="large-img" />
        </div>
        <div className="course-cards-container">
          {trendingCourseData.map((item, index) => (
            <div className="course-card" key={index}>
              <img src={item.cardImg} alt="Course" className="course-card-img" />
              <div className="course-card-content">
                <h4>{item.cardContent}</h4>
                <p className="course-card-author">
                  <IoPersonOutline /> {item.cardAuthor}
                </p>
                <p className="course-card-description">{item.cardDescription}</p>
                <p className="course-card-rating">{item.cardRating}</p>
                <p className="course-card-price">{item.cardPrice}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrendingCourses;
