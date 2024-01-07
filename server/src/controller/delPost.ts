import { Request, Response } from "express";
import { IPost, Null } from "../type.js";
import { Post } from "../mongo.js";

export async function delPost(req:Request,res:Response):Promise<void>{
    const id:string = req.params.id;
    const posts:IPost[] = await Post.find();
    const idx:number = posts.findIndex((i:IPost)=>i._id == id);
    if (idx == -1){
      res.status(400).json({
        mess:"post not found"
      });
      return;
    };
    await Post.findByIdAndDelete(id);
    const newPosts:IPost[] = posts
    .filter((i:IPost)=>i._id!==id);
    res.status(200).json(newPosts);
}