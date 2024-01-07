import { Box, Button, Flex, Text } from '@chakra-ui/react';
import {memo} from 'react'


interface props {
    key:string,
    description:string,
    title:string,
    status:string,
    update:()=>void,
    remove:()=>void,
} 

function TodoCard({
    description,
    status,
    title,
    update,
    remove
}:props):JSX.Element {
  return (
    <Box m='80px auto'
    color='white'
      w={450} h={250}
      minH={30} bg='rgb(60,60,60)'
      boxSizing="border-box"
      borderRadius={20}
      opacity={0.8}>
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
      <Box w='90%'
       borderTop='1px solid white'
       borderBottom='1px solid white'
       m='10px auto' minH={100}
       fontSize={20}>
        {description}
      </Box>
      <Flex w='90%'
       justifyContent='space-between'
       alignItems='center' m='10px auto'>
        <Button color='white'
         colorScheme='red'
         onClick={remove}>
            delete
        </Button>
        <Button color='white'
         colorScheme='blue'
         onClick={update}>
            update
        </Button>
      </Flex>
    </Box>
  )
}

export default memo(TodoCard)