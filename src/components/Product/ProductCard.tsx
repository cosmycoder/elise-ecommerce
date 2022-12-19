import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Link,
  Skeleton,
  Stack,
  StackProps,
  Text,
  Tooltip,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { Rating } from './Rating'
import { FavouriteButton } from './FavouriteButton'
import { PriceTag } from './PriceTag'
import { Product } from '../../types/fakeApiTypes'
import { useCartContext } from '../../../context/cartContext'

interface Props {
  product: Product
  rootProps?: StackProps
}

export const ProductCard = (props: Props) => {
  const { product, rootProps } = props
  const { title, image, price, rating } = product
  const { addToCart } = useCartContext()

  return (
    <Flex
      spacing={useBreakpointValue({ base: '4', md: '5' })}
      p='1rem'
      {...rootProps}
      h='400px'
      w='320px'
      flexDir={'column'}
    >
      <Box position='relative'>
        <Flex bg='white' rounded={'lg'} justifyContent={'center'} alignContent='center'>
          <Image
            display={'block'}
            objectFit={'contain'}
            w='16rem'
            h='12rem'
            py='0.25rem'
            src={image}
            alt={title}
            draggable='false'
            loading='eager'
            fallback={<Skeleton w='18rem' h='12rem' />}
            borderRadius={useBreakpointValue({ base: 'md', md: 'xl' })}
          />
        </Flex>
        <FavouriteButton
          position='absolute'
          top='4'
          right='4'
          aria-label={`Add ${title} to your favourites`}
        />
      </Box>
      <Stack spacing='1' my='auto'>
        <Tooltip hasArrow label={title} placement='bottom'>
          <Text
            fontWeight='medium'
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            noOfLines={[2]}
          >
            {title}
          </Text>
        </Tooltip>
      </Stack>
      <PriceTag price={price} currency='USD' />
      <Stack>
        <HStack>
          <Rating defaultValue={rating.rate} size='sm' />
          <Text
            fontSize='sm'
            fontWeight={'normal'}
            color={useColorModeValue('gray.600', 'gray.400')}
          >
            {rating.count} Reviews
          </Text>
        </HStack>
      </Stack>
      <Stack align='center' mt='.5rem'>
        <Button colorScheme={'orange'} width='full' onClick={() => addToCart(product.id, 1)}>
          Add to cart
        </Button>
        <Link
          textDecoration='underline'
          fontWeight='medium'
          color={useColorModeValue('gray.600', 'gray.400')}
        >
          Quick shop
        </Link>
      </Stack>
    </Flex>
  )
}
