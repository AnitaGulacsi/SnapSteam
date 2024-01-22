import { Navbar } from "../ui/components/navbar/Navbar";
import { Metrics } from "../ui/components/profile-page/metrics/Metrics";

export default function Page() {
  return (
    <main className="bg-green h-screen">
      <Navbar welcome={"Welcome"} username={"@username"} />
      <div className="flex justify-center">
        <Metrics
          post={"Post:"}
          postCounter={0}
          followers={"Followers"}
          followersCounter={0}
          following={"Following"}
          followingCounter={0}
        />
      </div>
    </main>
  );
}
