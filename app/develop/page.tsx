import Link from "next/link";
import { Button } from "../ui/components/buttons/button";

export default function Page() {
  return (
    <div className="flex flex-col gap-3 items-center justify-center h-screen ">
      <p className="text-green-900 text-2xl">
        The website is currently under development.
      </p>
      <Link href="/social-feed">
        <Button type="form">&lt; Back </Button>
      </Link>
    </div>
  );
}
