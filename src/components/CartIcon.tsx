import { Center, CenterProps, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { BsFillCircleFill, BsCartFill } from 'react-icons/bs'
import { useCartContext } from '../../context/cartContext'
import { goToPageOutsideOfNavbar } from '../helpers/routeFunction'

export const CartIcon = (props: CenterProps) => {
  const { cart } = useCartContext()
  let cartTotalItemAmount = cart.reduce((total, item) => total + item.quantity, 0)
  return (
    <Center
      {...props}
      onClick={() => goToPageOutsideOfNavbar('shopping-cart')}
      _hover={{ cursor: 'pointer' }}
    >
      <Text pos='absolute' pl='25px' pb='25px' zIndex='3' fontSize={'14px'}>
        {cartTotalItemAmount}
      </Text>
      <Icon
        as={BsFillCircleFill}
        position='absolute'
        pl='25px'
        pb='25px'
        fontSize={'46px'}
        zIndex={'2'}
        color='#E94057'
      />
      <Icon as={BsCartFill} color='darkorange' fontSize={'2xl'} />
    </Center>
  )
}
