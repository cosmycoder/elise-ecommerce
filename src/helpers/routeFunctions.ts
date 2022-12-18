import router from 'next/router'
import { SetStateAction } from 'react'

export const goToPage = (
  setDisplay: (value: SetStateAction<string>) => void,
  page?: string,
): void => {
  if (!page) {
    router.push('/')
    setDisplay('none')
  } else if (router.pathname === `/${page}`) {
    setDisplay('none')
  } else {
    router.push(`/${page}`)
    setDisplay('none')
  }
}
