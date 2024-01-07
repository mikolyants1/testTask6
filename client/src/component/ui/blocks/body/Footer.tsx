import { Box } from '@chakra-ui/react'
import {memo} from 'react'

function Footer():JSX.Element {
  return (
    <Box
     w="100%"
     h='60px'
     bg="rgb(50,50,50)"
    />
  )
}

export default memo(Footer)