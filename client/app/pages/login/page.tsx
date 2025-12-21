'use client'
import Header from "@/app/components/common/Header";
import CustomForm from "@/app/components/custom/customForm/CustomForm";
import loginFormSchema from "@/app/constants/loginForm";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();

    const submitForm = (formvalues:any)=>{
        console.log("the Form values are ", formvalues)
    }

    const navigateToSignup = ()=>{
        router.push('/pages/signup');
    }

  return (
    <div>
      <Header />
      <div className="w-full h-screen flex justify-center items-center bg-linear-to-b from-sky-100 to-white">
        <div className="w-xl">
          <CustomForm schema={loginFormSchema} submitText="Login" heading="Login for MyNotes" onSubmitHandler={submitForm}/>
          <p className="text-center mt-4">Don't have account ? signup <span className="cursor-pointer text-sky-600 underline " onClick={navigateToSignup}>here</span></p>
        </div>
      </div>
    </div>
  );
}
