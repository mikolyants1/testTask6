import { Box, Input } from '@chakra-ui/react';
import {memo} from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Control } from '../../types/type';
import { FlexInputBlock } from '../../style/style';

function StatusInput():JSX.Element {
    const {control} = useFormContext();
  return (
    <FlexInputBlock>
      <Box w={40}
       textAlign='center'
       color='white'
       fontSize={20}>
          Status
      </Box>
      <Controller
       name='status'
       control={control}
       render={({field}):JSX.Element=>{
        const {value,onChange,name}:Control<'status'> = field;
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

export default memo(StatusInput)