import { Button } from "../buttons/button";

export const SigninForm = () => (
  <form className="p-10">
    <div className="flex justify-center">
      <input
        className="p-2 w-64 rounded-full border border-teal-400 bg-transparent outline-none focus:outline-none"
        type="text"
        placeholder="Username"
      />
    </div>
    <div className="flex justify-center">
      <input
        className="p-2 mt-5 w-64 rounded-full border border-teal-400 bg-transparent outline-none focus:outline-none"
        type="text"
        placeholder="E-mail"
      />
    </div>
    <div className="flex justify-center">
      <input
        className="p-2 mt-5 w-64 rounded-full border border-teal-400 bg-transparent outline-none focus:outline-none"
        type="password"
        placeholder="Password"
      />
    </div>
    <div className="flex justify-center">
      <input
        className="p-2 mt-5 w-64 rounded-full border border-teal-400 bg-transparent outline-none focus:outline-none"
        type="password"
        placeholder="Confirm Password"
      />
    </div>
    <span className="flex justify-center mt-10">
      <Button type="form">SignIn</Button>
    </span>
    <div className="mt-5 flex flex-col gap-5">
      <div className="flex justify-center">
        <Button type="social">Sign In Whit Facebook</Button>
      </div>
      <div className="flex justify-center">
        <Button type="social">Sign In With Instagram</Button>
      </div>
      <div className="flex justify-center">
        <Button type="social">Sign In With Google</Button>
      </div>
    </div>
  </form>
);
