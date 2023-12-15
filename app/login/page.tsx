import { LogInForm } from "../ui/components/forms/LoginForm";

export default function Page() {
  return (
    <main className="bg-green flex items-center justify-center h-screen">
      <div className="border bg-white">
        <LogInForm textStyle="text-teal-500" />
      </div>
    </main>
  );
}
