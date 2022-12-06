import { Button, Flex, Text, Link, Stack, Icon, chakra, HStack } from '@chakra-ui/react'
import { faShop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Navbar = () => {
  const Icon = chakra(FontAwesomeIcon)
  return (
    <Flex as='nav' align='center' justify='space-between' wrap='wrap'>
      <Flex flexDir={'row'} justifyContent='center' align={'center'}>
        <Icon icon={faShop} color='#6495ED' size='2x' />
        <Text fontSize={'4xl'} fontWeight='bold' color='#6495ED' ml='1rem'>
          Elise
        </Text>
      </Flex>

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
