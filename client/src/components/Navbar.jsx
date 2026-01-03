import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b px-6 py-3 flex justify-between items-center">
      {/* App Name */}
      <h1 className="text-xl font-bold text-blue-600">
        TaskManager
      </h1>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <span className="text-gray-600 text-sm hidden sm:block">
          {user?.name}
        </span>

        {/* Logout Icon */}
        <button
          onClick={logout}
          title="Logout"
          className="p-2 rounded-full hover:bg-red-50 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="w-5 h-5 text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
