import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import img1 from "/src/assets/homePage1/kitaniStudio/image1.png";
import img2 from "/src/assets/homePage1/kitaniStudio/image2.png";
import img3 from "/src/assets/homePage1/kitaniStudio/image3.png";
import img4 from "/src/assets/homePage1/kitaniStudio/image4.png";
import CardContainer from "../commanComponents/CardContainer";

function KitaniStudioCard() {
  const kitaniStudioCardData = [
    {
      cardImg: img1,
      cardContent: "VUE JS SCRATCH COURSE",
      cardAuthor: "Kitani Studio",
      cardCategory: "Web Programming",
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
      cardContent: "UI DESIGN FOR BEGINNERS",
      cardAuthor: "Kitani Studio",
      cardCategory: "UI Design",
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
      cardContent: "MOBILE DEV REACT NATIVE",
      cardAuthor: "Kitani Studio",
      cardCategory: "Mobile Programming",
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
      cardContent: "WEBSITE DEV ZERO TO HERO",
      cardAuthor: "Kitani Studio",
      cardCategory: "Web Programming",
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
        header="More from Kitani Studio"
        heading="We know the best things for You. Top picks for You"
        data={kitaniStudioCardData}
      />
    </>
  );
}

export default KitaniStudioCard;
