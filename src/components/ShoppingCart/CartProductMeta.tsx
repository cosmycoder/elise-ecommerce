import {
  Box,
  chakra,
  HStack,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  Tooltip,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGift } from '@fortawesome/free-solid-svg-icons'

export type CartProductMetaProps = {
  isGiftWrapping?: boolean
  name: string
  image: string
}

export const CartProductMeta = (props: CartProductMetaProps) => {
  const Icon = chakra(FontAwesomeIcon)
  const { isGiftWrapping = true, image, name } = props
  return (
    <Stack direction='row' spacing='5' width='full'>
      <Image
        rounded='lg'
        minW={['80px', '120px']}
        maxW={['80px', '120px']}
        h='120px'
        objectFit='contain'
        src={image}
        alt={name}
        draggable='false'
        loading='eager'
      />
      <Box pt='4'>
        <Stack spacing='0.5'>
          <Tooltip hasArrow label={name} placement='bottom'>
            <Text fontWeight='medium' noOfLines={2}>
              {name}
            </Text>
          </Tooltip>
        </Stack>
        {isGiftWrapping && (
          <HStack spacing='1' mt='3' color={mode('gray.600', 'gray.400')}>
            <Icon icon={faGift} boxSize='4' />
            <Link fontSize='sm' textDecoration='underline'>
              Add gift wrapping
            </Link>
          </HStack>
        )}
      </Box>
    </Stack>
  )
}
