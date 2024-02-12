import { RegistrationForm } from "../ui/components/forms/RegistrationForm";

export default function Page() {
  return (
    <main className="bg-green flex items-center justify-center h-screen">
      <div className="border bg-white">
        <RegistrationForm />
      </div>
    </main>
  );
}
