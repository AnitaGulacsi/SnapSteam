"use client";
import { FC } from "react";
import { Button } from "../buttons/button";
import { useFormState } from "react-dom";
import { authenticate } from "@/app/lib/actions";

interface LogInFormProps {
  bgStyle?: string;
  textStyle?: string;
  placeholderStyle?: string;
}

export const LogInForm: FC<LogInFormProps> = ({
  bgStyle,
  textStyle,
  placeholderStyle,
}) => {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  return (
    <form action={dispatch} className={`p-10 ${bgStyle}`}>
      <div className="flex justify-center">
        <input
          className={`p-2 w-64 rounded-full border border-teal-400 bg-transparent outline-none focus:outline-none ${placeholderStyle}`}
          type="text"
          placeholder="Username"
          required
        />
      </div>
      <div className="flex justify-center">
        <input
          className={`mt-5 p-2 w-64 rounded-full border border-teal-400 bg-transparent outline-none focus:outline-none ${placeholderStyle}`}
          type="password"
          placeholder="Password"
          required
          minLength={6}
        />
      </div>

      <span className="flex justify-center mt-10">
        <Button type="form">LogIn</Button>
      </span>
      {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
      <p
        className={`text-teal-100 flex justify-center m-5 hover:underline cursor-pointer ${textStyle}`}
      >
        Forgotten the password?
      </p>
    </form>
  );
};
