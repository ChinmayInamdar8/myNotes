import {prisma} from "../../../lib/prisma"
import bcrypt from "bcrypt"

interface User{
    name:string,
    email:string,
    password:string
}

interface CheckPassword{
    dbPassword:string,
    userPassword:string
}

export const checkIfUserPresent = async(email: string)=>{
    try{
        const user = await prisma.user.findFirst({
        where:{
            email:email
        }
    })

    if(user) return user;
    return false;
    }catch(error){
        console.log("the error in checkIfUserPresent is ", error);
        return new Error("Data base error while filding user");
    }
}

export const createNewUser = async(user:User)=>{
    // encrypt the password
    try{
        const encryptedPassword = await bcrypt.hash(user.password, 10);
    const createdUser = await prisma.user.create({
        data:{
            ...user,
            password:encryptedPassword
        }
    }) 
    if(createdUser){
        return createdUser.email;
    }else{
        return;
    }
    }catch(error){
        console.log("the error in encryptedPassword is ", error);
        return new Error("Database error while creating error");
    }
}

export const checkIfPasswordCorrect = async (passwords:CheckPassword)=>{
//  Note :- dbPassword is the encrypted string from the database field password
//  Note :- userPassword is the password string from the user sent in the payload
    return await bcrypt.compare(passwords.userPassword, passwords.dbPassword);
}