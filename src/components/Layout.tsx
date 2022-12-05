import { Flex, Text, Box } from '@chakra-ui/react'
import { Navbar } from './NavBar'

export default function Layout({ children }: any) {
  return (
    <Flex direction='column' minH='100vh' bg='gray.50'>
      <Box as='header' bg='linear-gradient(to top, transparent, gray)' color='white' p='4'>
        <Navbar />
      </Box>
      <Box as='main' flex={1} p='4'>
        {children}
      </Box>
      <Flex
        as='footer'
        bg='linear-gradient(to bottom, transparent, gray)'
        align='center'
        justify='center'
        py={4}
      >
        <Text>Alice Premium Products - Copyright 2022</Text>
      </Flex>
    </Flex>
  )
}
