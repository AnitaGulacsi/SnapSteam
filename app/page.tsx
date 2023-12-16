import Link from "next/link";
import { Button } from "./ui/components/buttons/button";
import { LogInForm } from "./ui/components/forms/LoginForm";
import { Navbar } from "./ui/components/navbar/Navbar";
import { Carousel } from "./ui/components/carousel/Carousel";
import img1 from "@/public/images/app-job.png";
import img2 from "@/public/images/apps-ios.png";
import img3 from "@/public/images/mobile-app.png";

export default function Home() {
  const carouselItems = [
    { imageUrl: img1 },
    { imageUrl: img2 },
    { imageUrl: img3 },
  ];
  return (
    <main>
      <Navbar />
      <div className="flex flex-col xl:flex-row">
        <div className="m-5 md:m-10">
          <div className="flex flex-row gap-2 sm:gap-12 mb-10 justify-center xl:hidden">
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
          <div className="hidden xl:block my-10 border border-solid border-grey-300" />
          {/* <div className="flex justify-center m-10"> */}
          <Carousel items={carouselItems} />
          {/* </div> */}

          <span className="hidden xl:flex justify-center">
            <Link href="/signin">
              <Button type="home">Join Us</Button>
            </Link>
          </span>
        </div>

        <div className="m-5 md:m-10">
          <div className="hidden xl:block">
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
