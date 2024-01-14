import { Box, Text } from '@chakra-ui/react'
import {memo} from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { IPost } from '../../../types/type';

function NavLink():JSX.Element {
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
  )
}

export default memo(NavLink)