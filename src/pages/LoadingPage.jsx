import React from 'react'
import '../styling/LoadingPage.css'

function LoadingPage() {
  return (
    <div className="loader-wrapper no-select">
      <div className="LoaderBalls">
        <div className="LoaderBalls__item"></div>
        <div className="LoaderBalls__item"></div>
        <div className="LoaderBalls__item"></div>
      </div>
      <span className="loaderSpan">Loding...</span>
    </div>
  )
}

export default LoadingPage
