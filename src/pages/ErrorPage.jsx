import { useNavigate } from 'react-router-dom'

import '../styling/ErrorPage.css'

function ErrorPage() {
  const navigate = useNavigate()
  const handleBackClick = () => {
    navigate('/')
  }
  return (
    <>
      <div id="oopss" className="no-select">
        <div id="error-text">
          <img
            src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
            alt="404"
          />
          <span>404 PAGE</span>
          <p className="p-a">
            . The page you were looking for could not be found
          </p>
          <p className="p-b">... Back to previous page</p>
          <p onClick={handleBackClick} class="back">
            ... Back to previous page
          </p>
        </div>
      </div>
    </>
  )
}

export default ErrorPage
