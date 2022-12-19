import { useState, useEffect } from 'react'
import { Box, Text, Center, useToast, Skeleton, Flex } from '@chakra-ui/react'
import { ProductCard } from './Product/ProductCard'
import React from 'react'
import { Product } from '../types/fakeApiTypes'
import { useFetchItemsQuery } from '../hooks/useFetchItemsQuery'

function HomePage() {
  // const [searchTerm, setSearchTerm] = useState('')
  const { data: products, isFetching } = useFetchItemsQuery()

  // function handleAddToCart(productId: string) {
  //   // add the product to the cart and show a toast message
  //   toast({
  //     title: 'Product Added to Cart',
  //     description: 'The product has been added to your shopping cart.',
  //     status: 'success',
  //     duration: 3000,
  //     isClosable: true,
  //   })
  // }

  return (
    <Box bg='white' rounded={'xl'} minH='85vh'>
      <Center pt='1.5rem' mb='5rem'>
        <Text fontSize='3xl' textAlign={'center'}>
          Welcome to
          <Text color='cornflowerblue' as='span' fontWeight={'extrabold'}>
            &nbsp;Elise
          </Text>
          , your one stop shop!
        </Text>
      </Center>

      <Flex
        className='productsContainer'
        maxW='100%'
        wrap={'wrap'}
        gap='2rem'
        justifyContent={'center'}
        flexGrow='100%'
      >
        {products &&
          products.map((product: Product) => <ProductCard key={product.id} product={product} />)}
      </Flex>
    </Box>
  )
}

export { HomePage }
