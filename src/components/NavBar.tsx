import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Button, Flex, IconButton } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useCartContext } from '../../context/cartContext'
import { useFavorite } from '../../context/favoritesContext'
import { goToPage } from '../helpers/routeFunction'
import { CartIcon } from './CartIcon'
import { FavoriteIcon } from './FavoriteIcon'
import { StyledBsShop } from './StyledBsShop'

export const Navbar = () => {
  const [display, setDisplay] = useState('none')
  const { state } = useFavorite()
  const { cart } = useCartContext()
  const router = useRouter()

  return (
    <Flex as='nav' align='center' justify='space-between' wrap='wrap' h='7.5vh'>
      <Flex flexDir={'row'} justifyContent='center' align={'center'}>
        <IconButton
          variant={'link'}
          as={StyledBsShop}
          color='darkorange'
          fontSize='2xl'
          onClick={() => goToPage(setDisplay)}
          aria-label={''}
          _hover={{ cursor: 'pointer' }}
        />
        <Button
          fontSize={'4xl'}
          pb='3rem'
          fontFamily='ggsansmedium'
          fontWeight={'bold'}
          color='darkorange'
          ml='1rem'
          variant={'unstyled'}
          onClick={() => goToPage(setDisplay)}
        >
          Elise
        </Button>
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
          textShadow='.5px .5px orange'
          color='#E94057'
          fontWeight={'1000'}
          variant='link'
          onClick={() => goToPage(setDisplay)}
        >
          Home
        </Button>
        {cart.length > 1 ? (
          <CartIcon />
        ) : (
          <Button
            textShadow='.5px .5px orange'
            color='#E94057'
            fontWeight={'1000'}
            variant='link'
            onClick={() => goToPage(setDisplay, 'shopping-cart')}
          >
            Cart
          </Button>
        )}
        {/* <Button
          color='#E94057'
          fontWeight={'1000'}
          variant='link'
          onClick={() => goToPage(setDisplay, 'checkout')}
        >
          Checkout
        </Button> */}
        {state.length > 1 ? (
          <FavoriteIcon />
        ) : (
          <Button
            textShadow='.5px .5px orange'
            color='#E94057'
            fontWeight={'1000'}
            variant='link'
            onClick={() => goToPage(setDisplay, 'favorites')}
          >
            Favorites
          </Button>
        )}
        <Button
          textShadow='.5px .5px orange'
          color='#E94057'
          fontWeight={'1000'}
          variant='link'
          onClick={() => goToPage(setDisplay, 'about')}
        >
          About
        </Button>
      </Flex>

      {/* Mobile Hamburger Menu */}
      <Flex my={'.5rem'} ml={'auto'} mr={'1rem'} display={['flex', 'none', 'none', 'none']}>
        {/* Cart shows up if not empty */}
        {cart.length > 1 && <CartIcon pr='1.5rem' />}
        {state.length > 1 && <FavoriteIcon pr='1.5rem' />}
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
            pos='absolute'
            top='0'
            right='0'
            mt='1.5rem'
            mr='2rem'
            colorScheme={'#000000'}
            size={'md'}
            width={'1rem'}
            aria-label='Close Icon'
            icon={<CloseIcon color={'white'} fontSize='xl' />}
            onClick={() => setDisplay('none')}
          />
          <Flex flexDir='column' px='2rem' gap={'4rem'} alignItems='center' my='auto'>
            <Button
              rounded='xl'
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
              rounded='xl'
              textShadow='2.5px 2.5px orange'
              colorScheme='black'
              outlineColor='darkorange'
              size={'lg'}
              minWidth='60vw'
              onClick={() => goToPage(setDisplay, 'shopping-cart')}
            >
              Cart
            </Button>

            <Button
              rounded='xl'
              textShadow='2.5px 2.5px orange'
              colorScheme='black'
              outlineColor='darkorange'
              size={'lg'}
              minWidth='60vw'
              onClick={() => goToPage(setDisplay, 'favorites')}
            >
              Favorites
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
              rounded='xl'
              textShadow='2.5px 2.5px orange'
              colorScheme='black'
              outlineColor='darkorange'
              size={'lg'}
              minWidth='60vw'
              onClick={() => goToPage(setDisplay, 'about')}
            >
              About
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
