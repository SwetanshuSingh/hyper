import Image from "next/image";
import LoginForm from "./components/LoginForm";

const Home = () => {
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
        <LoginForm />
      </div>
    </div>
  );
};

export default Home;