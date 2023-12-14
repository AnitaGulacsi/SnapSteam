export const LogInForm = () => (
  <form className="hidden lg:block bg-green p-10 rounded-3xl">
    <div className="flex flex-col justify-center">
      <input
        className="p-2 rounded-full border border-teal-400 bg-transparent text-teal-100 outline-none focus:outline-none"
        type="text"
        placeholder="Username"
      />
      <input
        className="mt-5 p-2 rounded-full border border-teal-400 bg-transparent text-teal-100 outline-none focus:outline-none"
        type="password"
        placeholder="Password"
      />
      <button className="text-white mt-10">LogIn</button>
      <p className="text-teal-100 flex justify-center m-5">
        Forgotten the password?
      </p>
    </div>
  </form>
);
