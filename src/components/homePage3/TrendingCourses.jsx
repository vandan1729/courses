import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import img1 from "/src/assets/homePage1/trendingCourse/image1.png";
import img2 from "/src/assets/homePage1/trendingCourse/image2.png";
import img3 from "/src/assets/homePage1/trendingCourse/image3.png";
import img4 from "/src/assets/homePage1/trendingCourse/image4.png";
import imgLarge from "/src/assets/homePage3/trendingCourses/image.png";
import "/src/styling/TrendingCourses.css";

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
          <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStarHalfStroke />{" "}
          (1.2k)
        </>
      ),
      cardNewPrice: "$24.92",
      cardOldPrice: "$32.90",
    },
    {
      cardImg: img2,
      cardContent: "Bootcamp Vue.js Web Framework",
      cardAuthor: "Kitani Studio",
      cardDescription:
        "Learn how to make web application with Vue.js Framework.",
      cardRating: (
        <>
          <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStarHalfStroke />{" "}
          (1.2k)
        </>
      ),
      cardNewPrice: "$24.92",
      cardOldPrice: "$32.90",
    },
    {
      cardImg: img3,
      cardContent: "Design Fundamentals",
      cardAuthor: "Kitani Studio",
      cardDescription:
        "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
      cardRating: (
        <>
          <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStarHalfStroke />{" "}
          (1.2k)
        </>
      ),
      cardNewPrice: "$24.92",
      cardOldPrice: "$32.90",
    },
    {
      cardImg: img4,
      cardContent: "Ionic - Build iOS, Android & Web...",
      cardAuthor: "Kitani Studio",
      cardDescription:
        "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
      cardRating: (
        <>
          <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStarHalfStroke />{" "}
          (1.2k)
        </>
      ),
      cardNewPrice: "$24.92",
      cardOldPrice: "$32.90",
    },
  ];

  return (
    <div className="trendingCoursesContainer">
      <h2>Trending Courses</h2>
      <div className="trendingCoursesContent">
        <div className="largeImgContainer">
          <img src={imgLarge} alt="Trending Course" className="largeImg" />
        </div>
        <div className="courseCardsContainer">
          {trendingCourseData.map((item, index) => (
            <div className="courseCard" key={index}>
              <img src={item.cardImg} alt="Course" className="courseCardImg" />
              <div className="courseCardContent">
                <h4>{item.cardContent}</h4>
                <p className="courseCardAuthor">
                  <IoPersonOutline /> {item.cardAuthor}
                </p>
                <p className="courseCardDescription">{item.cardDescription}</p>
                <p className="courseCardRating">{item.cardRating}</p>
                <p className="courseCardPrice">{item.cardPrice}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrendingCourses;
