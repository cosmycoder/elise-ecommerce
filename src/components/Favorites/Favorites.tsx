import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useFavorite } from '../../../context/favoritesContext'
import { useFetchItemsQuery } from '../../hooks/useFetchItemsQuery'
import { Product } from '../../types/fakeApiTypes'
import { ProductCard } from '../Product/ProductCard'
import { ProductCardSkeleton } from '../ProductCardSkeleton'

export const Favorites = () => {
  const { state } = useFavorite()
  const { data: products } = useFetchItemsQuery()

  // if there are no items in favorites.
  if (state.length === 1) {
    return (
      <Flex
        flexDir={'column'}
        justifyContent={'center'}
        minH='70vh'
        alignItems={'center'}
        pt='2rem'
      >
        <Text
          fontSize={['xl', '3xl', '5xl', '7xl']}
          bgGradient={'linear(to-tl, #8A2387,#E94057,darkorange)'}
          bgClip={'text'}
          fontWeight='bold'
          textAlign={'center'}
        >
          It looks rather empty in here :&apos;)
        </Text>
        <Text pt='2rem' textAlign={'center'} color={'#E94057'} fontSize={['sm', 'md']} w='80%'>
          Add some items to favorites!
        </Text>
        <Text textAlign={'center'} color={'#E94057'} fontSize={['sm', 'md']} w='80%'>
          Don&apos;t be shy.
        </Text>
      </Flex>
    )
  }

  return (
    <>
      <>
        <Box bg='white' rounded={'xl'} minH='75vh'>
          <Text
            textAlign={'center'}
            pt='2rem'
            fontSize={['5xl', '7xl']}
            bgGradient={'linear(to-tl, #8A2387,#E94057,darkorange)'}
            bgClip={'text'}
            fontWeight='bold'
          >
            Your Picks
          </Text>

          <Flex
            my='4rem'
            mx='auto'
            maxW={['100%', '80%']}
            wrap={'wrap'}
            gap='2rem'
            justifyContent={'center'}
          >
            {products ? (
              state.map((e) => {
                return e.id === 0 ? (
                  <React.Fragment key={e.id}></React.Fragment>
                ) : (
                  <ProductCard key={e.id} product={products[e.id - 1]} />
                )
              })
            ) : (
              <>
                <ProductCardSkeleton />
              </>
            )}
          </Flex>
        </Box>
      </>
    </>
  )
}
