import { QueryClient, UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import { NavigateFunction, useLocation, useNavigate, useParams } from "react-router-dom";
import addTodo from "../../helpers/query/addTodo";
import chanTodo from "../../helpers/query/chanTodo";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import TitleInput from "../../ui/inputs/TitleInput";
import StatusInput from "../../ui/inputs/StatusInput";
import DescInput from "../../ui/inputs/DescInput";
import { FlexBlock } from "../../style/style";
import { useCallback } from "react";
import { IPost, Iid, putState, state } from "../../types/type";
import InputButton from "../../ui/buttons/InputButton";
import PersonWrapper from "../../ui/blocks/wrappers/PersonWrapper";

function Person():JSX.Element {
 const id:string = `${useParams().id}`;
 const {state}:Iid = useLocation();
 const navigate:NavigateFunction = useNavigate();
 const {invalidateQueries}:QueryClient = useQueryClient();
 const methods = useForm<IPost>({
  defaultValues:{
    title:state.title,
    status:state.status,
    description:state.description
    }
 });
 const {mutate:add}:UseMutationResult<
  unknown,IPost[],state> = useMutation({
  mutationFn:(body:state)=>addTodo(body),
  onSuccess:()=>invalidateQueries({queryKey:['todos']})
 });
 const {mutate:chan}:UseMutationResult<
  unknown,IPost[],putState> = useMutation({
  mutationFn:(body:putState)=>chanTodo(body),
  onSuccess:()=>invalidateQueries({queryKey:['todos']})
 });

 const submit:SubmitHandler<state> = useCallback((data):void => {
   if (id == 'add') add(data);
   else chan({_id:id,...data});
   navigate('/');
 },[]);
    
  return (
    <FormProvider {...methods}>
      <PersonWrapper>
        <FlexBlock>
          <TitleInput />
          <StatusInput />
        </FlexBlock>
        <DescInput />
        <InputButton
         id={id}
         submit={submit}
        />
      </PersonWrapper>
    </FormProvider>
  );
};

export default Person