import { Box, Flex, Text } from '@chakra-ui/react';
import {memo, useMemo} from 'react'
import { IPost } from '../../../types/type';
import ItemButtons from '../../buttons/ItemButtons';


interface props {
    key:string,
    id:string,
    description:string,
    title:string,
    status:string,
} 

function TodoCard({description,status,title,id}:props):JSX.Element {
  const memoTodo:IPost = useMemo(()=>({
  _id:id,description,status,title}),[]);
  return (
    <Box
      m='80px auto'
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
      <ItemButtons
       item={memoTodo}
      />
    </Box>
  );
};

export default memo(TodoCard);