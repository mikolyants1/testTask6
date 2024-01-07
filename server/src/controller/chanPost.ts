import { Request, Response } from "express";
import { IPost } from "../type.js";
import { Post } from "../mongo.js";


export async function chanPost(req:Request,res:Response):Promise<void>{
    if (!req.body){
        res.status(500).json({
          mess:'body not found'
        });
        return;
    };
    const id:string = req.params.id;
    const posts:IPost[] = await Post.find();
    const idx:number = posts.findIndex((i:IPost)=>i._id == id);
    if (idx == -1){
      res.status(400).json({
        mess:"post not found"
      });
      return;
    };
    const {status,description,title}:IPost = req.body;
    const newPosts = await Post.findByIdAndUpdate(id,
    {title,status,description},{new:true});
    res.status(200).json(newPosts);
}