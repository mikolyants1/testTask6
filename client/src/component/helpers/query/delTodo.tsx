import axios, { AxiosResponse } from "axios";
import { IPost } from "../../types/type";

export default async (id:string) => {
    const res:AxiosResponse<IPost[]> = await axios
    .delete(`http://localhost:5000/posts/${id}`);
    const data:IPost[] = res.data;
    return data;
   };