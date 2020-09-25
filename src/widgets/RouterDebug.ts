import { useLocation } from 'react-router-dom'

import debug from '@/util/debug'

const RouterDebug = () => {
  const location = useLocation()

  debug.log('[RouterDebug]', location)

  return null
}

export default RouterDebug
