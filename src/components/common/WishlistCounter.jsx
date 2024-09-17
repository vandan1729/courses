import { useSelector } from 'react-redux'

import '../../styling/WishlistCounter.css'

function WishlistCounter() {
  const wishListData = useSelector((state) => state.wishList.wishListItems)
  const wishListCounter = wishListData.length

  return (
    <>
      {wishListCounter > 0 ? (
        <span className="wishListCounter">({wishListCounter})</span>
      ) : (
        <></>
      )}
    </>
  )
}

export default WishlistCounter
