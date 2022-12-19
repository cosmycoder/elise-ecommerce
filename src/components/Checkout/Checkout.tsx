import {
  Text,
  Flex,
  FormControl,
  RadioGroup,
  FormLabel,
  Radio,
  Input,
  Box,
  Stack,
  FormErrorMessage,
  Button,
} from '@chakra-ui/react'
import { Product } from '../../types/fakeApiTypes'

export const Checkout = () => {
  const cart = [
    {
      id: '1',
      name: 'Epic Sneakers',
      shortDescription: "Epic as hell, these are the best sneakers you'll ever see.",
      quantity: '3',
      price: '299$',
    },
  ]

  function calculateSubtotal(products: Product[]): number {
    // will calculate subtotal here
    return 500
  }

  function calculateShippingCost(
    products: Product[],
    zipCode: string,
    shippingMethod: string,
  ): number {
    // will calculate shipping cost here
    return 5
  }

  const calculateOrderTotal = (subtotal: number, shippingCost: number, discount: number) => {
    return subtotal + shippingCost - discount
  }

  return (
    <Flex direction='row'>
      <Box w='50%'>
        <FormControl>
          <FormLabel>Payment Options</FormLabel>
          <RadioGroup value='visa' defaultValue='visa'>
            <Radio value='visa' aria-label='Visa' />
            <Radio value='mastercard' aria-label='Mastercard' />
            <Radio value='paypal' aria-label='PayPal' />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel>Full Name</FormLabel>
          <Input placeholder='Your Full Name' />
        </FormControl>
        <FormControl>
          <FormLabel>Street Address</FormLabel>
          <Input placeholder='Your Street Address' />
        </FormControl>
        <FormControl>
          <FormLabel>Zip Code</FormLabel>
          <Input placeholder='Your Zip Code' />
        </FormControl>
        <FormControl>
          <FormLabel>City</FormLabel>
          <Input placeholder='Your City' />
        </FormControl>
        <FormControl>
          <FormLabel>Email Address</FormLabel>
          <Input placeholder='Your Email Address' />
        </FormControl>
        <FormControl>
          <FormLabel>Shipping Method</FormLabel>
          <RadioGroup value='standard' defaultValue='standard'>
            <Radio value='standard' aria-label='Standard Shipping' />
            <Radio value='express' aria-label='Express Shipping' />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel>Payment Information</FormLabel>
          <Input placeholder='Your Payment Information' />
        </FormControl>
        <FormControl>
          <FormLabel>Credit Card</FormLabel>
          <Input placeholder='Your Credit Card' />
        </FormControl>
      </Box>

      {/* second column */}

      <Box w='50%' bg='gray.50' p={4}>
        <Stack spacing={4}>
          <Box>
            <Text fontSize='xl' fontWeight='bold'>
              Products
            </Text>
          </Box>

          {/* TODO: will map over the products in the cart and display each one in a separate row */}

          {cart.map((product) => (
            <Box key={product.id} display='flex' alignItems='center' mb={4}>
              <Box
                width={40}
                height={40}
                bg='gray.100'
                borderRadius='full'
                mr={4}
                mb={2}
                flexShrink={0}
              />
              <Box flex='1'>
                <Text fontSize='md' fontWeight='bold'>
                  {product.name}
                </Text>
                <Text fontSize='sm' color='gray.600'>
                  {product.shortDescription}
                </Text>
              </Box>
              <Box>
                <Text fontSize='md' fontWeight='bold'>
                  {product.price}
                </Text>
                <Text fontSize='sm' color='gray.600'>
                  x {product.quantity}
                </Text>
              </Box>
            </Box>
          ))}

          <Box>
            <Text fontSize='xl' fontWeight='bold'>
              Subtotal
            </Text>
            <Text fontSize='md' fontWeight='bold'>
              {/* {calculateSubtotal(cart)} */}
            </Text>
          </Box>
          <Box>
            <Text fontSize='xl' fontWeight='bold'>
              Shipping cost
            </Text>
            <Text fontSize='md' fontWeight='bold'>
              {/* {calculateShippingCost(cart)} */}
            </Text>
          </Box>
          <Box>
            {/* isInvalid={!!error} */}
            <FormControl>
              <FormLabel htmlFor='discountCode'>Discount code</FormLabel>
              <Input id='discountCode' placeholder='Enter your discount code' />
              <FormErrorMessage></FormErrorMessage>
            </FormControl>
          </Box>
          <Box>
            <Text fontSize='xl' fontWeight='bold'>
              Order total
            </Text>
            <Text fontSize='md' fontWeight='bold'>
              {/* {calculateOrderTotal(cart, shippingCost, discount)} */}
            </Text>
          </Box>
          <Box>
            <Button colorScheme='#6495ED' size='lg' width='full'>
              Place order
            </Button>
          </Box>
        </Stack>
      </Box>
    </Flex>
  )
}
