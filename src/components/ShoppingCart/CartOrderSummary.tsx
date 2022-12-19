import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Button, Flex, Icon, Link, Stack, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { useCartContext } from '../../../context/cartContext'
import { goToPageOutsideOfNavbar } from '../../helpers/routeFunction'
import { useFetchItemsQuery } from '../../hooks/useFetchItemsQuery'
import { CartItem } from '../../types/cart'
import { Product } from '../../types/fakeApiTypes'
import { formatPrice } from './PriceTag'

type OrderSummaryItemProps = {
  label: string
  value?: string
  children?: React.ReactNode
}

const OrderSummaryItem = (props: OrderSummaryItemProps) => {
  const { label, value, children } = props
  return (
    <Flex justify='space-between' fontSize='sm'>
      <Text fontWeight='medium' color={mode('gray.600', 'gray.400')}>
        {label}
      </Text>
      {value ? <Text fontWeight='medium'>{value}</Text> : children}
    </Flex>
  )
}

export const CartOrderSummary = () => {
  const { calculateSubTotal } = useCartContext()

  return (
    <Stack spacing='8' borderWidth='1px' rounded='lg' padding='8' width='full'>
      <Text fontSize='2xl' fontWeight={'bold'}>
        Order Summary
      </Text>

      <Stack spacing='6'>
        <OrderSummaryItem label='Subtotal' value={formatPrice(calculateSubTotal())} />
        <OrderSummaryItem label='Shipping + Tax'>
          <Link href='#' textDecor='underline'>
            Calculate shipping
          </Link>
        </OrderSummaryItem>
        <OrderSummaryItem label='Coupon Code'>
          <Link href='#' textDecor='underline'>
            Add coupon code
          </Link>
        </OrderSummaryItem>
        <Flex justify='space-between'>
          <Text fontSize='lg' fontWeight='semibold'>
            Total
          </Text>
          <Text fontSize='xl' fontWeight='extrabold'>
            {formatPrice(calculateSubTotal())}
          </Text>
        </Flex>
      </Stack>
      <Button
        colorScheme='orange'
        w='100%'
        size='lg'
        fontSize='md'
        // onClick={() => goToPageOutsideOfNavbar('checkout')} TODO: this is commented until I properly implement Checkout page.
      >
        Checkout
      </Button>
    </Stack>
  )
}
