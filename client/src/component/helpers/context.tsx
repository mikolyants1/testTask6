import { createContext } from "react";
import { context } from "../types/type";

export const Context = createContext<context>({
 update:()=>()=>{},
 remove:()=>()=>{}
})