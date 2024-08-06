import { useState, useContext } from "react";
// import MyCourseCardContainer from "../commanComponents/MyCourseCardContainer";
// import { IoIosArrowBack } from "react-icons/io";
// import { IoIosArrowForward } from "react-icons/io";
import WishlistPageContainer from "../commanComponents/WishlistPageContainer";
import { WishListContext } from '../contextProvider/WishlistFilter';

function MyCourseCardData() {

  const myCourseCardData = [
    {
      id: 1,
      cardImg: "/src/assets/homePage1/myCourse/image1.png",
      cardContent: "Java Programming Beginner",
      cardAuthor: "Kitani Studio",
      cardDescription: "4/10 Videos Completed",
    },
    {
      id: 2,
      cardImg: "/src/assets/homePage1/myCourse/image2.png",
      cardContent: "iOS 13 & Swift 5 - Complete iOS...",
      cardAuthor: "Kitani Studio",
      cardDescription: "Not Yet Started",
    },
    {
      id: 3,
      cardImg: "/src/assets/homePage1/myCourse/image3.png",
      cardContent: "Wordpress Course Intermediate",
      cardAuthor: "Kitani Studio",
      cardDescription: "3/8 Videos Completed",
    },
    {
      id: 4,
  
      cardImg: "/src/assets/homePage1/myCourse/image4.png",
      cardContent: "Wordpress Course Intermediate",
      cardAuthor: "Kitani Studio",
      cardDescription: "Not Yet Started",
    },
    {
      id: 5,
  
      cardImg: "/src/assets/homePage1/myCourse/image5.png",
      cardContent: "Java Programming Beginner",
      cardAuthor: "Kitani Studio",
      cardDescription: "Not Yet Started",
    },
    {
      id: 6,
  
      cardImg: "/src/assets/homePage1/myCourse/image6.png",
      cardContent: "Java Programming Beginner",
      cardAuthor: "Kitani Studio",
      cardDescription: "4/10 Videos Completed",
    },
    {
      id: 7,
  
      cardImg: "/src/assets/homePage1/myCourse/image7.png",
      cardContent: "JiOS 13 & Swift 5 - Complete iOS...",
      cardAuthor: "Kitani Studio",
      cardDescription: "Not Yet Started",
    },
    {
      id: 8,
  
      cardImg: "/src/assets/homePage1/myCourse/image8.png",
      cardContent: "Wordpress Course Intermediate",
      cardAuthor: "Kitani Studio",
      cardDescription: "Not Yet Started",
    },
    {
      id: 9,
  
      cardImg: "/src/assets/homePage1/myCourse/image9.png",
      cardContent: "Wordpress Course Intermediate",
      cardAuthor: "Kitani Studio",
      cardDescription: "Not Yet Started",
    },
    {
      id: 10,
  
      cardImg: "/src/assets/homePage1/myCourse/image10.png",
      cardContent: "Java Programming Beginner",
      cardAuthor: "Kitani Studio",
      cardDescription: "Not Yet Started",
    },
    {
      id: 11,
  
      cardImg: "/src/assets/homePage1/myCourse/image11.png",
      cardContent: "Wordpress Course Intermediate",
      cardAuthor: "Kitani Studio",
      cardDescription: "Completed!",
    },
    {
      id: 12,
  
      cardImg: "/src/assets/homePage1/myCourse/image12.png",
      cardContent: "Wordpress Course Intermediate",
      cardAuthor: "Kitani Studio",
      cardDescription: "Completed!",
    },
  ];
  
  const { wishListValue, wishListItems } = useContext(WishListContext);

  const filteredData = myCourseCardData.filter(course => {
    if (wishListValue === "All Courses") {
      // Show all courses
      return true;
    } else if (wishListValue === "Completed") {
      // Show only completed courses
      return course.cardDescription === "Completed!";
    } else if (wishListValue === "Wishlist") {
      // Show only courses that are in the wishlist
      return wishListItems.some(wishItem => wishItem.id === course.id);
    } else {
      // Show courses that match the wishListValue in some other way
      return course.cardContent.includes(wishListValue);
    }
  });
  


/////////////////////////////Page 1//////////////////////////////

  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 8;




  // Function to get paginated data
  // const getPaginatedData = () => {
  //   const startIndex = (currentPage - 1) * itemsPerPage;
  //   return myCourseCardData.slice(startIndex, startIndex + itemsPerPage);
  // };

  // Handle page change
  // const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  // Calculate total pages
  // const totalPages = Math.ceil(myCourseCardData.length / itemsPerPage);

  // Generate page numbers
  // const pageNumbers = Array.from(
  //   { length: totalPages },
  //   (_, index) => index + 1
  // );

  return (
    <>
      {/* <MyCourseCardContainer
        data={getPaginatedData()}
      /> */}

      <WishlistPageContainer 
        data={filteredData} 
        header={wishListValue}
      />
      {/* <div className="paginationControls">
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
            className={`${
              number === currentPage ? "active" : ""
            } paginationControlsNumber`}
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
      </div> */}
    </>
  );
}

export default MyCourseCardData;
