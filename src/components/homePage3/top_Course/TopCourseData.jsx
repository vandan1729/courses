import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import img1 from "/public/homePage1/kitaniStudio/image1.png";
import img2 from "/public/homePage1/kitaniStudio/image2.png";
import img3 from "/public/homePage1/kitaniStudio/image3.png";
import img4 from "/public/homePage1/kitaniStudio/image4.png";
import img5 from  "/public/homePage3/discountBanner/image.png"
import CardContainer from '../../homePage1/cardContainer/CardContainer'
import Categories3 from "../categories3/Categories3";

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
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStarHalfStroke /> (1.2k)
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
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStarHalfStroke /> (1.2k)
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
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStarHalfStroke /> (1.2k)
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
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStarHalfStroke /> (1.2k)
            </>
          ),
          cardPrice: "$24.92",
        },
      ];
  return (
    <>
    <div className="top-Course-Div">

    <h2>Browse Our Top Courses</h2>

    <Categories3 />

    <CardContainer 
    // header="Browse Our Top Courses"
    data={topCourseCardData}
    />

    <img src={img5} alt="Discount Banner" className="discountBanner-img"/>

    </div>
    </>
  )
}

export default TopCourseData