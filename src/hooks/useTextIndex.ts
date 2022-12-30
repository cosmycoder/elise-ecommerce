import { useEffect, useState } from 'react'
import { texts } from '../data/texts'

export const useTextIndex = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 2500)
    return () => clearTimeout(intervalId)
  }, [])

  return index
}
