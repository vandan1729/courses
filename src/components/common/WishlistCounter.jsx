import '../../styling/WishlistCounter.css'

import { useSelector } from 'react-redux'

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
