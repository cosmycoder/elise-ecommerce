import {
  CloseButton,
  Flex,
  Link,
  Select,
  SelectProps,
  useColorModeValue,
  Skeleton,
  SkeletonText,
  SkeletonCircle,
} from '@chakra-ui/react'
import * as React from 'react'
import { PriceTag } from './PriceTag'
import { CartProductMeta } from './CartProductMeta'
import { useFetchItemsQuery } from '../../hooks/useFetchItemsQuery'
import { CartItem as CartItemProps } from '../../types/cartTypes'
import { useCartContext } from '../../../context/cartContext'
import { optionRange } from '../../values/optionRange'
import { Product } from '../../types/fakeApiTypes'

const QuantitySelect = (props: SelectProps) => {
  return (
    <Select
      maxW='74px'
      aria-label='Select quantity'
      focusBorderColor={useColorModeValue('orange.500', 'orange.200')}
      iconColor='green'
      variant={'outline'}
      {...props}
    >
      {optionRange.map((e) => (
        <option value={e} key={e}>
          {e}
        </option>
      ))}
    </Select>
  )
}

export const CartItem = (props: CartItemProps) => {
  // There isn't any decent way to handle error type of useQuery as far as I've searched so I'm calling any.
  const { data, isError, error }: { data: Product[] | undefined; isError: boolean; error: any } =
    useFetchItemsQuery()
  const { removeFromCart, setItemQuantity } = useCartContext()

  // This is so that it doesn't show a skeleton for the initial value id:0 quant:0
  if (!data && props.id === 0) {
    return <></>
  }

  if (!data) {
    return (
      <Flex flexDir={'row'}>
        <Skeleton
          h='120px'
          minW={['80px', '120px']}
          maxW={['80px', '120px']}
          rounded={'md'}
        ></Skeleton>
        <Flex flexDir={'column'} w='100%'>
          <SkeletonText pl='1rem' w='full' />
          <Flex flexDir={'row'} mt='10px'>
            <Skeleton w='60px' h='40px' mx='auto' rounded={'md'} />
            <Skeleton w='40px' h='40px' rounded={'md'} />
          </Flex>
        </Flex>
      </Flex>
    )
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  const { id, quantity } = props
  if (id === 0) return <></> // This is the default value in the cart, doesn't represent an item.

  let currentItem = data[id - 1]

  return (
    <Flex direction={{ base: 'column', md: 'row' }} justify='space-between' align='center'>
      <CartProductMeta
        name={currentItem.title}
        image={currentItem.image}
        // isGiftWrapping={isGiftWrapping}
      />

      {/* Desktop */}
      <Flex width='full' justify='space-between' display={{ base: 'none', md: 'flex' }}>
        <QuantitySelect
          value={quantity}
          onChange={(e) => setItemQuantity(id, Number(e.target.value))}
        />
        <PriceTag price={currentItem.price} />
        <CloseButton
          aria-label={`Delete ${currentItem.title} from cart`}
          onClick={(e) => removeFromCart(id, quantity)}
        />
      </Flex>

      {/* Mobile */}
      <Flex
        mt='4'
        align='center'
        width='full'
        justify='space-between'
        display={{ base: 'flex', md: 'none' }}
      >
        <Link fontSize='sm' textDecor='underline' onClick={(e) => removeFromCart(id, quantity)}>
          Delete
        </Link>
        <QuantitySelect
          value={quantity}
          onChange={(e) => setItemQuantity(id, Number(e.target.value))}
        />
        <PriceTag price={currentItem.price} />
      </Flex>
    </Flex>
  )
}
