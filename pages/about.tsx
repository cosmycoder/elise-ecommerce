import { Flex, Text, Stack, Box, IconButton } from '@chakra-ui/react'
import { Navbar } from '../src/components/NavBar'
import { ScrollToTop } from '../src/components/ScrollToTop'
import { goToPageOutsideOfNavbar } from '../src/helpers/routeFunction'
import { StyledBsShop } from '../src/components/StyledBsShop'

export default function Index() {
  return (
    <Flex direction='column' minH='100vh' bg='gray.50'>
      <Box as='header' bg='linear-gradient(to top, transparent, #d1d1d1)' color='white' p='4'>
        <Navbar />
      </Box>
      <Flex flex='auto'>
        <Flex
          rounded={'xl'}
          flex='auto'
          justifyContent={'center'}
          flexDir={'column'}
          p='4'
          m='4'
          bgColor='white'
          shadow={'2xl'}
        >
          <IconButton
            as={StyledBsShop}
            aria-label='shop icon/button that takes you to homepage'
            color='darkorange'
            w={['3rem', '10rem', '20rem']}
            h={['2rem', '3rem', '4rem']}
            mb='1rem'
            mx='auto'
            variant={'link'}
            onClick={() => goToPageOutsideOfNavbar()}
            _hover={{ cursor: 'pointer' }}
          />
          <Stack w='75%' mx='auto'>
            <Text fontSize={['xl', '2xl', '3xl']} fontWeight='600' textAlign={'center'}>
              <Text color={'orange'} as='span' fontWeight={'800'}>
                At Elise
              </Text>
              , our goal is to provide our customers with the best online shopping experience
              possible. We offer a wide range of high-quality products at competitive prices, and
              our team is dedicated to providing excellent customer service.{' '}
            </Text>
            <Text fontSize={['xl', '2xl', '3xl']} fontWeight='600' textAlign={'center'}>
              We believe in the importance of sustainability and ethical practices, and we strive to
              source our products from responsible and environmentally-friendly sources. We also
              offer a variety of eco-friendly and sustainable products for our customers who are
              looking to make more sustainable choices in their everyday lives.
            </Text>
            <Text fontSize={['xl', '2xl', '3xl']} fontWeight='600' textAlign={'center'}>
              At Elise, we are constantly working to improve and evolve, and we are always looking
              for ways to better serve our customers. We thank you for choosing to shop with us, and
              we look forward to continuing to provide you with the best possible online shopping
              experience.
            </Text>
          </Stack>
        </Flex>
      </Flex>
      <Box
        as='footer'
        bg='linear-gradient(to bottom, transparent, #d1d1d1)'
        textAlign={'center'}
        py={4}
      >
        <Text fontWeight={'600'}>Elise - 2022</Text>
      </Box>
      <ScrollToTop />
    </Flex>
  )
}
