import { QueryClient, UseMutationResult, useMutation,
 useQuery, useQueryClient } from "@tanstack/react-query"
import { getTodos } from "../../helpers/query/getTodos"
import { IPost, context, datas} from "../../types/type"
import delTodo from "../../helpers/query/delTodo";
import { NavigateFunction, useNavigate } from "react-router-dom";
import Loader from "../../ui/blocks/load/Loader";
import Error from "../../ui/blocks/load/Error";
import TodoCard from "../../ui/blocks/cards/ItemCard";
import { Context } from "../../helpers/context";
import MainWrapper from "../../ui/blocks/wrappers/MainWrapper";

function Main():JSX.Element {
 const navigate:NavigateFunction = useNavigate();
 const {isError,isLoading,data}:datas = useQuery({
 queryKey:["todoList"],queryFn:getTodos})

 const {invalidateQueries}:QueryClient = useQueryClient();

 const {mutate:del}:UseMutationResult<
  unknown,IPost[],string> = useMutation({
  mutationFn:(id:string)=>delTodo(id),
  onSuccess:()=>invalidateQueries({queryKey:['todoList']})
 });
 const removeTodo = (id:string) => ():void=> {
   del(id);
 }
 const chanTodo = (item:IPost) => ():void => {
    const {_id,...body}:IPost = item;
    navigate(`/${_id}`,{state:body});
 };
 const state:context = {
  remove:removeTodo,
  update:chanTodo
 }
 if (isLoading) return <Loader />;
 if (isError) return <Error />;

  return (
    <Context.Provider value={state}>
      <MainWrapper>
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
      </MainWrapper>
    </Context.Provider>
  )
}

export default Main