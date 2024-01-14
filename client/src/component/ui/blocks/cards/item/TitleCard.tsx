import { Box, Flex, Text } from '@chakra-ui/react';
import {memo} from 'react'

interface props {
    title:string
}
function TitleCard({title}:props):JSX.Element {
  return (
    <Flex w='100%'
       justifyContent='center'
       alignItems='center'>
        <Box w='50%'
         textAlign='center'>
          <Text fontSize={28}>
           {title}
          </Text>
        </Box>
      </Flex>
  )
}

export default memo(TitleCard);