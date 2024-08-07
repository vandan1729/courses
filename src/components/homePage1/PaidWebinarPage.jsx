import Navbar2 from "../homePage2/Navbar2";
import FooterComponent from "../common/FooterComponent";
import SubscribeCard from "./SubscribeCard";

import img1 from "/src/assets/homePage1/PaidWebinar/image.png";
import img2 from "/src/assets/homePage1/PaidWebinar/image2.jpg";
import img3 from "/src/assets/homePage1/paidOfflineVideo/thumbnail.png";

import pro1 from "/src/assets/homePage1/paidOfflineVideo/profile1.png";
import pro2 from "/src/assets/homePage1/paidOfflineVideo/profile2.png";
import pro3 from "/src/assets/homePage1/paidOfflineVideo/profile3.png";
import pro4 from "/src/assets/homePage1/paidOfflineVideo/profile4.png";

import { BsPeople } from "react-icons/bs";
import { MdOutlineRateReview } from "react-icons/md";
import { PiNavigationArrowFill } from "react-icons/pi";
import "../../styling/PaidWebinarPage.css";
import { useState } from "react";
import Layout from "../../layoutComponent/Layout";

function PaidWebinarPage() {
  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState("");

  const profiles = [pro1, pro2, pro3, pro4];
  const profilesName = ["Urvish", "Ramesh", "Suresh", "Mukesh"];

  const handleLiveChatSubmit = () => {
    if (message.trim()) {
      const newChatItem = {
        message: message.trim(),
        img: profiles[Math.floor(Math.random() * profiles.length)],
        name: profilesName[Math.floor(Math.random() * profilesName.length)],
      };
      setChat((prevChat) => [...prevChat, newChatItem]);
      setMessage("");
    }
  };

  return (
    <>
      <Layout>
        <div className="paidWebinarVideo">
          <div className="paidWebinarCourseDetails">
            <img src={img1} alt="Video" />
          </div>

          <div className="paidWebinarChat">
            <div>
              <p style={{ fontWeight: "650", fontSize: "20px" }}>
                Live Chat Webinar
              </p>
              <p style={{ color: "#3DCBB1" }}>{chat.length} Active users</p>
            </div>

            <ul className="paidWebinarChatUl">
              {Array.isArray(chat) &&
                chat.map((item, index) => (
                  <li className="paidWebinarChatLi" key={index}>
                    <img src={item.img} alt="Profile" />
                    <div>
                      <p style={{ fontWeight: "650", marginBottom: "0.4rem" }}>
                        {item.name}
                      </p>
                      <p>{item.message}</p>
                    </div>
                  </li>
                ))}
            </ul>

            <input
              type="text"
              placeholder="Ask Something..."
              className="paidWebinarChatInput"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <PiNavigationArrowFill
              className="paidWebinarChatArrow1"
              onClick={handleLiveChatSubmit}
            />
          </div>
        </div>

        <div className="paidWebinarCourseInfo">
          <div className="paidWebinarCourseSummary">
            <h2>Vue JS Scratch Course</h2>
            <div className="paidWebinarCourseThumbnail">
              <div className="paidWebinarCourseCreator">
                <img src={img3} alt="Thumbnail" />
                <div className="paidWebinarCourseCreatorText">
                  <p>Kitani Studio</p>
                  <p>Design Studio</p>
                </div>
              </div>
              <div className="paidWebinarCourseStats">
                <span className="paidWebinarCourseStatsSpan">
                  <p className="paidWebinarCourseStatsP">
                    <BsPeople className="paidWebinarCourseStatsIcons" />
                    2.3k
                  </p>
                </span>
                <span className="paidWebinarCourseStatsSpan">
                  <p className="paidWebinarCourseStatsP">
                    <MdOutlineRateReview className="paidWebinarCourseStatsIcons" />
                    1.4k
                  </p>
                </span>
              </div>
            </div>
            <div className="paidWebinarCourseDescription">
              <h4>About Course</h4>
              <p>
                Vue (pronounced /vjuː/, like view) is a progressive framework
                for building user interfaces. Unlike other monolithic
                frameworks, Vue is designed from the ground up to be
                incrementally adoptable. The core library is focused on the view
                layer only, and is easy to pick up and integrate with other
                libraries or existing projects. On the other hand, Vue is also
                perfectly capable of powering sophisticated Single-Page
                Applications when used in combination with modern tooling and
                supporting libraries.
              </p>
            </div>
          </div>
          <div className="paidWebinarCourseImage">
            <div className="paidWebinarCourseImageText">
              <div>
                <p style={{ fontSize: "18px", fontWeight: "600" }}>WEBINAR</p>
                <p style={{ fontWeight: "300" }}>August 16, 2024</p>
              </div>

              <div className="paidWebinarCourseImagePTextDiv">
                <p className="paidWebinarCourseImagePText">
                  Photography <br /> Manual <br />
                  Scratch Course
                </p>
              </div>

              <div className="paidWebinarCoursePTextDiv2">
                <p>Kitani Sarasvati</p>
              </div>

              <button className="paidWebinarCourseBtn">Get it Now</button>
            </div>
            <img src={img2} alt="Course" />
          </div>
        </div>

        <SubscribeCard />
      </Layout>
    </>
  );
}
export default PaidWebinarPage;
