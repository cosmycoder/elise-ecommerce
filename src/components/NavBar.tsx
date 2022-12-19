import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Button, Flex, Text, Link, Stack, Icon, chakra, HStack, IconButton } from '@chakra-ui/react'
import { faShop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { goToPage } from '../helpers/routeFunction'

export const Navbar = () => {
  const [display, setDisplay] = useState('none')
  const router = useRouter()
  const Icon = chakra(FontAwesomeIcon)

  return (
    <Flex as='nav' align='center' justify='space-between' wrap='wrap'>
      <Flex flexDir={'row'} justifyContent='center' align={'center'}>
        <Icon icon={faShop} color='darkorange' size='2x' />
        <Text fontSize={'4xl'} fontFamily='ggsansmedium' color='darkorange' ml='1rem'>
          Elise
        </Text>
      </Flex>

      <Flex
        maxHeight={'100%'}
        mr='.5rem'
        gap={'1.5rem'}
        display={['none', 'Flex', 'flex', 'flex']}
        ml='auto'
        alignItems={'center'}
      >
        <Button
          textShadow='2px 2px orange'
          color='white'
          fontWeight={'1000'}
          variant='link'
          onClick={() => goToPage(setDisplay)}
        >
          Home
        </Button>
        <Button
          textShadow='2px 2px orange'
          color='white'
          fontWeight={'1000'}
          variant='link'
          onClick={() => goToPage(setDisplay, 'shopping-cart')}
        >
          Cart
        </Button>
        {/* <Button
          color='white'
          fontWeight={'1000'}
          variant='link'
          onClick={() => goToPage(setDisplay, 'checkout')}
        >
          Checkout
        </Button> */}
        <Button
          textShadow='2px 2px orange'
          color='white'
          fontWeight={'1000'}
          variant='link'
          onClick={() => goToPage(setDisplay, 'about')}
        >
          About
        </Button>
      </Flex>

      {/* Mobile Hamburger Menu */}
      <Flex my={'.5rem'} ml={'auto'} mr={'1rem'} display={['flex', 'none', 'none', 'none']}>
        <IconButton
          display={['flex', 'none', 'none', 'none']}
          size={'md'}
          aria-label='Open Menu'
          alignSelf={'center'}
          icon={<HamburgerIcon color={'darkorange'} fontSize='3xl' />}
          colorScheme='black'
          onClick={() => setDisplay('flex')}
        />
        <Flex
          top={'0'}
          left={'0'}
          pos={'fixed'}
          bg={`linear-gradient(to top right, white, #b4b4b4)`}
          zIndex={'30'}
          height={'100vh'}
          width={'100vw'}
          display={display}
          flexDir={'column'}
          gap={'3rem'}
          overflow={'auto'}
        >
          <IconButton
            colorScheme={'#000000'}
            mt='1.5rem'
            ml={'auto'}
            mr='2rem'
            size={'md'}
            width={'1rem'}
            aria-label='Close Icon'
            icon={<CloseIcon color={'white'} fontSize='xl' />}
            onClick={() => setDisplay('none')}
          />
          <Flex flexDir='column' pr='2rem' pl='2rem' gap={'3rem'} alignItems='center'>
            <Button
              textShadow='2.5px 2.5px orange'
              colorScheme='black'
              outlineColor='darkorange'
              size={'lg'}
              minWidth='60vw'
              onClick={() => {
                goToPage(setDisplay)
              }}
            >
              Home
            </Button>
            <Button
              textShadow='2.5px 2.5px orange'
              colorScheme='black'
              outlineColor='darkorange'
              size={'lg'}
              minWidth='60vw'
              onClick={() => goToPage(setDisplay, 'shopping-cart')}
            >
              Cart
            </Button>
            {/* <Button
              colorScheme='black'
              size={'lg'}
              minWidth='60vw'
              onClick={() => {
                if (router.pathname === '/checkout') {
                  setDisplay('none')
                } else {
                  router.push('/checkout')
                  setDisplay('none')
                }
              }}
            >
              Checkout
            </Button> */}
            <Button
              textShadow='2.5px 2.5px orange'
              colorScheme='black'
              outlineColor='darkorange'
              size={'lg'}
              minWidth='60vw'
              onClick={() => {
                if (router.pathname === '/about') {
                  setDisplay('none')
                } else {
                  router.push('about')
                  setDisplay('none')
                }
              }}
            >
              About
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
