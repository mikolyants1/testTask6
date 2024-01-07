import express, { Router } from "express";
import { getTodos } from "../controller/getTodos.js";
import { Validator, valid } from "../middlewares/valid.js";
import { addTodo } from "../controller/addTodo.js";
import { delTodo } from "../controller/delTodo.js";
import { chanTodo } from "../controller/chanTodo.js";

const router:Router = express.Router();

router.put('/:id',valid,Validator,chanTodo);

router.delete('/:id',delTodo)

router.post('/',valid,Validator,addTodo);

router.get("/",getTodos);

export default router;