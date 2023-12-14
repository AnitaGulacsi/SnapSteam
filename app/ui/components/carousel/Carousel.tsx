import Image from "next/image";
import img1 from "@/public/images/app-job.png";
// import img2 from "@/public/images/apps-ios.png";
// import img3 from "@/public/images/mobile-app.png";

export const Carousel = () => {
  return (
    <div className="flex flex-row">
      <Image src={img1} alt="img" width={200} height={200} />
    </div>
  );
};
