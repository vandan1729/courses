import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowUp } from 'react-icons/io'

import SliderComponent from '../components/homePage1/SliderComponent'
import SubscribeCard from '../components/homePage1/SubscribeCard'
import Layout from '../layoutComponent/Layout'
import '../styling/MyCoursePage.css'

function MyCoursePage() {
  const [openDropdown, setOpenDropdown] = useState(null)

  const browse1 = ['Hello']
  const browse2 = ['Welcome']

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  return (
    <>
      <Layout>
        <SliderComponent />
        <div className="myCoursetTopLayer no-select">
          <div className="myCoursetTopLayerText">
            <p className="myCoursetTopLayerText1">My Course</p>
            <p className="myCoursetTopLayerText2">List of your course</p>
          </div>

          <div className="myCoursetTopLayerDropDown">
            <button
              onClick={() => toggleDropdown('dropdown1')}
              className="myCoursetTopLayerDropDownToggle"
            >
              All Rated{' '}
              {openDropdown === 'dropdown1' ? (
                <IoIosArrowUp />
              ) : (
                <IoIosArrowDown />
              )}
            </button>

            <button
              onClick={() => toggleDropdown('dropdown2')}
              className="myCoursetTopLayerDropDownToggle"
            >
              Recently added{' '}
              {openDropdown === 'dropdown2' ? (
                <IoIosArrowUp />
              ) : (
                <IoIosArrowDown />
              )}
            </button>

            {openDropdown === 'dropdown1' && (
              <ul className="dropdownMenu1">
                {browse1.map((item) => (
                  <li key={item} className="myCoursetTopLayerDropDownItems">
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {openDropdown === 'dropdown2' && (
              <ul className="dropdownMenu2">
                {browse2.map((item) => (
                  <li key={item} className="myCoursetTopLayerDropDownItems">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <SubscribeCard />
      </Layout>
    </>
  )
}

export default MyCoursePage
