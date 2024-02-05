"use client";
import Link from "next/link";
import { Button } from "../ui/components/buttons/button";
import { TestImage } from "@/app/test/dataimg";
import { PhotoWidgets } from "../ui/widgets/photo";
import { SetStateAction, useState } from "react";
import { Country } from "@/app/test/dataimg";
import { useFormState } from "react-dom";
import { createPost } from "../lib/actions";

export default function Page() {
  const [selectedOption, setSelectedOption] = useState("");
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createPost, initialState);

  const handleOptionChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectedOption(event.target.value);
  };
  return (
    <main className="bg-green flex items-center justify-center h-screen">
      <form action={dispatch} className="bg-white flex flex-col items-center">
        <p className="my-3 sm-my-10">Create new post:</p>
        <input
          className={`p-2 w-[200px] sm:w-[400px] rounded-xl border border-teal-400 bg-transparent outline-none focus:outline-none`}
          type="text"
          placeholder="Description"
        />

        <select
          className={`p-2 mt-5 w-[200px] sm:w-[400px] rounded-xl border border-teal-400 bg-transparent outline-none focus:outline-none`}
          id="options"
          onChange={handleOptionChange}
          value={selectedOption}
        >
          <option value="" disabled>
            Select Location
          </option>
          {Country.map((option) => (
            <option key={option.id} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>

        <div className="w-[200px] sm:w-[500px] border m-10 flex flex-wrap bg-green">
          {TestImage.map((test) => (
            // eslint-disable-next-line react/jsx-key
            <PhotoWidgets test={test.id} image={test.url} />
          ))}
        </div>
        <div className="flex flex-row gap-12 m-5">
          <Link href="/dashboard/social-feed">
            <Button type="form">&lt; Back </Button>
          </Link>
          <Button type="form submit">Create</Button>
        </div>
      </form>
    </main>
  );
}
