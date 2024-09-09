import React, { useState, useRef } from 'react'
import { TbCameraPlus } from 'react-icons/tb'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { setUserData } from '../../../redux/features/userDataSlice'
import '../../../styling/UserProfile.css'

function UserProfile() {
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.user)

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
    <div className="accountFormContainer">
      <img src={formData.userProfile} alt="Profile" className="profileImage" />

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
  )
}

export default UserProfile
