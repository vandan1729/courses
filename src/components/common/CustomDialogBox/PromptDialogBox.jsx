import Cookies from 'js-cookie'
import { IoIosLogOut } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useLogOutMutation } from '../../../api/authAPi/authApi'
import { useRefreshTokenMutation } from '../../../api/refreshTokenAPi/refreshTokenApi'
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
  const primaryLoading = useSelector((state) => state.modal.primaryLoading)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [logOut] = useLogOutMutation()
  const [refreshToken] = useRefreshTokenMutation()

  const clearUserData = () => {
    // Using js-cookie to clear cookies
    Cookies.remove('accessToken', { path: '/' })
    Cookies.remove('refreshToken', { path: '/' })
    dispatch(logout())
    dispatch(setOpacityValue(false))
    dispatch(promptDialogBox(false))
  }

  const handleLogout = async () => {
    dispatch(setPrimaryLoading(true))
    try {
      const response = await logOut().unwrap()

      if (response) {
        clearUserData()
        toast.success('Logout Successful')
        navigate('/')
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        const token = { Authorization: `Bearer ${Cookies.get('refreshToken')}` }
        const newAccessToken = await refreshToken(token).unwrap()

        if (newAccessToken) {
          try {
            const retryResponse = await logOut()
            if (retryResponse) {
              clearUserData()
              toast.success('Logout Successful')
              navigate('/')
            }
          } catch (err) {
            clearUserData()
            toast.error('Logout failed. Please try again.')
          }
        }
      } else {
        clearUserData()
        toast.success('Logout Successful')
        navigate('/')
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
