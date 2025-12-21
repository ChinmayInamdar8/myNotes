// change the type of loginFormSchema
interface LoginFormSchema {
    type: "text" | "password" | "number",
    name:string,
    title:string,
    placeholder:string,
    required:boolean
}
const loginFormSchema:LoginFormSchema[] = [
    {
        type:"text",
        name:"emailId",
        title:"Email ID",
        placeholder:"jonDoe@gmail.com",
        required:true
    },
    {
        type:"password",
        name:"password",
        title:"Password",
        placeholder:"jon@123",
        required:true
    },
]

export default loginFormSchema