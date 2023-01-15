import { Box, Text, Flex, StatDownArrow, Image, Input } from '@chakra-ui/react'
import { ProductCard } from './Product/ProductCard'
import React, { useRef } from 'react'
import { Product } from '../types/fakeApiTypes'
import { useFetchItemsQuery } from '../hooks/useFetchItemsQuery'
import { ProductCardSkeleton } from './ProductCardSkeleton'
import { useUser } from '@auth0/nextjs-auth0/client'

import WelcomeText from './WelcomeText'

export function SearchBar({ filter, setFilter }: any) {
  return (
    <Flex justifyContent={'center'} mb='3rem'>
      <Input w='200px' textAlign={'center'} onChange={(e) => setFilter(e.target.value)} />
    </Flex>
  )
}

function HomePage() {
  const {
    data: products,
    isError,
    error,
  }: { data: Product[] | undefined; isError: boolean; error: any } = useFetchItemsQuery()
  const { user } = useUser()
  const scrollToRef = useRef<HTMLDivElement>(null)
  const [filter, setFilter] = React.useState('')

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
        position={'relative'}
        mx='-4'
      >
        {/* Welcome username part */}
        {user ? (
          <Text
            fontSize={['3xl', '5xl']}
            fontFamily='ggsansmedium'
            fontWeight='bold'
            zIndex='2'
            bgGradient={'linear(to-br, #8A2387,#E94057,darkorange)'}
            bgClip={'text'}
          >{`Welcome ${user.name}!`}</Text>
        ) : (
          <WelcomeText />
        )}

        <Text zIndex='2' mt='2rem'>
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
        <Text fontSize={['sm', 'md']} color={'#E94057'} zIndex='2' fontWeight={'bold'} mt='3rem'>
          Scroll down to browse our products!
        </Text>
        <Text mt='3rem' as='i' fontWeight={'bold'} color='#E94057'>
          click me!
        </Text>
        <StatDownArrow
          mt='-.5rem'
          color={'#E94057'}
          zIndex='2'
          fontWeight={'bold'}
          fontSize='6xl'
          onClick={() => {
            const navbar = document.getElementById('navbar')!
            navbar.style.opacity = '0'
            navbar.style.visibility = 'hidden'
            scrollToRef.current?.scrollIntoView()
          }}
          _hover={{ cursor: 'pointer' }}
        />

        <Image
          src='/wave.svg'
          alt='footer bg'
          bottom='0'
          position={'absolute'}
          width='100%'
          height={['12.5rem', '25rem']}
        />
      </Flex>

      <SearchBar filter={filter} setFilter={setFilter} />

      <Flex
        mx='auto'
        maxW={{ base: '100%', '2xl': '75%' }}
        wrap={'wrap'}
        gap='2rem'
        justifyContent={'center'}
        flexGrow='100%'
        id='products'
        mb={[null, '3rem']}
        ref={scrollToRef}
      >
        {products ? (
          products
            .filter((e) => e.title.toLowerCase().includes(filter))
            .map((p: Product) => <ProductCard key={p.id} product={p} />)
        ) : (
          <>
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
          </>
        )}
      </Flex>
    </Box>
  )
}

export { HomePage }
