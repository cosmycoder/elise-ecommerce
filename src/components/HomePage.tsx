import { Box, Text, Flex, chakra, StatDownArrow } from '@chakra-ui/react'
import { ProductCard } from './Product/ProductCard'
import React from 'react'
import { Product } from '../types/fakeApiTypes'
import { useFetchItemsQuery } from '../hooks/useFetchItemsQuery'
import { isValidMotionProp, motion } from 'framer-motion'

function HomePage() {
  const { data: products } = useFetchItemsQuery()
  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: isValidMotionProp,
  })

  return (
    <Box bg='white' rounded={'xl'} minH='85vh'>
      <Flex
        flexDir={'column'}
        justifyContent={'center'}
        alignItems='center'
        textAlign='center'
        pt='1.5rem'
        mb='5rem'
        h='90vh'
      >
        <Text zIndex='2'>
          <Text
            as='span'
            fontSize='5xl'
            fontFamily='ggsansmedium'
            fontWeight='bold'
            bgGradient={'linear(to-tl, #8A2387,#E94057,darkorange)'}
            bgClip={'text'}
            zIndex='2'
          >
            {' '}
            Your one stop shop
          </Text>
          <Text as='span' color='black' zIndex='2' fontSize={'5xl'}>
            .
          </Text>
        </Text>
        <ChakraBox
          display={['none', 'flex']}
          style={{
            background: 'black',
            width: '200px',
            height: '200px',
            zIndex: '1',
            position: 'absolute',
            marginLeft: '395px',
            marginBottom: '150px',
          }}
          animate={{
            scale: [1, 2, 2, 1, 0],
            rotate: [180, 0, 180, 180, 0],
            borderRadius: ['25%', '50%', '0%', '0%', '50%'],
          }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{
            duration: 2,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
        <Text color={'#E94057'} zIndex='2' fontWeight={'bold'} mt='3rem'>
          Scroll down to browse our products!
        </Text>
        <StatDownArrow color={'#E94057'} zIndex='2' fontWeight={'bold'} fontSize='6xl' mt='3rem' />
      </Flex>

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
