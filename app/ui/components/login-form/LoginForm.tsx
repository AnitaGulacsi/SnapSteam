import { Button } from "../buttons/button";

export const LogInForm = () => (
  <form className="hidden lg:block bg-green p-10 rounded-3xl">
    <div className="flex flex-col">
      <div className="flex justify-center">
        <input
          className="p-2 w-64 rounded-full border border-teal-400 bg-transparent text-teal-100 outline-none focus:outline-none"
          type="text"
          placeholder="Username"
        />
      </div>
      <div className="flex justify-center">
        <input
          className="mt-5 p-2 w-64 rounded-full border border-teal-400 bg-transparent text-teal-100 outline-none focus:outline-none"
          type="password"
          placeholder="Password"
        />
      </div>
      <span className="flex justify-center mt-10">
        <Button type="form">LogIn</Button>
      </span>
      <p className="text-teal-100 flex justify-center m-5">
        Forgotten the password?
      </p>
    </div>
  </form>
);
