import { Button, Flex } from '@chakra-ui/react'
import {memo, useContext} from 'react'
import { IPost, context } from '../../types/type'
import { Context } from '../../helpers/context'

interface props {
    item:IPost
}
function ItemButtons({item}:props):JSX.Element {
  const {remove,update} = useContext<context>(Context);
  return (
    <Flex w='90%'
       justifyContent='space-between'
       alignItems='center' m='10px auto'>
        <Button color='white'
         colorScheme='red'
         onClick={remove(item._id)}>
            delete
        </Button>
        <Button color='white'
         colorScheme='blue'
         onClick={update(item)}>
            update
        </Button>
      </Flex>
  )
}

export default memo(ItemButtons);