import { useDispatch, useSelector } from 'react-redux'

import { setNotification } from '../../../redux/features/notificationSlice'
import '../../../styling/CustomNotification.css'

function CustomNotification() {
  const dispatch = useDispatch()
  const profileNotification = useSelector((state) => state.user.notification)
  const customNotification = useSelector((state) => state.notification.message)

  return (
    <>
      {(profileNotification || customNotification.length > 0) && (
        <div className="customNotification">
          {profileNotification && <p>{profileNotification}</p>}
          {customNotification.map((el, index) => (
            <p key={index}>{el}</p>
          ))}
        </div>
      )}
    </>
  )
}

export default CustomNotification
