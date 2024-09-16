import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import SubscribeCard from '../components/homePage1/SubscribeCard'
import SliderComponent from '../components/homePage1/SliderComponent'
import Categories from '../components/homePage1/Categories'
import CardContainer from '../components/common/CardContainer'
import InstructorCard from '../components/common/InstructorCard'

import { KitaniStudioCardData } from '../data/KitaniStudioCard'
import { TrendingCourseData } from '../data/TrendingCourse'
import { PopularInstructorData } from '../data/PopularInstructor'
import { login, logout } from '../redux/features/authSlice'

import { useDispatch } from 'react-redux'

import LoadingPage from '../components/common/Loader/LoadingPage'
import Layout from '../layoutComponent/Layout'

function HomePage1() {
  const [isLoading, setIsLoading] = useState(true)

  const opacityValue = useSelector((state) => state.modal.opacityValue)

  const dispatch = useDispatch()

  useEffect(() => {
    const checkAuthentication = () => {
      const getCookie = (name) => {
        const value = `; ${document.cookie}`
        const parts = value.split(`; ${name}=`)
        if (parts.length === 2) return parts.pop().split(';').shift()
      }

      const token = getCookie('accessToken')

      if (token) {
        dispatch(login())
        setIsLoading(false)
      } else {
        dispatch(logout())
        setIsLoading(false)
      }
    }

    checkAuthentication()
  }, [dispatch])

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <Layout>
          <div
            className="no-select"
            style={{
              opacity: opacityValue ? '0.5' : '1',
              pointerEvents: opacityValue ? 'none' : 'auto',
            }}
          >
            <SliderComponent />
            <Categories />

            <CardContainer
              data={KitaniStudioCardData}
              header="More from Kitani Studio"
              heading="We know the best things for You. Top picks for You"
            />

            <CardContainer
              data={TrendingCourseData}
              header="Trending Course"
              heading="We know the best things for You. Top picks for You."
            />

            <InstructorCard
              header="Popular Instructors"
              heading="We know the best things for You. Top picks for You."
              data={PopularInstructorData}
            />

            <SubscribeCard />
          </div>
        </Layout>
      )}
    </>
  )
}

export default HomePage1
