import { Flex, Text, Stack, chakra, Box } from '@chakra-ui/react'
import { faShop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navbar } from '../src/components/NavBar'

export default function Index() {
  const Icon = chakra(FontAwesomeIcon)

  return (
    <Flex direction='column' minH='100vh' bg='gray.50'>
      <Box as='header' bg='linear-gradient(to top, transparent, gray)' color='white' p='4'>
        <Navbar />
      </Box>
      <Flex my='auto'>
        <Flex justifyContent='center'>
          <Stack w='75%'>
            <Icon icon={faShop} color='#6495ED' size='2x' mb='1rem' />
            <Text fontSize='3xl' textAlign={'center'}>
              <Text color={'cornflowerblue'} as='span' fontWeight={'800'}>
                At Elise
              </Text>
              , our goal is to provide our customers with the best online shopping experience
              possible. We offer a wide range of high-quality products at competitive prices, and
              our team is dedicated to providing excellent customer service.{' '}
            </Text>
            <Text fontSize='3xl' textAlign={'center'}>
              We believe in the importance of sustainability and ethical practices, and we strive to
              source our products from responsible and environmentally-friendly sources. We also
              offer a variety of eco-friendly and sustainable products for our customers who are
              looking to make more sustainable choices in their everyday lives.
            </Text>
            <Text fontSize='3xl' textAlign={'center'}>
              At Elise, we are constantly working to improve and evolve, and we are always looking
              for ways to better serve our customers. We thank you for choosing to shop with us, and
              we look forward to continuing to provide you with the best possible online shopping
              experience.
            </Text>
            <Text textAlign={'center'} fontWeight='900' my='auto'>
              ☯
            </Text>
          </Stack>
        </Flex>
      </Flex>
      <Flex
        as='footer'
        bg='linear-gradient(to bottom, transparent, gray)'
        align='center'
        justify='center'
        py={4}
      >
        <Text fontWeight={'600'}>Elise - 2022</Text>
      </Flex>
    </Flex>
  )
}
