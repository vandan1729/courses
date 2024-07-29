import InstructorCard from "../instructorCard/InstructorCard";
import img1 from "/public/homePage1/popularInstructor/image1.png";
import img2 from "/public/homePage1/popularInstructor/image2.png";
import img3 from "/public/homePage1/popularInstructor/image3.png";
import img4 from "/public/homePage1/popularInstructor/image4.png";

function PopularInstructor() {
  const popularInstructorData = [
    {
      popularInstructorimg: img1,
    },
    {
      popularInstructorimg: img2,
    },
    {
      popularInstructorimg: img3,
    },
    {
      popularInstructorimg: img4,
    },
  ];

  return (
    <InstructorCard
      header="Popular Instructors"
      heading="We know the best things for You. Top picks for You."
      data={popularInstructorData}
    />
  );
}

export default PopularInstructor;
