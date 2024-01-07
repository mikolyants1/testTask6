import axios, { AxiosResponse } from "axios";
import { IPost } from "../../types/type";

export default async (body:Omit<IPost,"_id">):Promise<IPost[]> => {
    const res:AxiosResponse<IPost[]> = await axios
    .post(`http://localhost:5000/posts`,body);
    const data:IPost[] = res.data;
    return data;
   };