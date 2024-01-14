import { Box } from '@chakra-ui/react'
import {memo} from 'react'

interface props {
    description:string
}
function DescCard({description}:props):JSX.Element{
  return (
    <Box w='90%'
      borderTop='1px solid white'
      borderBottom='1px solid white'
      m='10px auto' minH={100}
      fontSize={20}>
      {description}
    </Box>
  )
}

export default memo(DescCard)