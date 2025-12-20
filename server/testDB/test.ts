import {prisma} from "../lib/prisma"

const  main = async()=>{
    const user = await prisma.user.create({
        data:{
            name:"Root",
            email:"root@gmail.com",
            password:"123456"
        }
    })

    console.log("User created succcessfully", user);
}

main();