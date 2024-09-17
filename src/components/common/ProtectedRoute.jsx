import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ element: Component, requiresCart = false }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const cart = useSelector((state) => state.buyProduct.items)
  const buyCourseData = useSelector((state) => state.wishList.buyCourseData)

  // console.log('cart:', cart, 'buy', buyCourseData)

  if (!isAuthenticated) {
    return <Navigate to="/*" />
  }

  if (requiresCart && cart.length === 0 && buyCourseData.length === 0) {
    return <Navigate to="/" />
  }

  return <Component />
}

export default ProtectedRoute
