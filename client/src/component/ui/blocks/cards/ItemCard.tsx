import {memo, useMemo} from 'react'
import { IPost } from '../../../types/type';
import ItemButtons from '../../buttons/ItemButtons';
import StatusCard from './item/StatusCard';
import TitleCard from './item/TitleCard';
import ItemWrapper from '../wrappers/ItemWrapper';
import DescCard from './item/DescCard';


interface props {
    key:string,
    id:string,
    description:string,
    title:string,
    status:string,
} 

function TodoCard({description,status,title,id}:props):JSX.Element {
  const memoTodo:IPost = useMemo(()=>({
  _id:id,description,status,title}),[]);
  return (
    <ItemWrapper>
      <TitleCard
       title={title}
       />
      <StatusCard
        status={status}
       />
      <DescCard
       description={description}
      />
      <ItemButtons
       item={memoTodo}
      />
    </ItemWrapper>
  );
};

export default memo(TodoCard);