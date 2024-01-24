import { Metrics } from "../../ui/components/profile-page/metrics/Metrics";
import { UserData } from "../../test/post-data";
import { InfoPoint } from "../../ui/components/profile-page/infopoint/InfoPoint";
import { PostData } from "../../test/post-data";
import { ImgWidgets } from "../../ui/components/profile-page/ImgWidgets";
import Link from "next/link";
import { ActionsMenu } from "@/app/ui/components/actions-menu/ActionsMenu";

export default function Page() {
  return (
    <main className="bg-green h-screen">
      <div className="absolute hidden">
        <ActionsMenu type="Home page" />
      </div>
      <div className="flex justify-center">
        <div className="bg-white flex flex-col">
          <Link href={"./social-feed"}>
            <p>&lt;Back</p>
          </Link>
          {UserData.map((user) => (
            <Metrics
              key={user.id}
              profile={user.profileImage}
              post={"Post:"}
              postCounter={0}
              followers={"Followers"}
              followersCounter={0}
              following={"Following"}
              followingCounter={0}
            />
          ))}

          <div className="px-5 md:px-10">
            {UserData.map((user) =>
              user.userinfo.map((info) => (
                <InfoPoint
                  key={info.id}
                  job={info.job}
                  country={info.country}
                  skills={info.skills}
                  hobby={info.hobby}
                />
              ))
            )}
          </div>
          <div className="flex flex-wrap">
            {PostData.map((img) => (
              <ImgWidgets key={img.id} img={img.url} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
