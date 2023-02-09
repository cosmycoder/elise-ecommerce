import { Flex, Input, Text } from '@chakra-ui/react'

export function SearchBar({
  debouncedFunction,
  scrollRef,
}: {
  scrollRef: React.LegacyRef<HTMLDivElement>
  debouncedFunction: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <Flex justifyContent={'center'} mt="1rem" pt="2rem" mb="3rem" mx="auto" flexDirection={'column'} ref={scrollRef}>
      <Text fontSize="2xl" mb={'1rem'} textAlign={'center'}>
        Search
      </Text>
      <Input
        alignSelf={'center'}
        w="200px"
        textAlign={'center'}
        onChange={(e) => debouncedFunction(e)}
        border={'solid darkorange 2px'}
        placeholder="Search for products"
        boxShadow={'0 0 0 2px #edf2f7'}
        _focus={{ outline: 'none', border: 'solid orange 2px', boxShadow: '0 0 0 2px #edf2f7' }}
      />
    </Flex>
  )
}
