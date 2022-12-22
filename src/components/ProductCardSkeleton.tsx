import { Box, Flex, Skeleton, SkeletonCircle, SkeletonText, Stack } from '@chakra-ui/react'
import React from 'react'

export const ProductCardSkeleton = () => {
  return (
    <>
      <Flex p='1rem' h='400px' w='320px' flexDir={'column'}>
        <Box pos='relative'>
          <Flex bg='white' rounded={'lg'} justifyContent={'center'} alignContent='center'>
            <Skeleton
              display={'block'}
              w='16rem'
              h='12rem'
              py='0.25rem'
              draggable='false'
              borderRadius={'md'}
            ></Skeleton>
          </Flex>
          <SkeletonCircle position='absolute' top='4' right='8' />
        </Box>
        <Stack spacing='1' my='auto'>
          <SkeletonText pl='1rem' w='full' fontWeight='medium' noOfLines={[2]} />
        </Stack>
        <Skeleton w='80%' h='40px' rounded='xl' mx='auto' />
      </Flex>

      <Flex p='1rem' h='400px' w='320px' flexDir={'column'}>
        <Box pos='relative'>
          <Flex bg='white' rounded={'lg'} justifyContent={'center'} alignContent='center'>
            <Skeleton
              display={'block'}
              w='16rem'
              h='12rem'
              py='0.25rem'
              draggable='false'
              borderRadius={'md'}
            ></Skeleton>
          </Flex>
          <SkeletonCircle position='absolute' top='4' right='8' />
        </Box>
        <Stack spacing='1' my='auto'>
          <SkeletonText pl='1rem' w='full' fontWeight='medium' noOfLines={[2]} />
        </Stack>
        <Skeleton w='80%' h='40px' rounded='xl' mx='auto' />
      </Flex>

      <Flex p='1rem' h='400px' w='320px' flexDir={'column'}>
        <Box pos='relative'>
          <Flex bg='white' rounded={'lg'} justifyContent={'center'} alignContent='center'>
            <Skeleton
              display={'block'}
              w='16rem'
              h='12rem'
              py='0.25rem'
              draggable='false'
              borderRadius={'md'}
            ></Skeleton>
          </Flex>
          <SkeletonCircle position='absolute' top='4' right='8' />
        </Box>
        <Stack spacing='1' my='auto'>
          <SkeletonText pl='1rem' w='full' fontWeight='medium' noOfLines={[2]} />
        </Stack>
        <Skeleton w='80%' h='40px' rounded='xl' mx='auto' />
      </Flex>

      <Flex p='1rem' h='400px' w='320px' flexDir={'column'}>
        <Box pos='relative'>
          <Flex bg='white' rounded={'lg'} justifyContent={'center'} alignContent='center'>
            <Skeleton
              display={'block'}
              w='16rem'
              h='12rem'
              py='0.25rem'
              draggable='false'
              borderRadius={'md'}
            ></Skeleton>
          </Flex>
          <SkeletonCircle position='absolute' top='4' right='8' />
        </Box>
        <Stack spacing='1' my='auto'>
          <SkeletonText pl='1rem' w='full' fontWeight='medium' noOfLines={[2]} />
        </Stack>
        <Skeleton w='100%' h='40px' rounded='xl' mx='auto' />
      </Flex>
    </>
  )
}
