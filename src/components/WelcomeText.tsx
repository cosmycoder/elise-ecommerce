import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import TextTransition, { presets } from 'react-text-transition'
import { texts } from '../data/texts'
import { useTextIndex } from '../hooks/useTextIndex'

function WelcomeText() {
  const index = useTextIndex()
  return (
    <Flex fontSize={['3xl', '5xl']} fontFamily='ggsansmedium' fontWeight='bold' zIndex='2'>
      {/* {`Welcome ${user ? user.name + '!' : 'friend!'}`}*/}
      <Text bgGradient={'linear(to-br, #8A2387,#E94057,darkorange)'} bgClip={'text'}>
        Welcome&nbsp;
      </Text>
      <TextTransition
        style={{ color: 'darkorange' }}
        inline
        springConfig={presets.wobbly}
        direction='up'
      >
        {texts[index % texts.length]}
      </TextTransition>
      <Text color='#E94057'>!</Text>
    </Flex>
  )
}

export default WelcomeText
