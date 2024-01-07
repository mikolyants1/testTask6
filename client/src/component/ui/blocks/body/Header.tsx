import { Box, Flex, Text } from '@chakra-ui/react';
import { memo } from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { IPost } from '../../../types/type';

function Header():JSX.Element {
 const path:string = window.location.pathname;
 const navigate:NavigateFunction = useNavigate();

 const nav = ():void => {
  const state:Omit<IPost,"_id"> = {
    description:"",
    title:"",
    status:""
  };
  path.endsWith('/')
  ? navigate('/add',{state})
  : navigate('/');
 };

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
      <Box
       onClick={nav}
       textAlign="center"
       w='100%' minW={100}>
        <Text color="white"
         fontSize={20}>
         {path.endsWith('/add')
          ? "back to main"
          : path.endsWith('/')
          ? 'add new todo'
          : "back to main"}
        </Text>
      </Box>
    </Flex>
  )
}

export default memo(Header);