import {memo} from 'react'
import { child } from '../../../types/type'
import { Box } from '@chakra-ui/react'

function PersonWrapper({children}:child):JSX.Element {
  return (
    <Box p='15px 0'
      m='80px auto'
      w='60%' minW={300}
      minH={370} bg='rgb(100,100,100)'
      boxSizing="border-box"
      borderRadius={20}
      opacity={0.8}>
      {children}
    </Box>
  )
}

export default memo(PersonWrapper)