import { SigninForm } from "../ui/components/forms/SigninForm";

export default function Page() {
  return (
    <main className="bg-green flex items-center justify-center h-screen">
      <div className="border bg-white">
        <SigninForm />
      </div>
    </main>
  );
}
