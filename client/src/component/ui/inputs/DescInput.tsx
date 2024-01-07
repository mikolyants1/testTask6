import { Box, Flex, Textarea } from '@chakra-ui/react';
import {memo} from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Control, IPost } from '../../types/type';

function DescInput():JSX.Element {
 const {control} = useFormContext<IPost>();
  return (
    <Flex
     margin='auto' w='90%'
     justifyContent='center'
     alignItems='center'
     flexDirection="column"
     minH='50%'>
      <Box fontSize={20}
       color="white" mb={5}>
         Description
      </Box>
      <Controller
       name='description'
       control={control}
       render={({field}):JSX.Element=>{
        const {value,name,onChange}:Control<'description'> = field;
         return (
            <Textarea
             w='100%'
             minH={250}
             bg='rgb(200,200,200)'
             value={value}
             name={name}
             onChange={onChange}
            />
         )}}
       />
    </Flex>
  )
}

export default memo(DescInput);