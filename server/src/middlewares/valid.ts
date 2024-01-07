import { NextFunction, Request, Response } from "express";
import { Result, ValidationError, body, validationResult } from "express-validator";

export const valid = [
    body("title").notEmpty().isLength({min:1,max:20}),
    body("status").notEmpty().isLength({min:1,max:10}),
    body("description").notEmpty().isLength({min:1,max:200})
]

export function Validator(req:Request,res:Response,next:NextFunction):void{
      const error:Result<ValidationError> = validationResult(req);
      if (!error.isEmpty()){
        res.status(400).json({
            err:error.array()
        });
        return;
      };
    next();
}