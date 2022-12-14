import { ArrowUpIcon } from '@chakra-ui/icons'
import { Container, IconButton } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 150) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    })
  }, [])

  const TIMINGFUNC_MAP: any = {
    linear: (t: any) => t,
    'ease-in': (t: any) => t * t,
    'ease-out': (t: any) => t * (2 - t),
    'ease-in-out': (t: any) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  }

  function scrollTopSmooth(initY: any, duration = 300, timingName = 'linear') {
    const timingFunc = TIMINGFUNC_MAP[timingName]
    let start: any = null
    const step = (timestamp: any) => {
      start = start || timestamp
      const progress = timestamp - start,
        // Growing from 0 to 1
        time = Math.min(1, (timestamp - start) / duration)

      window.scrollTo(0, initY - timingFunc(time) * initY)
      if (progress < duration) {
        window.requestAnimationFrame(step)
      }
    }

    window.requestAnimationFrame(step)
  }

  const goToTop = () => {
    scrollTopSmooth(window.scrollY, 300, 'ease-in-out')
  }
  return (
    <>
      {showTopBtn && (
        <IconButton
          aria-label='scroll to top'
          bgColor={'#6495ED'}
          icon={<ArrowUpIcon />}
          size='lg'
          position='fixed'
          bottom='2rem'
          right='2rem'
          onClick={goToTop}
          _hover={{ bgColor: 'black', color: 'white' }}
          zIndex='10'
        />
      )}
    </>
  )
}
