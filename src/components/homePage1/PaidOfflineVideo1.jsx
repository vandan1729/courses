import { useState } from "react";

import SubscribeCard from "./SubscribeCard";
import img1 from "/src/assets/homePage1/paidOfflineVideo/image1.png";
import img2 from "/src/assets/homePage1/paidOfflineVideo/image2.png";
import img3 from "/src/assets/homePage1/paidOfflineVideo/thumbnail.png";
import profile1 from "/src/assets/homePage1/paidOfflineVideo/profile1.png";
import profile2 from "/src/assets/homePage1/paidOfflineVideo/profile2.png";
import profile3 from "/src/assets/homePage1/paidOfflineVideo/profile3.png";
import profile4 from "/src/assets/homePage1/paidOfflineVideo/profile4.png";
import { BsPeople } from "react-icons/bs";
import { MdOutlineRateReview } from "react-icons/md";
import "../styling/PaidOfflineVideo1.css";
import Navbar1 from "./Navbar1";
import FooterComponent from "../commanComponents/FooterComponent";

const dropDownCourseLi = [
  "Installing Vue JS",
  "Understand Vue Components",
  "Vue Templating",
  "Vue Forms",
  "Vue Styling",
];

const reviewData = [
  {
    profilePic: profile1,
    pname: "Leonardo Da Vinci",
    review:
      "Loved the course. I've learned some very subtle techniques, especially on leaves.",
  },
  {
    profilePic: profile2,
    pname: "Titania S",
    review:
      "I loved the course; it had been a long time since I had experimented with watercolors and now I will do it more often thanks to Kitani Studio.",
  },
  {
    profilePic: profile3,
    pname: "Zhirkov",
    review:
      "Yes. I just emphasize that the use of Photoshop, for non-users, becomes difficult to follow. What requires a course to master it. Safe and very didactic teacher.",
  },
  {
    profilePic: profile4,
    pname: "Miphoska",
    review:
      "I haven't finished the course yet, as I would like to have some feedback from the teacher about the comments I shared on the forum 3 months ago, and I still haven't had any answer. I think the course is well-structured, however the explanations and videos are very quick for beginners. However, it is good to go practicing.",
  },
];

function PaidOfflineVideo1() {
  const [openChapter, setOpenChapter] = useState(null);

  const toggleDropdown = (chapter) => {
    setOpenChapter((prevChapter) => (prevChapter === chapter ? null : chapter));
  };

  return (
    <>
      <Navbar1 />
      <div className="paidOfflineVideo">
        <div className="courseDetails">
          <img src={img1} alt="Video" />
        </div>
        <div className="dropdownSection">
          <div className="dropdownGroup">
            <button
              onClick={() => toggleDropdown("chapter1")}
              className="dropdownToggle"
            >
              Chapter 1: Course Overview{" "}
              {openChapter === "chapter1" ? "⬇️" : "⬆️"}
            </button>
            <button
              onClick={() => toggleDropdown("chapter2")}
              className="dropdownToggle"
            >
              Chapter 2: Curriculum {openChapter === "chapter2" ? "⬇️" : "⬆️"}
            </button>
            {openChapter === "chapter2" && (
              <ul className="dropdownMenu">
                {dropDownCourseLi.map((item) => (
                  <li key={item} className="dropdownItem">
                    {item}
                  </li>
                ))}
              </ul>
            )}
            <button
              onClick={() => toggleDropdown("chapter3")}
              className="dropdownToggle"
            >
              Chapter 3: Components {openChapter === "chapter3" ? "⬇️" : "⬆️"}
            </button>
          </div>
        </div>
      </div>

      <div className="courseInfo">
        <div className="courseSummary">
          <h2>Vue JS Scratch Course</h2>

          <div className="courseThumbnail">
            <div className="courseCreator">
              <img src={img3} alt="Thumbnail" />
              <div className="courseCreatorText">
                <p>Kitani Studio</p>
                <p>Design Studio</p>
              </div>
            </div>
            <div className="courseStats">
              <span className="courseStatsSpan">
                <BsPeople /> 2.3K
              </span>
              <span className="courseStatsSpan">
                <MdOutlineRateReview /> 1.4K
              </span>
            </div>
          </div>

          <div className="courseDescription">
            <h4>About Course</h4>
            <p>
              Vue (pronounced /vjuː/, like view) is a progressive framework for
              building user interfaces. Unlike other monolithic frameworks, Vue
              is designed from the ground up to be incrementally adoptable. The
              core library is focused on the view layer only, and is easy to
              pick up and integrate with other libraries or existing projects.
              On the other hand, Vue is also perfectly capable of powering
              sophisticated Single-Page Applications when used in combination
              with modern tooling and supporting libraries.
            </p>
          </div>
          <div className="courseReviews">
            <h4>Reviews</h4>
            {reviewData.map((person, index) => (
              <div key={index} className="reviewItemContainer">
                <img src={person.profilePic} alt="Profile" />
                <div className="reviewContent">
                  <p>{person.pname}</p>
                  <p>{person.review}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="loadMoreReviews">Load more reviews</button>
        </div>
        <div className="courseImage">
          <img src={img2} alt="Course" />
        </div>
      </div>

      <SubscribeCard />
      <FooterComponent />
    </>
  );
}

export default PaidOfflineVideo1;
