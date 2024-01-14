import axios, { AxiosResponse } from "axios";
import { IPost } from "../../types/type";

export default async (obj:IPost):Promise<IPost[]> => {
    const {_id,...body}:IPost = obj;
    const res:AxiosResponse<IPost[]> = await axios
    .put(`http://localhost:5001/posts/${_id}`,body);
    const data:IPost[] = res.data;
    return data;
   };