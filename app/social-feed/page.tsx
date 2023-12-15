import { Navbar } from "../ui/components/navbar/Navbar";

export default function Page() {
  return (
    <div>
      <Navbar>
        <p className="text-teal-300">Welcome</p>
        <p className="text-white">@user</p>
      </Navbar>
    </div>
  );
}
