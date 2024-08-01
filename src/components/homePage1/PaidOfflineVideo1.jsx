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
import { MdOutlineRateReview, MdSlowMotionVideo } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "../styling/PaidOfflineVideo1.css";
import FooterComponent from "../commanComponents/FooterComponent";
import Navbar2 from "../homePage2/Navbar2";

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
      <Navbar2 />
      <div className="paidOfflineVideo">
        <div className="courseDetails">
          <img src={img1} alt="Video" />
        </div>

        <div className="dropdownGroup">
          <div className="dropdownToggle">
            <div className="dropdownToggleSpanDiv">
              <span className="dropdownChapterNameSpan">
                Chapter 1: Course Overview
              </span>
              <span className="dropdownVideoSpan">
                1/12 Videos{" "}
                <span className="dropdownTimeSpan">
                  <span className="dropdownTimeSpanDot"></span>28m
                </span>
              </span>
            </div>
            {openChapter === "chapter1" ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>

          <div
            onClick={() => toggleDropdown("chapter2")}
            className="dropdownToggle"
            aria-expanded={openChapter === "chapter2"}
            aria-controls="dropdown-chapter2"
          >
            <div className="dropdownToggleSpanDiv">
              <span className="dropdownChapterNameSpan">
                Chapter 2: Curriculum
              </span>
              <span className="dropdownVideoSpan">
                1/12 Videos{" "}
                <span className="dropdownTimeSpan">
                  <span className="dropdownTimeSpanDot"></span>28m
                </span>
              </span>
            </div>
            {openChapter === "chapter2" ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          {openChapter === "chapter2" && (
            <ul id="dropdown-chapter2" className="dropdownMenu">
              {dropDownCourseLi.map((item) => (
                <li key={item} className="dropdownItem">
                  <span className="dropdownItemSpan">
                    {item}
                    <span className="dropdownItemSpanIcon">
                      <MdSlowMotionVideo />{" "}
                      <span className="dropdownItemSpanText"> 10m</span>
                    </span>
                  </span>
                  <div className="dropdownItemBtn">
                    <button className="dropdownItemBtnCom">Completed</button>
                    <button className="dropdownItemBtnPly">Playing</button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <div className="dropdownToggle">
            <div className="dropdownToggleSpanDiv">
              <span className="dropdownChapterNameSpan">
                Chapter 3: Components
              </span>
              <span className="dropdownVideoSpan">
                1/12 Videos{" "}
                <span className="dropdownTimeSpan">
                  <span className="dropdownTimeSpanDot"></span>28m
                </span>
              </span>
            </div>
            {openChapter === "chapter3" ? <IoIosArrowUp /> : <IoIosArrowDown />}
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
                <p className="courseStatsP">
                  <BsPeople className="courseStatsIcons" />
                  2.3k
                </p>
              </span>
              <span className="courseStatsSpan">
                <p className="courseStatsP">
                  <MdOutlineRateReview className="courseStatsIcons" />
                  1.4k
                </p>
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
                <div className="reviewItemContainerImg">
                  <img src={person.profilePic} alt="Profile" />
                </div>
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
