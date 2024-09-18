import { IoIosLogOut } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { ApiCall } from '../../../api/api'
import { logout } from '../../../redux/features/authSlice'
import {
  promptDialogBox,
  setOpacityValue,
  setPrimaryLoading,
} from '../../../redux/features/modalSlice'
import '../../../styling/PromptDialogBox.css'
import PrimaryLoader from '../Loader/PrimaryLoader'

function PromptDialogBox() {
  const promtVisible = useSelector((state) => state.modal.promptDialogBox)
  const accessToken = useSelector((state) => state.auth.accessToken)
  const primaryLoading = useSelector((state) => state.modal.primaryLoading)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { userAuth, refreshAccessToken } = ApiCall()

  const clearUserData = () => {
    document.cookie = 'accessToken=; path=/;'
    document.cookie = 'refreshToken=; path=/;'
    dispatch(logout())
    dispatch(setOpacityValue(false))
    dispatch(promptDialogBox(false))
  }

  const handleLogout = async () => {
    dispatch(setPrimaryLoading(true))
    try {
      let response = await userAuth({
        api: 'logout',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })

      if (response.status === 200) {
        clearUserData()
        toast.success('Logout Successful')
        navigate('/')
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        const newAccessToken = await refreshAccessToken()
        if (newAccessToken) {
          try {
            const retryResponse = await userAuth({
              api: 'logout',
              headers: {
                Authorization: `Bearer ${newAccessToken}`,
              },
            })
            if (retryResponse.status === 200) {
              clearUserData()
              toast.success('Logout Successful')
              navigate('/')
            }
          } finally {
            clearUserData()
            toast.success('Logout Successful')
            navigate('/')
          }
        }
      }
    } finally {
      dispatch(setPrimaryLoading(false))
    }
  }

  const handleAcceptBtn = () => {
    handleLogout()
  }

  const handleCancel = () => {
    dispatch(promptDialogBox(false))
    dispatch(setOpacityValue(false))
  }

  return (
    <div className={`promptDialogCard ${promtVisible ? 'visible' : ''}`}>
      <div className="promptDialogHeader">
        <IoIosLogOut className="logoutPromtIcon" />
        <div className="promptDialogContent">
          <span className="promptDialogTitle">Logout Account</span>
          <p className="promptDialogMessage">
            Are you sure you want to logout from your account?
          </p>
        </div>
        <div className="promptDialogActions">
          <button className="promptDialogDesactivate" onClick={handleAcceptBtn}>
            Logout
          </button>
          <button className="promptDialogCancel" onClick={handleCancel}>
            Cancel
          </button>
        </div>
        {primaryLoading && <PrimaryLoader />}
      </div>
    </div>
  )
}

export default PromptDialogBox
