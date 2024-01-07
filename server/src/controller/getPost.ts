import { Request, Response } from "express";
import { IPost, Null } from "../type.js";
import { Post } from "../mongo.js";


export async function getPost(req:Request,res:Response):Promise<void>{
    const id:string = req.params.id;
    const post:Null<IPost> = await Post.findById(id);
    if (!post){
      res.status(400).json({
        mess:"post not found"
      });
      return;
    };
    res.status(200).json(post);
}