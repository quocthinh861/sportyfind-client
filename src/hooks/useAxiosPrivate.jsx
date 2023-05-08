import axiosPrivate from '../api/axios'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const useAxiosPrivate = () => {
  const user = useSelector((state) => state.user)

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${user?.token}`
        }
        return config
      },
      (error) => Promise.reject(error),
    )

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        // Get new access token from refresh token
      },
    )

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept)
      axiosPrivate.interceptors.response.eject(responseIntercept)
    }
  }, [user])

  return axiosPrivate
}

export default useAxiosPrivate