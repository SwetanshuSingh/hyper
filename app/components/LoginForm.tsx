const LoginForm = () => {
  return (
    <form
      className=" w-full h-full py-5 px-8 flex flex-col justify-between"
      action="/"
    >
      <div className="wrapper flex flex-col gap-6">
        <h1 className="text-xl font-semibold tracking-wider text-center">
          Sign In to your account
        </h1>
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-semibold tracking-wide">
            Name :
          </label>
          <input
            id="name"
            className="rounded-md p-2 outline-none bg-[#1E2126]"
            type="text"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-semibold tracking-wide">
            Email :
          </label>
          <input
            id="name"
            className="rounded-md p-2 outline-none bg-[#1E2126]"
            type="text"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-semibold tracking-wide">
            Password :
          </label>
          <input
            id="name"
            className="rounded-md p-2 outline-none bg-[#1E2126]"
            type="text"
          />
        </div>
      </div>

      <div className="wrapper flex flex-col gap-2">
        <button className="bg-[#2C4FFE] p-2 rounded-md font-semibold tracking-widest text-lg">
          Login
        </button>
        <button className="bg-white text-black p-2 rounded-md font-semibold tracking-widest text-lg">
          Sign in with Google
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
