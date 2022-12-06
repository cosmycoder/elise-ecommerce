import { useState, useEffect } from 'react'
import { Box, Text, Center, useToast, Skeleton } from '@chakra-ui/react'
import { ProductGrid } from './Product/ProductGrid'
import { ProductCard } from './Product/ProductCard'
import React from 'react'
import { Product } from '../types/fakeApiTypes'

function HomePage() {
  const [hasMounted, setHasMounted] = React.useState(false)
  const [products, setProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const toast = useToast()

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  useEffect(() => {
    // fetching products from the server and update state
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((products) => setProducts(products))
      .catch((err) => console.error(err))
  }, [])

  // To prevent hydration issues with React.
  if (!hasMounted) {
    return <Skeleton h='100vh' w='100vw' />
  }

  // function handleSearch(event: React.FormEvent) {
  //   event.preventDefault()
  //   // search for products matching the search term
  // }

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
    <Box bg='white' rounded={'xl'}>
      <Center pt='1.5rem' mb='5rem'>
        <Text fontSize='3xl' textAlign={'center'}>
          Welcome to
          <Text color='cornflowerblue' as='span' fontWeight={'extrabold'}>
            &nbsp;Elise
          </Text>
          , your one stop shop!
        </Text>
      </Center>

      <ProductGrid>
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </Box>
  )
}

export { HomePage }
