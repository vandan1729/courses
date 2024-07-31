import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import img1 from "/src/assets/homePage1/kitaniStudio/image1.png";
import img2 from "/src/assets/homePage1/kitaniStudio/image2.png";
import img3 from "/src/assets/homePage1/kitaniStudio/image3.png";
import img4 from "/src/assets/homePage1/kitaniStudio/image4.png";
import img5 from "/src/assets/homePage3/discountBanner/image.png";
import CardContainer from "/src/components/commanComponents/CardContainer.jsx";
import Categories3 from "./Categories3";

function TopCourseData() {
  const topCourseCardData = [
    {
      cardImg: img1,
      cardContent: "VUE JS SCRATCH COURSE",
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
      cardContent: "UI DESIGN FOR BEGINNERS",
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
      cardImg: img3,
      cardContent: "MOBILE DEV REACT NATIVE",
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
      cardImg: img4,
      cardContent: "WEBSITE DEV ZERO TO HERO",
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
      <div className="topCourseDiv">
        <h2>Browse Our Top Courses</h2>
        <Categories3 />
        <CardContainer data={topCourseCardData} />
        <img src={img5} alt="Discount Banner" className="discountBannerImg" />
      </div>
    </>
  );
}

export default TopCourseData;
