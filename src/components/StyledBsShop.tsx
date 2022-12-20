import { forwardRef } from 'react'
import { BsShop } from 'react-icons/bs'

export const StyledBsShop = forwardRef((props, ref) => {
  return <BsShop {...props} />
})

StyledBsShop.displayName = 'BsShop'
