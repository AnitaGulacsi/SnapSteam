export const Navbar = () => (
  <nav className="bg-green p-10 flex">
    <div className="flex items-center justify-center w-16 h-16 border-2 border-teal-300 rounded-full">
      <div className="flex items-center justify-center w-12 h-12 border-2 border-teal-300 rounded-full">
        <p className="font-ingrid-darling text-2xl text-teal-300">SS</p>
      </div>
    </div>
    <div className="flex items-center ml-3">
      <p className="text-white text-4xl">
        <span className="text-teal-600">S</span>nap
        <span className="text-teal-600">S</span>tream
      </p>
    </div>
  </nav>
);
