import { TbCameraPlus } from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useRef } from 'react'
import { toast } from 'react-toastify'

import Layout from '../layoutComponent/Layout'
import { setUserData } from '../redux/features/userDataSlice' // Adjust the import path as needed

import '../styling/MyAccountPage1.css'

function MyAccountPage1() {
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.user) // Access user data from Redux store

  const [formData, setFormData] = useState({
    userFirstName: userData.userFirstName,
    userLastName: userData.userLastName,
    userHeadLine: userData.userHeadLine,
    userEmail: userData.userEmail,
    selectedFile: null,
    userProfile: userData.userProfile,
  })

  const fileInputRef = useRef(null)

  const handleChange = (e) => {
    const { id, value } = e.target

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const fileUrl = URL.createObjectURL(file)
      setFormData((prevData) => ({
        ...prevData,
        selectedFile: file,
        userProfile: fileUrl,
      }))
    }
  }

  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const hasEmptyData = Object.values(formData).some((value) => value === '')
    if (hasEmptyData) {
      toast.warn('Fill Data Properly 🤌')
      return
    }

    dispatch(setUserData({ ...formData }))

    toast.success('Uploaded Successfully 😎')
  }

  return (
    <>
      <Layout>
        <div className="myAccountContainer">
          <h2>My Account</h2>

          <div className="sidebar">
            <p className="sidebarProfile">Profile</p>
            <p>Personalisation</p>
            <p>Account</p>
            <p>Payment Methods</p>
            <p>Notifications</p>
            <p>Privacy</p>
          </div>

          <div className="accountFormContainer">
            <img
              src={formData.userProfile}
              alt="Profile"
              className="profileImage"
            />

            <TbCameraPlus className="cameraEmoji" onClick={handleIconClick} />

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />

            <form onSubmit={handleSubmit}>
              <label htmlFor="userFirstName">First Name</label>
              <input
                id="userFirstName"
                type="text"
                value={formData.userFirstName}
                onChange={handleChange}
              />

              <label htmlFor="userLastName">Last Name</label>
              <input
                id="userLastName"
                type="text"
                value={formData.userLastName}
                onChange={handleChange}
              />

              <label htmlFor="userHeadLine">HeadLine</label>
              <input
                id="userHeadLine"
                type="text"
                value={formData.userHeadLine}
                onChange={handleChange}
              />

              <label htmlFor="email">Email</label>
              <input
                id="userEmail"
                type="email"
                value={formData.userEmail}
                onChange={handleChange}
              />

              <div className="accountFormContainerBtn">
                <button type="submit">Save</button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default MyAccountPage1
