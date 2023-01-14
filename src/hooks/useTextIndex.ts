import { useEffect, useState } from 'react'
import { texts } from '../data/texts'

export const useTextIndex = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setTimeout(() => setIndex((index) => index + 1), 2500)
    return () => clearTimeout(id)
  }, [index])

  return index
}
