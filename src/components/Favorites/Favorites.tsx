import { Box, Flex, Text } from '@chakra-ui/react'
import { useFavorite } from '../../../context/favoritesContext'
import { useFetchItemsQuery } from '../../hooks/useFetchItemsQuery'
import { Product } from '../../types/fakeApiTypes'
import { ProductCard } from '../Product/ProductCard'
import { ProductCardSkeleton } from '../ProductCardSkeleton'

export const Favorites = () => {
  const { state } = useFavorite()
  const { data: products } = useFetchItemsQuery()

  console.log(state.length, state, state.length === 1)

  // if there are no items in favorites.
  if (state.length === 1) {
    return (
      <Flex
        flexDir={'column'}
        justifyContent={'center'}
        minH='75vh'
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
            mt='4rem'
            maxW='100%'
            wrap={'wrap'}
            gap='2rem'
            justifyContent={'center'}
            alignItems={'center'}
            alignContent='center'
          >
            {products ? (
              state.map((e) => {
                return e.id === 0 ? (
                  <></>
                ) : (
                  <ProductCard key={products[e.id - 1].id} product={products[e.id - 1]} />
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
