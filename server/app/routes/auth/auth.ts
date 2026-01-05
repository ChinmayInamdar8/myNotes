import express, {Request, Response} from "express";
import { checkIfPasswordCorrect, checkIfUserPresent, createNewUser } from "../../helper/auth/authHelper";
import Constant from "../../helper/constants";

const router = express.Router();

router.get('/health', (req:Request, res:Response)=>{
    return res.json({status:200, message:"auth health is fine"});
})

router.post('/signup', async(req:Request, res:Response)=>{
    const {name, email, password} = req.body;

    if(!name || !email || !password){
        return res.status(400).json({status:400, message:Constant.general.data_not_present})
    }
    // task 1 check if user is present or not

    if(await checkIfUserPresent(email)){
        return res.status(409).json({status : 409, message : Constant.messages.user_present});
    }
    // task 3 if not create user into db, create token, set token in the cookie send 200 created

    const createduserEmail:string | null = await createNewUser({name, email, password});

    return res.status(201).json({status:201, messsage:Constant.messages.user_created, email:createduserEmail});
})

router.post('/login', async(req:Request, res:Response)=>{
    const {email, password} = req.body;

    console.log("THE epdpoint is coming here");

    if(!email || !password){
        return res.status(400).json({status:400, message:Constant.general.data_not_present})
    }

    const user = await checkIfUserPresent(email)

    if(!user){
        return res.status(404).json({status : 404, message : Constant.messages.user_not_present});
    }

    if(await checkIfPasswordCorrect({dbPassword:user.password, userPassword:password})){
            return res.status(200).json({status:200, message:Constant.messages.user_logged_in, email, id:user.id, name:user.name});
    }else{
        return res.status(401).json({status:401, message:Constant.messages.password_incorrect});
    }
})

export default router;