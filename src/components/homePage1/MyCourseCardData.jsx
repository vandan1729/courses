import MyCourseCardContainer from "../commanComponents/MyCourseCardContainer";

function MyCourseCardData() {
  const myCourseCardData = [
    {
      cardImg: "/src/assets/homePage1/myCourse/image1.png",
      cardContent: "Java Programming Beginner",
      cardAuthor: "Kitani Studio",
      cardDescription: "4/10 Videos Completed",
    },
    {
      cardImg: "/src/assets/homePage1/myCourse/image2.png",
      cardContent: "iOS 13 & Swift 5 - Complete iOS...",
      cardAuthor: "Kitani Studio",
      cardDescription: "Not Yet Started",
    },
    {
      cardImg: "/src/assets/homePage1/myCourse/image3.png",
      cardContent: "Wordpress Course Intermediate",
      cardAuthor: "Kitani Studio",
      cardDescription: "3/8 Videos Completed",
    },
    {
      cardImg: "/src/assets/homePage1/myCourse/image4.png",
      cardContent: "Wordpress Course Intermediate",
      cardAuthor: "Kitani Studio",
      cardDescription: "Not Yet Started",
    },
    {
      cardImg: "/src/assets/homePage1/myCourse/image5.png",
      cardContent: "Java Programming Beginner",
      cardAuthor: "Kitani Studio",
      cardDescription: "Not Yet Started",
    },
    {
      cardImg: "/src/assets/homePage1/myCourse/image6.png",
      cardContent: "Java Programming Beginner",
      cardAuthor: "Kitani Studio",
      cardDescription: "4/10 Videos Completed",
    },
    {
      cardImg: "/src/assets/homePage1/myCourse/image7.png",
      cardContent: "JiOS 13 & Swift 5 - Complete iOS...",
      cardAuthor: "Kitani Studio",
      cardDescription: "Not Yet Started",
    },
    {
      cardImg: "/src/assets/homePage1/myCourse/image8.png",
      cardContent: "Wordpress Course Intermediate",
      cardAuthor: "Kitani Studio",
      cardDescription: "Not Yet Started",
    },
    {
      cardImg: "/src/assets/homePage1/myCourse/image9.png",
      cardContent: "Wordpress Course Intermediate",
      cardAuthor: "Kitani Studio",
      cardDescription: "Not Yet Started",
    },
    {
      cardImg: "/src/assets/homePage1/myCourse/image10.png",
      cardContent: "Java Programming Beginner",
      cardAuthor: "Kitani Studio",
      cardDescription: "Not Yet Started",
    },
    {
      cardImg: "/src/assets/homePage1/myCourse/image11.png",
      cardContent: "Wordpress Course Intermediate",
      cardAuthor: "Kitani Studio",
      cardDescription: "Completed!",
    },
    {
      cardImg: "/src/assets/homePage1/myCourse/image12.png",
      cardContent: "Wordpress Course Intermediate",
      cardAuthor: "Kitani Studio",
      cardDescription: "Completed!",
    },
  ];

  return (
    <>
      <MyCourseCardContainer data={myCourseCardData}/>
    </>
  );
}

export default MyCourseCardData;
