import { Button, Flex, Text, Link, Stack, Icon } from '@chakra-ui/react'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
  return (
    <Flex as='nav' align='center' justify='space-between' wrap='wrap'>
      <Text fontSize={'4xl'} fontWeight='bold' color='white'>
        Elise Premium Products
      </Text>

      <Stack direction='row' align='center' spacing={5}>
        <Link href='/'>
          <Button variant='ghost'>Home</Button>
        </Link>
        <Link href='/shopping-cart'>
          <Button variant='ghost'>Shopping Cart</Button>
        </Link>
        <Link href='/about'>
          <Button variant='ghost'>About</Button>
        </Link>
      </Stack>
    </Flex>
  )
}
