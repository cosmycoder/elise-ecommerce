import { Button, Flex, Text, Link, Stack } from '@chakra-ui/react'

export const Navbar = () => {
  return (
    <Flex as='nav' align='center' justify='space-between' wrap='wrap'>
      <Text fontSize={'4xl'} fontWeight='bold' color='white'>
        Alice Premium Products
      </Text>

      <Stack direction='row' align='center' spacing={5}>
        <Button as={Link} to='/' variant='ghost'>
          Home
        </Button>
        <Button as={Link} to='/products' variant='ghost'>
          Products
        </Button>
        <Button as={Link} to='/my-account' variant='ghost'>
          My Account
        </Button>
        <Button as={Link} to='/about' variant='ghost'>
          About
        </Button>
      </Stack>
    </Flex>
  )
}
