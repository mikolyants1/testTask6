import { Box } from '@chakra-ui/react'
import {memo} from 'react'
import { child } from '../../../types/type'


function ItemWrapper({children}:child):JSX.Element {
  return (
    <Box
      m='80px auto'
      color='white'
      w={450} h={250}
      minH={30} bg='rgb(60,60,60)'
      boxSizing="border-box"
      borderRadius={20}
      opacity={0.8}>
      {children}
    </Box>
  )
}

export default memo(ItemWrapper)