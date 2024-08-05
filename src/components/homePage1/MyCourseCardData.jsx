import { useState } from "react";
import MyCourseCardContainer from "../commanComponents/MyCourseCardContainer";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function MyCourseCardData() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

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

  // Function to get paginated data
  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return myCourseCardData.slice(startIndex, startIndex + itemsPerPage);
  };

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate total pages
  const totalPages = Math.ceil(myCourseCardData.length / itemsPerPage);

  // Generate page numbers
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <>
      <MyCourseCardContainer data={getPaginatedData()} />
      <div className="paginationControls">
        <button
          onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="paginationControlsBtn"
        >
          <IoIosArrowBack />
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={`${number === currentPage ? "active" : ""} paginationControlsNumber`} 
          >
            {number}
          </button>
        ))}
        <button
          onClick={() =>
            handlePageChange(Math.min(totalPages, currentPage + 1))
          }
          disabled={currentPage === totalPages}
          className="paginationControlsBtn"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </>
  );
}

export default MyCourseCardData;
