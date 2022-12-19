import { CloseButton, Flex, Link, Select, SelectProps, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { PriceTag } from './PriceTag'
import { CartProductMeta } from './CartProductMeta'
import { useFetchItemsQuery } from '../../hooks/useFetchItemsQuery'
import { CartItem as CartItemProps } from '../../types/cart'
import { useCartContext } from '../../../context/cartContext'
import { optionRange } from '../../values/optionRange'

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
  const { data } = useFetchItemsQuery()
  const { removeFromCart } = useCartContext()
  const { setItemQuantity } = useCartContext()

  if (!data) return <></>

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
