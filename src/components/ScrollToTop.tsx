import { ArrowUpIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
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

  const goToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <>
      {showTopBtn && (
        <IconButton
          aria-label='scroll to top'
          bgColor={'darkorange'}
          icon={<ArrowUpIcon color='white' fontSize={'xl'} />}
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
