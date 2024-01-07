import { QueryClient, UseMutationResult, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getTodos } from "../../helpers/query/getTodos"
import { IPost, context, query } from "../../types/type"
import delTodo from "../../helpers/query/delTodo";
import { NavigateFunction, useNavigate } from "react-router-dom";
import Loader from "../../ui/blocks/load/Loader";
import Error from "../../ui/blocks/load/Error";
import { Flex } from "@chakra-ui/react";
import TodoCard from "../../ui/blocks/cards/ItemCard";
import { useCallback } from "react";
import { Context } from "../../helpers/context";

function Main():JSX.Element {
 const navigate:NavigateFunction = useNavigate();
 const {isError,isLoading,data}:query = useQuery({
 queryKey:["todoList"],queryFn:getTodos})

 const {invalidateQueries}:QueryClient = useQueryClient();

 const {mutate:del}:UseMutationResult<any,IPost[],string> = useMutation({
  mutationFn:(id:string)=>delTodo(id),
  onSuccess:()=>invalidateQueries({queryKey:['todoList']})
 });
 const removeTodo = (id:string) => ():void=> {
   del(id);
 }
 const chanTodo = useCallback((item:IPost) => ():void => {
    const {_id,...body}:IPost = item;
    navigate(`/${_id}`,{state:body});
 },[]);
 const state:context = {
  remove:removeTodo,
  update:chanTodo
 }
 if (isLoading) return <Loader />;
 if (isError) return <Error />;
console.log(data)
  return (
    <Context.Provider value={state}>
      <Flex w='100%'
       justifyContent='center'
       flexWrap='wrap'
       minW={400}
       columnGap={3}
       rowGap={3}>
       {Array.isArray(data)&&
        data.map((item:IPost):JSX.Element=>{
         const {_id,description,title,status}:IPost = item;
         return (
          <TodoCard
           key={_id}
           id={_id}
           title={title}
           status={status}
           description={description}
          />
        )})}
      </Flex>
    </Context.Provider>
  )
}

export default Main