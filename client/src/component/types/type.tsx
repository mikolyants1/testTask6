import { ControllerRenderProps, FieldValues } from "react-hook-form";

export interface IPost {
    _id:string,
    title:string,
    status:string,
    description:string
}

export interface datas {
  isError:boolean,
  isLoading:boolean,
  data:unknown
}

export interface state {
  title:string,
  status:string,
  description:string
}
export interface putState extends state {
_id:string
}

export interface child {
  children:JSX.Element[]|false
}
export interface Iid {
  state:state
}
export interface context {
  remove:(id:string)=>()=>void,
  update:(item:IPost)=>()=>void
}

export type Control<T extends string> = ControllerRenderProps<FieldValues,T>;