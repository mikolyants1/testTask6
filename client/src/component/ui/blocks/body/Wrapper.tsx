import { Grid } from "@chakra-ui/react"
import { memo } from "react"

interface props {
    children:JSX.Element[]
}
function Wrapper({children}:props):JSX.Element {
  return (
    <Grid w='100%' h='100%'
     minH='750px' minW={400}
     gridTemplateRows='80px 1fr 60px'
     background='linear-gradient(40deg,#adeeee,#85d3f1,#48b3de)'>
       {children}
    </Grid>
  )
}

export default memo(Wrapper)