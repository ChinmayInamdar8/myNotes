import {useForm, SubmitHandler} from "react-hook-form";

interface BaseField {
  type: string;
  name: string;
  title: string;
  placeholder: string;
  required: boolean;
}

interface TextField extends BaseField{
  type : "text" | "password" | "number"
}

type CustomFormSchema = TextField;

interface CustomFormProps {
  schema : CustomFormSchema[];
  heading : string;
  submitText: string;
  onSubmitHandler:(data: Record<string, string>)=>void;
}

type formvalues = Record<string, string>;

export default function CustomForm({ schema, heading, submitText, onSubmitHandler }: CustomFormProps) {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<formvalues>()

    const onSubmit: SubmitHandler<formvalues> = (data) => onSubmitHandler(data);
  return (
    <section className="flex w-full justify-center items-center py-10 bg-slate-50 px-16 shadow-lg rounded-xl">
      <div className="w-full">
        <h1 className="text-2xl font-semibold text-center text-slate-600">{heading}</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-center gap-5">
          {schema.map((formField) => {
            switch (formField.type) {
              case "text":
              case "password":
              case "number":
                return (
                  <div key={formField.name} className="flex flex-col justify-center items-start w-full gap-3">
                    <label htmlFor={formField.name}>{formField.title}{formField.required ? <span className="text-red-600">*</span>:""}</label>
                    <input
                      type={formField.type}
                      id={formField.name}
                      placeholder={formField.placeholder}
                      className="py-1 px-5 border border-slate-500 rounded outline-none w-full"
                       {...register(formField.name, {required:formField.required})}
                    />
                    {errors[formField.name] && <span className="text-red-600 text-sm -mt-2.5">This field is required</span>}
                  </div>
                );
            }
          })}
          <button type="submit" className="py-1 px-4 bg-sky-600 rounded text-white font-medium cursor-pointer shadow hover:shadow-xl">{submitText}</button>
        </form>
      </div>
    </section>
  );
}
