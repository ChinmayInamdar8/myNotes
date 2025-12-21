'use client'
import Header from "@/app/components/common/Header";
import CustomForm from "@/app/components/custom/customForm/CustomForm";
import signupFormSchema from "@/app/constants/signupForm";

export default function Login() {

    const submitForm = (formvalues:any)=>{
        console.log("the Form values are ", formvalues)
    }

  return (
    <div>
      <Header />
      <div className="w-full h-screen flex justify-center items-center bg-linear-to-b from-sky-100 to-white">
        <div className="w-xl">
          <CustomForm schema={signupFormSchema} submitText="Login" heading="Login for MyNotes" onSubmitHandler={submitForm}/>
        </div>
      </div>
    </div>
  );
}
