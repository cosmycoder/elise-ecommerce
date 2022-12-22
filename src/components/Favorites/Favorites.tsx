import { Box, Flex, Text } from '@chakra-ui/react'
import { useFavorite } from '../../../context/favoritesContext'
import { useFetchItemsQuery } from '../../hooks/useFetchItemsQuery'
import { Product } from '../../types/fakeApiTypes'
import { ProductCard } from '../Product/ProductCard'
import { ProductCardSkeleton } from '../ProductCardSkeleton'

export const Favorites = () => {
  const { state } = useFavorite()
  const { data: products } = useFetchItemsQuery()

  return (
    <>
      <>
        <Box bg='white' rounded={'xl'} minH='85vh'>
          <Flex justifyContent={'center'} pt='2rem'>
            <Text
              fontSize={'7xl'}
              bgGradient={'linear(to-tl, #8A2387,#E94057,darkorange)'}
              bgClip={'text'}
              fontWeight='bold'
            >
              Your Picks
            </Text>
          </Flex>

          <Flex
            mt='4rem'
            maxW='100%'
            wrap={'wrap'}
            gap='2rem'
            justifyContent={'center'}
            flexGrow='100%'
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
