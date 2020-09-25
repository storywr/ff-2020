import { Location } from 'history'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

type ChangeCallback = (location: Location) => void

const useRouteChange = (onChange: ChangeCallback) => {
  const location = useLocation()

  useEffect(() => {
    onChange(location)
  }, [location.key])
}

export default useRouteChange
