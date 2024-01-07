import express, { Router } from "express";
import { getPosts } from "../controller/getPosts.js";
import { getPost } from "../controller/getPost.js";
import { Validator, valid } from "../middlewares/valid.js";
import { addTodo } from "../controller/addTodo.js";
import { delPost } from "../controller/delPost.js";
import { chanPost } from "../controller/chanPost.js";

const router:Router = express.Router();

router.put('/:id',valid,Validator,chanPost);

router.delete('/:id',delPost)

router.get("/:id",getPost);

router.post('/',valid,Validator,addTodo);

router.get("/",getPosts);

export default router;