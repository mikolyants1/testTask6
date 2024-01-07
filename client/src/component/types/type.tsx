import { ControllerRenderProps, FieldValues } from "react-hook-form";

export interface IPost {
    _id:string,
    title:string,
    status:string,
    description:string
}

export interface query{
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

export interface Iid {
  state:state
}

export type Control<T extends string> = ControllerRenderProps<FieldValues,T>;