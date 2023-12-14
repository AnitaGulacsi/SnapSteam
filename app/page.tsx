import { LogInForm } from "./components/login-form/LoginForm";
import { Navbar } from "./components/navbar/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* content */}
      <div className="flex flex-col lg:flex-row">
        <div className="m-5 md:m-10">
          <p className=" text-teal-900">
            {`Experience the magic of 'SnapStream,' an innovative mini app that
        empowers you to create, share, and engage with your world. Share your
        moments, craft stories, edit content, and manage your digital presence
        effortlessly, all while enjoying a seamless login and registration
        process.`}
          </p>
          <div className="hidden lg:block my-10 border border-solid border-grey-300" />
        </div>

        <div className="m-5 md:m-10">
          <LogInForm />
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
