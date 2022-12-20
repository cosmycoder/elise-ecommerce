import { Box, Flex, Text, HStack, Stack, useColorModeValue as mode, Button } from '@chakra-ui/react'
import * as React from 'react'
import { useCartContext } from '../../../context/cartContext'
import { goToPageOutsideOfNavbar } from '../../helpers/routeFunction'
import { CartItem } from './CartItem'
import { CartOrderSummary } from './CartOrderSummary'

export const ShoppingCart = () => {
  const { cart } = useCartContext()
  console.log('cart', cart)
  return (
    <Box
      maxW={{ base: '3xl', lg: '7xl' }}
      mx='auto'
      px={{ base: '4', md: '8', lg: '12' }}
      py={{ base: '6', md: '8', lg: '12' }}
    >
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        align={{ lg: 'flex-start' }}
        spacing={{ base: '8', md: '16' }}
      >
        <Stack spacing={{ base: '8', md: '10' }} flex='2'>
          <Text fontSize='2xl' fontWeight='extrabold'>
            Shopping Cart ({cart.length !== 0 ? cart.length - 1 : 0} items)
          </Text>

          <Stack spacing='6'>
            {cart && cart.map((item) => <CartItem key={item.id} {...item} />)}
          </Stack>
        </Stack>

        <Flex direction='column' align='center' flex='1'>
          <CartOrderSummary />
          <HStack mt='6' fontWeight='semibold'>
            <p>or</p>
            <Button onClick={() => goToPageOutsideOfNavbar()} variant='link' color={'orange'}>
              Continue shopping
            </Button>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  )
}
