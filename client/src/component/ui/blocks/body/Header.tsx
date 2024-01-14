import { Box, Flex, Text } from '@chakra-ui/react';
import { memo } from 'react'
import NavLink from '../links/NavLink';

function Header():JSX.Element {
  return (
    <Flex
     justifyContent="space-between"
     alignItems="center" w="100%"
     h='60px' bg="rgb(50,50,50)">
      <Box textAlign="center"
       w='100%' minW={100} />
      <Box textAlign="center"
       w='100%' minW={100}>
        <Text fontSize={30}
         color='white'>
          Todo App 
        </Text>
      </Box>
      <NavLink />
    </Flex>
  )
}

export default memo(Header);