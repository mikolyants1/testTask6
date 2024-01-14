import { Button, Flex } from '@chakra-ui/react';
import {memo} from 'react'
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { IPost, state } from '../../types/type';

interface props {
    submit:SubmitHandler<state>,
    id:string
}
function InputButton({id,submit}:props):JSX.Element {
  const {handleSubmit} = useFormContext<IPost>();
  return (
    <Flex w='90%'
     m='20px auto'
     justifyContent='end'>
      <Button w={100}
       colorScheme="red"
       onClick={handleSubmit(submit)}>
       {id == 'add' ? "add" : "update"}
      </Button>
    </Flex>
  )
}

export default memo(InputButton);