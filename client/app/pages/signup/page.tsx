"use client";
import Header from "@/app/components/common/Header";
import CustomForm from "@/app/components/custom/customForm/CustomForm";
import FullPageLoader from "@/app/components/loader/FullPageLoader";
import Api from "@/app/constants/api";
import signupFormSchema from "@/app/constants/signupForm";
import axios from "axios";
import isAxiosError from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const submitForm = async (formvalues: any) => {
    console.log("the Form values are ", formvalues);
    try {
      setLoading(true);
      console.log("The api is ", Api.signup)
      const response = await axios.post(Api.signup, {
        name: formvalues.name,
        password: formvalues.password,
        email: formvalues.emailId,
      });
      if (response.status === 201) {
        signIn("credentials", {
          email: formvalues.emailId,
          password: formvalues.password,
          redirect: false,
        });
        Swal.fire("Your account Created successfully!", "", "success").then(()=>{
          router.push('/pages/dashboard')
        })

      }
    } catch (err: any) {
        Swal.fire("Unexpected error occured", "", "error");
        console.log("The error is ", err);
    }finally{
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
        <FullPageLoader loading={loading}/>
      <div className="w-full h-screen flex justify-center items-center bg-linear-to-b from-sky-100 to-white">
        <div className="w-xl">
          <CustomForm
            schema={signupFormSchema}
            submitText="Sign Up"
            heading="Sign Up for MyNotes"
            onSubmitHandler={submitForm}
          />
        </div>
      </div>
    </div>
  );
}
