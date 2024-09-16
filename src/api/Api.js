import axios from 'axios'

// const axiosClient = axios.create({
//   baseURL: API_ENV.VITE_API_BASE_URL,
//   headers: {
//     Authorization: `Bearer ${localStorage.get('token')}`,
//     'ngrok-skip-browser-warning': true,
//   },
// })

export const userAuth = async ({ data, api }) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_USER_AUTH_URL}/${api}`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    return response
  } catch (error) {
    console.error('Error in userAuth:', error)
    throw error
  }
}
