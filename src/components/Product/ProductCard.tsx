import {
  AspectRatio,
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Image,
  Link,
  Skeleton,
  Spacer,
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

interface Props {
  product: Product
  rootProps?: StackProps
}

export const ProductCard = (props: Props) => {
  const { product, rootProps } = props
  const { title, image, price, salePrice, rating } = product

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
            objectFit={'contain'}
            w='16rem'
            h='12rem'
            py='0.25rem'
            src={image}
            alt={title}
            draggable='false'
            fallback={<Skeleton />}
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
        {/* <Tooltip> */}
        <Text
          fontWeight='medium'
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          noOfLines={[2]}
        >
          {title}
        </Text>
        {/* </Tooltip> */}
      </Stack>
      <PriceTag price={price} salePrice={salePrice} currency='USD' />
      <Stack>
        <HStack>
          <Rating defaultValue={rating.rate} size='sm' />
          <Text fontSize='sm' color={useColorModeValue('gray.600', 'gray.400')}>
            {rating.count} Reviews
          </Text>
        </HStack>
      </Stack>
      <Stack align='center'>
        <Button bg={'gray.500'} colorScheme='gray' width='full'>
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
