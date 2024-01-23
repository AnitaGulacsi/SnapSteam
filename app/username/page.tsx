import { Navbar } from "../ui/components/navbar/Navbar";
import { Metrics } from "../ui/components/profile-page/metrics/Metrics";
import { UserData } from "../test/post-data";
import { InfoPoint } from "../ui/components/profile-page/InfoPoint";

export default function Page() {
  return (
    <main className="bg-green h-screen">
      <Navbar welcome={"Welcome"} username={"@username"} />
      <div className="flex justify-center">
        <div className="bg-white flex flex-col">
          <Metrics
            post={"Post:"}
            postCounter={0}
            followers={"Followers"}
            followersCounter={0}
            following={"Following"}
            followingCounter={0}
          />

          <div className="px-10">
            {UserData.map((user) => (
              <div key={user.id}>
                {user.userinfo.map((info) => (
                  <InfoPoint
                    key={info.id}
                    job={info.job}
                    country={info.country}
                    skills={info.skills}
                    hobby={info.hobby}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
