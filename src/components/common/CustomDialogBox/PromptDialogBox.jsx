import { useDispatch, useSelector } from 'react-redux'
import {
  promptDialogBox,
  setOpacityValue,
} from '../../../redux/features/modalSlice'

import { logout } from '../../../redux/features/authSlice'
import { IoIosLogOut } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

import '../../../styling/PromptDialogBox.css'

function PromptDialogBox() {
  const promtVisible = useSelector((state) => state.modal.promptDialogBox)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleAcceptBtn = () => {
    dispatch(setOpacityValue(false))
    navigate('/')
    dispatch(logout())
    dispatch(promptDialogBox(false))
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
        </div>
      </div>
    </>
  )
}

export default PromptDialogBox
