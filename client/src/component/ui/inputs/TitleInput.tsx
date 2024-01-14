import { Box, Input } from '@chakra-ui/react';
import {memo} from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Control, IPost } from '../../types/type';
import { FlexInputBlock } from '../../style/style';

function TitleInput():JSX.Element {
 const {control} = useFormContext<IPost>();
  return (
     <FlexInputBlock>
        <Box w={40}
         textAlign='center'
         color='white'
         fontSize={20}>
            Title
        </Box>
        <Controller
         name='title'
         control={control}
         render={({field}):JSX.Element=>{
          const {value,onChange,name}:Control<'title'> = field;
          return (
            <Input
             w='70%'
             bg='rgb(200,200,200)'
             name={name}
             value={value}
             onChange={onChange}
            />
          )}}
        />
     </FlexInputBlock>
  )
}

export default memo(TitleInput);