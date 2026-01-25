"use client";
import Header from "@/app/components/common/Header";
import CustomForm from "@/app/components/custom/customForm/CustomForm";
import loginFormSchema from "@/app/constants/loginForm";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import FullPageLoader from "@/app/components/loader/FullPageLoader";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const submitForm = async (formvalues: any) => {
    console.log("the Form values are ", formvalues);
    try {
      setLoading(true);
      if (formvalues.emailId && formvalues.password) {
        console.log("HERE");
        const res = await signIn("credentials", {
          email: formvalues.emailId,
          password: formvalues.password,
          redirect: false,
        }, );
        console.log(res);
        if(res?.status===200){
          Swal.fire("Your are logged in successfully!", "", "success").then(()=>{
            router.push('/pages/dashboard')
          })
        }else{
          Swal.fire("Invalid Credentials", "", "error");
        }
        setLoading(false);
      }
    } catch (error) {
      console.log("The error is ", error)
      setLoading(false);
    }
  };

  const navigateToSignup = () => {
    router.push("/pages/signup");
  };

  return (
    <div>
      <Header />
      <FullPageLoader loading={loading}/>
      <div className="w-full h-screen flex justify-center items-center bg-linear-to-b from-sky-100 to-white">
        <div className="w-xl">
          <CustomForm
            schema={loginFormSchema}
            submitText="Login"
            heading="Login for MyNotes"
            onSubmitHandler={submitForm}
          />
          <p className="text-center mt-4">
            Don't have account ? signup{" "}
            <span
              className="cursor-pointer text-sky-600 underline "
              onClick={navigateToSignup}
            >
              here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
