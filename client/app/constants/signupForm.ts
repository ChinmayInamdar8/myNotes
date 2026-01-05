// change the type of loginFormSchema
interface SignupFormSchema {
    type: "text" | "password" | "number",
    name:string,
    title:string,
    placeholder:string,
    required:boolean
}
const signupFormSchema:SignupFormSchema[] = [
    {
        type:"text",
        name:"name",
        title:"Full Name",
        placeholder:"Jon Doe",
        required:true
    },
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

export default signupFormSchema