"use client"
import { useState } from "react";
import InputField from "./InputField";
import { Dispatch, SetStateAction } from "react";

const SignupForm = ({ setIsLoginFormActive } : {setIsLoginFormActive : Dispatch<SetStateAction<boolean>>}) => {

  const [formData, setFormData] = useState({name : '', email : '', password : ''});

  return (
    <form
      className=" w-full h-full py-5 px-8 flex flex-col justify-between"
      action="/"
    >
      <div className="wrapper flex flex-col gap-6">
        <h1 className="text-xl font-semibold tracking-wider text-center">
          Sign Up to Hyper
        </h1>
        <InputField value="Name" type="text" id="name" state={formData.name} setFormData={setFormData} />
        <InputField value="Email" type="email" id="email" state={formData.email} setFormData={setFormData} />
        <InputField value="Password" type="password" id="password" state={formData.password} setFormData={setFormData} />
      </div>

      <div className="flex flex-col gap-4">
        <div className="button-wrapper flex flex-col gap-3">
          <button className="bg-[#2C4FFE] p-2 rounded-md font-semibold tracking-wider text-lg">
            Sign Up
          </button>
          <button className="bg-white text-[#16191C] p-2 rounded-md font-semibold tracking-wider text-lg">
            Sign in with Google
          </button>
        </div>

        <p>
          Already an User?{" "}
          <span className="hover:underline cursor-pointer" onClick={() => setIsLoginFormActive(true)}>Sign in</span>
        </p>
      </div>
    </form>
  );
};

export default SignupForm;
