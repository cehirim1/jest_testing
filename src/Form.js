import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

//apply TDD here - test driven dev allows us to focus on user interaction first

const Form = () => {
  //returns an obj with properties that can be used on forms to determine the form  state
  //name, ref, onChange, onBlur
  const { register, control, handleSubmit, formState } = useForm();

  //desrtucture error obj
  const { errors } = formState;
  const onSubmit = (data) => {
    console.log("form submitted", data);

  };


  return (
    <div className="container">
      <h1>React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-control">
          <label htmlFor="fname">First Name: </label>
          <input
            type="text"
            id="fname"
            {...register("fname", {
              required: {
                value: true,
                message: "first name is rquired",
              },
            })}
            placeholder="fname"
          />
          <p className="err">{errors.fname?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="lname">Last Name: </label>
          <input
            type="text"
            id="lname"
            {...register("lname", {
              required:{

                value:true,
                message: "last name is required",
              }, 
            })}
          />
            <p className="err">{errors.lname?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="email">Email Add.: </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "invalid email format",
              },
            })}
            placeholder="email"
          />
        <p className="err">{errors.email?.message}</p>
        </div>
        <button>Submit </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default Form;
