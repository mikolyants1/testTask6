import {memo} from 'react'
import { child } from '../../../types/type'
import { Flex } from '@chakra-ui/react'



function MainWrapper({children}:child):JSX.Element {
  return (
    <Flex w='100%'
       justifyContent='center'
       flexWrap='wrap'
       minW={400}
       columnGap={3}
       rowGap={3}>
        {children}
    </Flex>
  )
}

export default memo(MainWrapper)