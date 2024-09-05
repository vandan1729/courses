import '../../../styling/SuccessAnimation.css'

function SuccessAnimation() {
  return (
    <>
      <div className="wrapper">
        {' '}
        <svg
          className="checkmark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          <path
            className="checkmark__check"
            fill="none"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
          />
        </svg>
        <div className="output"></div>
      </div>
    </>
  )
}

export default SuccessAnimation
