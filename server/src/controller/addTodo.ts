import { Request, Response } from "express";
import { Post } from "../mongo.js";


export async function addTodo(req:Request,res:Response):Promise<void>{
    if (!req.body){
        res.status(500).json({
          mess:'body not found'
        });
      return;
    };
    const newPost = new Post(req.body);
    await newPost.save();
    res.status(200).json(newPost);
    
}