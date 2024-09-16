import { useDispatch, useSelector } from 'react-redux'
import {
  promptDialogBox,
  setOpacityValue,
} from '../../../redux/features/modalSlice'

import { logout } from '../../../redux/features/authSlice'
import { IoIosLogOut } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { setPrimaryLoading } from '../../../redux/features/modalSlice'

import '../../../styling/PromptDialogBox.css'
import { userAuth } from '../../../api/Api'
import { toast } from 'react-toastify'
import PrimaryLoader from '../Loader/PrimaryLoader'

function PromptDialogBox() {
  const promtVisible = useSelector((state) => state.modal.promptDialogBox)
  const accessToken = useSelector((state) => state.auth.accessToken)
  const primaryLoading = useSelector((state) => state.modal.primaryLoading)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleAcceptBtn = async () => {
    dispatch(setPrimaryLoading(true))
    try {
      const response = await userAuth({
        api: 'logout',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })

      if (response.status === 200) {
        document.cookie = 'accessToken=; path=/;'

        dispatch(setOpacityValue(false))
        dispatch(logout())
        dispatch(promptDialogBox(false))
        toast.success('Logout Successfully')
        navigate('/')
      }
    } catch (error) {
      toast.error('Failed to Logout. Please try again later.')
    } finally {
      dispatch(setPrimaryLoading(false))
    }
  }

  const handleCancle = () => {
    dispatch(promptDialogBox(false))
    dispatch(setOpacityValue(false))
  }

  return (
    <>
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
            <button
              className="promptDialogDesactivate"
              onClick={handleAcceptBtn}
            >
              Logout
            </button>
            <button className="promptDialogCancel" onClick={handleCancle}>
              Cancel
            </button>
          </div>
          {primaryLoading ? <PrimaryLoader /> : null}
        </div>
      </div>
    </>
  )
}

export default PromptDialogBox
