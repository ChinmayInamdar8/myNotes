import express, {Request, Response} from "express";
import cors from "cors";
import authRouter from "./auth/auth"

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (req:Request, res:Response)=>{
    return res.json({status:200, message:"Health is fine"});
})

// routes with router
app.use('/auth', authRouter);

app.listen(3001, ()=>{
    console.log("The sever is running on http://localhost:3001");
})