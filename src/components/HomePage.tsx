import {
  Box,
  Text,
  Flex,
  chakra,
  StatDownArrow,
  Skeleton,
  SkeletonText,
  Stack,
  SkeletonCircle,
} from '@chakra-ui/react'
import { ProductCard } from './Product/ProductCard'
import React from 'react'
import { Product } from '../types/fakeApiTypes'
import { useFetchItemsQuery } from '../hooks/useFetchItemsQuery'
import { isValidMotionProp, motion } from 'framer-motion'
import { ProductCardSkeleton } from './ProductCardSkeleton'

function HomePage() {
  const {
    data: products,
    isError,
    error,
  }: { data: Product[] | undefined; isError: boolean; error: any } = useFetchItemsQuery()
  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: isValidMotionProp,
  })

  // if (!products) {
  //   return (
  //     <Flex flexDir={'row'}>
  //       <Skeleton
  //         h='120px'
  //         minW={['80px', '120px']}
  //         maxW={['80px', '120px']}
  //         rounded={'md'}
  //       ></Skeleton>
  //       <Flex flexDir={'column'} w='100%'>
  //         <SkeletonText pl='1rem' w='full' />
  //         <Flex flexDir={'row'} mt='10px'>
  //           <Skeleton w='60px' h='40px' mx='auto' rounded={'md'} />
  //           <Skeleton w='40px' h='40px' rounded={'md'} />
  //         </Flex>
  //       </Flex>
  //     </Flex>
  //   )
  // }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

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
            fontSize={['3xl', '5xl']}
            fontFamily='ggsansmedium'
            fontWeight='bold'
            bgGradient={'linear(to-tl, #8A2387,#E94057,darkorange)'}
            bgClip={'text'}
            zIndex='2'
          >
            Your one stop shop
          </Text>
          <Text as='span' color='black' zIndex='2' fontSize={['3xl', '5xl']}>
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
        <Text fontSize={['sm', 'md']} color={'#E94057'} zIndex='2' fontWeight={'bold'} mt='3rem'>
          Scroll down to browse our products!
        </Text>
        <StatDownArrow color={'#E94057'} zIndex='2' fontWeight={'bold'} fontSize='6xl' mt='3rem' />
      </Flex>

      <Flex
        mx='auto'
        maxW={{ base: '100%', '2xl': '75%' }}
        wrap={'wrap'}
        gap='2rem'
        justifyContent={'center'}
        flexGrow='100%'
      >
        {products ? (
          products.map((p: Product) => <ProductCard key={p.id} product={p} />)
        ) : (
          <>
            <ProductCardSkeleton />
          </>
        )}
      </Flex>
    </Box>
  )
}

export { HomePage }
