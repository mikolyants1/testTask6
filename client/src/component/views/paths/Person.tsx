import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query"
import { NavigateFunction, useLocation, useNavigate, useParams } from "react-router-dom";
import addTodo from "../../helpers/query/addTodo";
import chanTodo from "../../helpers/query/chanTodo";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Box ,Button,Flex} from "@chakra-ui/react";
import TitleInput from "../../ui/inputs/TitleInput";
import StatusInput from "../../ui/inputs/StatusInput";
import DescInput from "../../ui/inputs/DescInput";
import { FlexBlock } from "../../style/style";
import { memo } from "react";
import { Iid, putState, state } from "../../types/type";

function Person():JSX.Element {
 const id:string = String(useParams().id);
 const {state}:Iid = useLocation();
 const navigate:NavigateFunction = useNavigate();
 const {invalidateQueries}:QueryClient = useQueryClient();
 const methods = useForm({
  defaultValues:{
    title:state.title,
    status:state.status,
    description:state.description
    }
 });
 const {handleSubmit} = methods;

 const {mutate:add} = useMutation({
  mutationFn:(body:state)=>addTodo(body),
  onSuccess:()=>invalidateQueries({queryKey:['todos']})
 });
 const {mutate:chan} = useMutation({
  mutationFn:(body:putState)=>chanTodo(body),
  onSuccess:()=>invalidateQueries({queryKey:['todos']})
 });

 const submit:SubmitHandler<state> = (data):void => {
   if (id == 'add') add(data);
   else chan({_id:id,...data});
   navigate('/');
 };
    
  return (
    <FormProvider {...methods}>
      <Box 
        p='15px 0'
        m='80px auto'
        w='60%' minW={300}
        minH={370} bg='rgb(100,100,100)'
        boxSizing="border-box"
        borderRadius={20}
         opacity={0.8}>
        <FlexBlock>
          <TitleInput />
          <StatusInput />
        </FlexBlock>
        <DescInput />
        <Flex w='90%'
         m='20px auto'
         justifyContent='end'>
          <Button w={100}
           colorScheme="red"
           onClick={handleSubmit(submit)}>
            {id == 'add' ? "add" : "update"}
          </Button>
        </Flex>
      </Box>
    </FormProvider>
  );
};

export default memo(Person)