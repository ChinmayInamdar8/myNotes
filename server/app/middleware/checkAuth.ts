import { Request, Response, NextFunction } from "express";
import  jwt  from "jsonwebtoken";
export default function checkAuth(req:Request, res:Response, next:NextFunction){
    const Authorization = req.header('Authorization');
    if(!Authorization){
        res.status(401).json({messsage:'You are not allowed to access'});
    }
}