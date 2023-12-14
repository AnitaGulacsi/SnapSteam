import Link from "next/link";
import { Button } from "./ui/components/buttons/button";
import { LogInForm } from "./ui/components/forms/LoginForm";
import { Navbar } from "./ui/components/navbar/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex flex-col lg:flex-row">
        <div className="m-5 md:m-10">
          <div className="flex flex-row gap-2 sm:gap-12 mb-10 justify-center lg:hidden">
            <Link href="/login">
              <Button type="form">LogIn</Button>
            </Link>
            <Link href="/signin">
              <Button type="form">SignIn</Button>
            </Link>
          </div>

          <p className=" text-teal-900">
            {`Experience the magic of 'SnapStream,' an innovative mini app that
        empowers you to create, share, and engage with your world. Share your
        moments, craft stories, edit content, and manage your digital presence
        effortlessly, all while enjoying a seamless login and registration
        process.`}
          </p>
          <div className="hidden lg:block my-10 border border-solid border-grey-300" />
          <span className="hidden lg:flex justify-center">
            <Button type="home">Join Us</Button>
          </span>
        </div>

        <div className="m-5 md:m-10">
          <div className="hidden lg:block">
            <LogInForm
              bgStyle="bg-green rounded-3xl"
              placeholderStyle="text-teal-100"
            />
          </div>
          <p className="text-teal-900 lg:mt-10">
            {`Our future plans for the application include the addition of
          mini-games. We aim to enhance the user experience by incorporating
          entertaining and engaging activities within the app. Stay tuned for
          exciting updates as we continue to evolve and expand our features!`}
          </p>
        </div>
      </div>
    </main>
  );
}
