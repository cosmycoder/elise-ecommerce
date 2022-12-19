import { Flex, Text, Box } from '@chakra-ui/react'
import { Navbar } from './NavBar'

export default function Layout({ children }: any) {
  return (
    <Flex direction='column' h='auto' minH='100vh' bg='gray.50'>
      <Box as='header' bg='linear-gradient(to top, transparent, #d1d1d1)' color='white' p='4'>
        <Navbar />
      </Box>
      <Box rounded='xl' flex='auto' as='main' p='4' m='4' bgColor='white' shadow={'2xl'}>
        {children}
      </Box>
      <Box
        as='footer'
        bg='linear-gradient(to bottom, transparent, #d1d1d1)'
        textAlign={'center'}
        py={4}
      >
        <Text fontWeight={'600'} color='black'>
          Elise - 2022
        </Text>
      </Box>
    </Flex>
  )
}
