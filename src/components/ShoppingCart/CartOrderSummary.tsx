import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Button, Flex, Icon, Link, Stack, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
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
  return (
    <Stack spacing='8' borderWidth='1px' rounded='lg' padding='8' width='full'>
      <Text fontSize='2xl' fontWeight={'bold'}>
        Order Summary
      </Text>

      <Stack spacing='6'>
        <OrderSummaryItem label='Subtotal' value={formatPrice(597)} />
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
            {formatPrice(597)}
          </Text>
        </Flex>
      </Stack>
      <Link href='/checkout'>
        <Button colorScheme='blue' w='100%' size='lg' fontSize='md'>
          Checkout
        </Button>
      </Link>
    </Stack>
  )
}
