import React from 'react'

export type ContextShape = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default React.createContext<ContextShape>({
  isOpen: false,
  setIsOpen: () => undefined
})
