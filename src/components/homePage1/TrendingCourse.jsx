import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import img1 from "../../assets/homePage1/trendingCourse/image1.png";
import img2 from "/src/assets/homePage1/trendingCourse/image2.png";
import img3 from "/src/assets/homePage1/trendingCourse/image3.png";
import img4 from "/src/assets/homePage1/trendingCourse/image4.png";
import img5 from "/src/assets/homePage1/trendingCourse/image5.png";
import img6 from "/src/assets/homePage1/trendingCourse/image6.png";
import img7 from "/src/assets/homePage1/trendingCourse/image7.png";
import img8 from "/src/assets/homePage1/trendingCourse/image8.png";
import CardContainer from "../commanComponents/CardContainer";

function TrendingCourse() {
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
      cardNewPrice: "$24.92",
      cardOldPrice: "$32.90",
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
    {
      cardImg: img5,
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
      cardNewPrice: "$24.92",
      cardOldPrice: "$32.90",
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
      cardNewPrice: "$24.92",
      cardOldPrice: "$32.90",
    },
    {
      cardImg: img7,
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
      cardImg: img8,
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
    <>
      <CardContainer
        header="Trending Course"
        heading="We know the best things for You.  Top picks for You."
        data={trendingCourseData}
      />
    </>
  );
}

export default TrendingCourse;
