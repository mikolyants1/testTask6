import { Box, Flex, Text } from '@chakra-ui/react';
import {memo} from 'react'

interface props {
    status:string
}
function StatusCard({status}:props):JSX.Element {
  return (
    <Flex w='90%'
       justifyContent='end'>
        <Box fontSize={23}>
          <Text as='span'>
             status:{" "}
          </Text>
          <Text as='span'
           color='red'
           fontWeight='bold'>
            {status}
          </Text>
        </Box>
      </Flex>
  )
}

export default memo(StatusCard);