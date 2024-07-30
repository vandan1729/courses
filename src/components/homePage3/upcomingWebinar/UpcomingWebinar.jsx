import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import img1 from "/public/homePage1/trendingCourse/image1.png";
import img2 from "/public/homePage1/trendingCourse/image2.png";
import img4 from "/public/homePage1/trendingCourse/image4.png";
import img6 from "/public/homePage1/trendingCourse/image6.png";
import CardContainer from "../../homePage1/cardContainer/CardContainer";
import './upcomingWebinar.css'

function UpcomingWebinar() {
  const trendingCourseData = [
    {
      cardImg: img1,
      cardContent: "Adobe Illustrator Scretch Course",
      cardAuthor: "Kitani Studio",
      cardDescription:
        "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
      cardRating: (
        <>
          <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStarHalfStroke />{" "}
          (1.2k)
        </>
      ),
      cardPrice: "$24.92",
    },
    {
      cardImg: img2,
      cardContent: "Bootcamp  Vue.js Web Framework",
      cardAuthor: "Kitani Studio",
      cardDescription:
        "Learn how to make web application with Vue.js Framework.",
      cardRating: (
        <>
          <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStarHalfStroke />{" "}
          (1.2k)
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
          <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStarHalfStroke />{" "}
          (1.2k)
        </>
      ),
      cardPrice: "$24.92",
    },

    {
      cardImg: img6,
      cardContent: "Bootcamp  Vue.js Web Framework",
      cardAuthor: "Kitani Studio",
      cardDescription:
        "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
      cardRating: (
        <>
          <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStarHalfStroke />{" "}
          (1.2k)
        </>
      ),
      cardPrice: "$24.92",
    },
  ];
  return (
    <>
      <CardContainer
        header="Upcoming Webinar "
        // heading="We know the best things for You.  Top picks for You."
        data={trendingCourseData}
      />
      <div className="recommendations-Div">

        <div>
          <p>Get personal learning recommendations based on your needs</p>
        </div>
        <button>Get Started</button>

      </div>
    </>
  );
}

export default UpcomingWebinar;
