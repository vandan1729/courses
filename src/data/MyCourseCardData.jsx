export const myCourseCardData = [
  {
    id: 8,
    cardImg: '/src/assets/homePage1/myCourse/image1.png',
    cardContent: 'Java Programming Beginner',
    cardAuthor: 'Kitani Studio',
    cardDescription: '4/10 Videos Completed',
  },
  {
    id: 9,
    cardImg: '/src/assets/homePage1/myCourse/image2.png',
    cardContent: 'iOS 13 & Swift 5 - Complete iOS...',
    cardAuthor: 'Kitani Studio',
    cardDescription: 'Not Yet Started',
  },
  {
    id: 10,
    cardImg: '/src/assets/homePage1/myCourse/image3.png',
    cardContent: 'Wordpress Course Intermediate',
    cardAuthor: 'Kitani Studio',
    cardDescription: '3/8 Videos Completed',
  },
  {
    id: 11,

    cardImg: '/src/assets/homePage1/myCourse/image4.png',
    cardContent: 'Wordpress Course Intermediate',
    cardAuthor: 'Kitani Studio',
    cardDescription: 'Not Yet Started',
  },
  {
    id: 12,

    cardImg: '/src/assets/homePage1/myCourse/image5.png',
    cardContent: 'Java Programming Beginner',
    cardAuthor: 'Kitani Studio',
    cardDescription: 'Not Yet Started',
  },
  {
    id: 13,

    cardImg: '/src/assets/homePage1/myCourse/image6.png',
    cardContent: 'Java Programming Beginner',
    cardAuthor: 'Kitani Studio',
    cardDescription: '4/10 Videos Completed',
  },
  {
    id: 14,

    cardImg: '/src/assets/homePage1/myCourse/image7.png',
    cardContent: 'JiOS 13 & Swift 5 - Complete iOS...',
    cardAuthor: 'Kitani Studio',
    cardDescription: 'Not Yet Started',
  },
  {
    id: 15,

    cardImg: '/src/assets/homePage1/myCourse/image8.png',
    cardContent: 'Wordpress Course Intermediate',
    cardAuthor: 'Kitani Studio',
    cardDescription: 'Not Yet Started',
  },
  {
    id: 16,

    cardImg: '/src/assets/homePage1/myCourse/image9.png',
    cardContent: 'Wordpress Course Intermediate',
    cardAuthor: 'Kitani Studio',
    cardDescription: 'Not Yet Started',
  },
  {
    id: 17,

    cardImg: '/src/assets/homePage1/myCourse/image10.png',
    cardContent: 'Java Programming Beginner',
    cardAuthor: 'Kitani Studio',
    cardDescription: 'Not Yet Started',
  },
  {
    id: 18,

    cardImg: '/src/assets/homePage1/myCourse/image11.png',
    cardContent: 'Wordpress Course Intermediate',
    cardAuthor: 'Kitani Studio',
    cardDescription: 'Completed!',
  },
  {
    id: 19,

    cardImg: '/src/assets/homePage1/myCourse/image12.png',
    cardContent: 'Wordpress Course Intermediate',
    cardAuthor: 'Kitani Studio',
    cardDescription: 'Completed!',
  },
]

// export const getFilteredData = (wishListValue, wishListItems, allCourseCardData) => {
//   // Default to an empty array if any parameter is undefined
//   if (!allCourseCardData) return [];

//   return allCourseCardData.filter((course) => {
//     // Handle undefined or unexpected wishListValue
//     if (!wishListValue || !wishListItems) return false;

//     if (wishListValue === 'All Courses') {
//       return true;
//     } else if (wishListValue === 'Completed') {
//       return course.cardDescription === 'Completed!';
//     } else if (wishListValue === 'Wishlist') {
//       return wishListItems.some((wishItem) => wishItem.id === course.id);
//     } else {
//       return course.cardContent.includes(wishListValue);
//     }
//   });
// };
