import axios, { AxiosResponse } from "axios"
import { IPost } from "../../types/type";

export async function getTodos ():Promise<IPost[]>{
 const res:AxiosResponse<IPost[]> = await axios
 .get("http://localhost:5000/posts");
 const data:IPost[] = res.data;
 return data;
};
