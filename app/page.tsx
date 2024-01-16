"use client"
import Image from "next/image";
import LoginForm from "./components/LoginForm";
import { useState } from "react";
import SignupForm from "./components/SignupForm";

const Home = () => {

  const [isLoginFormActive, setIsLoginFormActive] = useState(false);

  return (
    <div className="bg-[#1E2126] min-h-full flex flex-col justify-center items-center gap-8 text-[#EFF7F6]">
      <div>
        {/* <Image
          width={50}
          height={50}
          alt="logo"
          src="/images/logo.png"
          className="mx-auto w-auto"
        /> */}
        <h1 className="text-center text-4xl tracking-widest font-semibold">
          Welcome to Hyper
        </h1>
      </div>

      <div className="bg-[#16191C] w-[400px] h-[550px] rounded-lg">
        {isLoginFormActive ? <LoginForm setIsLoginFormActive={setIsLoginFormActive} /> : <SignupForm setIsLoginFormActive={setIsLoginFormActive} />}
      </div>
    </div>
  );
};

export default Home;