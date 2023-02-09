import { Box, Text, Flex, StatDownArrow, Image, Input } from '@chakra-ui/react'
import { ProductCard } from './Product/ProductCard'
import { useRef, useState } from 'react'
import { Product } from '../types/fakeApiTypes'
import { useFetchItemsQuery } from '../hooks/useFetchItemsQuery'
import { ProductCardSkeleton } from './ProductCardSkeleton'
import { useUser } from '@auth0/nextjs-auth0/client'
import WelcomeText from './WelcomeText'
import { useDebounce } from '../hooks/useDebounce'
import { SearchBar } from './SearchBar'

function HomePage() {
  const { data: products, isError, error }: { data: Product[] | undefined; isError: boolean; error: any } = useFetchItemsQuery()
  const { user } = useUser()
  const scrollToRef = useRef<HTMLDivElement>(null)
  const [filter, setFilter] = useState('')

  function changeFilter(e: React.ChangeEvent<HTMLInputElement>) {
    setFilter(e.target.value)
  }

  const { debouncedFunction, loading } = useDebounce(changeFilter, 500)

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  let filteredProducts = products
    ? products.filter((e) => {
        const descriptionMatch = e.description.toLowerCase().includes(filter.toLowerCase())
        const titleMatch = e.title.toLowerCase().includes(filter.toLowerCase())
        return descriptionMatch || titleMatch
      })
    : []

  return (
    <Box bg="white" rounded={'xl'} minH="85vh">
      <Flex
        flexDir={'column'}
        justifyContent={'center'}
        alignItems="center"
        textAlign="center"
        pt="1.5rem"
        h="90vh"
        position={'relative'}
        mx="-4"
      >
        {/* Welcome username part */}
        {user ? (
          <Text
            fontSize={['3xl', '5xl']}
            fontFamily="ggsansmedium"
            fontWeight="bold"
            zIndex="2"
            bgGradient={'linear(to-br, #8A2387,#E94057,darkorange)'}
            bgClip={'text'}
          >{`Welcome ${user.name}!`}</Text>
        ) : (
          <WelcomeText />
        )}

        <Text zIndex="2" mt="2rem">
          <Text
            as="span"
            fontSize={['3xl', '5xl']}
            fontFamily="ggsansmedium"
            fontWeight="bold"
            bgGradient={'linear(to-tl, #8A2387,#E94057,darkorange)'}
            bgClip={'text'}
            zIndex="2"
          >
            Your one stop shop
          </Text>
          <Text as="span" color="black" zIndex="2" fontSize={['3xl', '5xl']}>
            .
          </Text>
        </Text>
        <Text fontSize={['sm', 'md']} color={'#E94057'} zIndex="2" fontWeight={'bold'} mt="3rem">
          Scroll down to browse our products!
        </Text>
        <Text mt="3rem" as="i" fontWeight={'bold'} color="#E94057">
          click me!
        </Text>
        <StatDownArrow
          mt="-.5rem"
          color={'#E94057'}
          zIndex="2"
          fontWeight={'bold'}
          fontSize="6xl"
          onClick={() => {
            const navbar = document.getElementById('navbar')!
            navbar.style.opacity = '0'
            navbar.style.visibility = 'hidden'
            scrollToRef.current?.scrollIntoView()
          }}
          _hover={{ cursor: 'pointer' }}
        />

        <Image src="/wave.svg" alt="footer bg" bottom="0" position={'absolute'} width="100%" height={['12.5rem', '25rem']} />
      </Flex>

      <SearchBar debouncedFunction={debouncedFunction} scrollRef={scrollToRef} />

      <Flex
        mx="auto"
        maxW={{ base: '100%', '2xl': '75%' }}
        minH="75vh"
        wrap={'wrap'}
        gap="2rem"
        justifyContent={'center'}
        flexGrow="100%"
        id="products"
        mb={[null, '3rem']}
        alignContent="center"
      >
        {products && !loading ? (
          filteredProducts.map((p: Product) => <ProductCard key={p.id} product={p} />)
        ) : (
          <>
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
          </>
        )}

        {!loading && filteredProducts?.length === 0 && <Text>We couldn&apos;t find what you&apos;re looking for.</Text>}
      </Flex>
    </Box>
  )
}

export { HomePage }
