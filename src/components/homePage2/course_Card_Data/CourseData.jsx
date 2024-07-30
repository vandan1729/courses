import CardContainer from "../../homePage1/cardContainer/CardContainer";
import img1 from "/public/homePage2/completeCourseCard/image1.png";
import img2 from "/public/homePage2/completeCourseCard/image2.png";
import img3 from "/public/homePage2/completeCourseCard/image3.png";

function CourseData() {
  const completeCourseCardData = [
    {
      cardImg: img1,
      cardContent: "Java Programming Beginner",
      cardAuthor: "Kitani Studio",
      cardDescription: "4/10 Videos Completed",
    },
    {
      cardImg: img2,
      cardContent: "iOS 13 & Swift 5 - Complete iOS...",
      cardAuthor: "Kitani Studio",
      cardDescription: "12/40 Videos Completed",
    },
    {
      cardImg: img3,
      cardContent: "Wordpress Course Intermediate",
      cardAuthor: "Ghoniyyu Maulidi",
      cardDescription: "3/8 Videos Completed",
    },
  ];
  return (
    <>
      <CardContainer
        header="Complete your Course"
        heading="We know the best things for You.  Top picks for You."
        data={completeCourseCardData}
      />
    </>
  );
}

export default CourseData;
