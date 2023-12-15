import { FC } from "react";
import { Button } from "../buttons/button";

interface LogInFormProps {
  bgStyle?: string;
  textStyle?: string;
  placeholderStyle?: string;
}

export const LogInForm: FC<LogInFormProps> = ({
  bgStyle,
  textStyle,
  placeholderStyle,
}) => (
  <form className={`p-10 ${bgStyle}`}>
    <div className="flex justify-center">
      <input
        className={`p-2 w-64 rounded-full border border-teal-400 bg-transparent outline-none focus:outline-none ${placeholderStyle}`}
        type="text"
        placeholder="Username"
      />
    </div>
    <div className="flex justify-center">
      <input
        className={`mt-5 p-2 w-64 rounded-full border border-teal-400 bg-transparent outline-none focus:outline-none ${placeholderStyle}`}
        type="password"
        placeholder="Password"
      />
    </div>
    <span className="flex justify-center mt-10">
      <Button type="form">LogIn</Button>
    </span>
    <p
      className={`text-teal-100 flex justify-center m-5 hover:underline cursor-pointer ${textStyle}`}
    >
      Forgotten the password?
    </p>
  </form>
);
