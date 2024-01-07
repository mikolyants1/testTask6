import { Request, Response } from "express";
import { IPost } from "../type.js";
import { Post } from "../mongo.js";


export async function getPosts(req:Request,res:Response):Promise<void>{
    const posts:IPost[] = await Post.find();
    if (!posts){
      res.status(400).json({
         mess:"posts not found"
      });
      return;
    };
    res.status(200).json(posts);
}