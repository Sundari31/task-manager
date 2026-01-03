import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/dashboard");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left */}
      <div className="hidden md:flex w-1/2 bg-blue-600 text-white items-center justify-center">
        <div className="text-center px-10">
          <h1 className="text-4xl font-bold mb-4">Task Manager</h1>
          <p className="text-lg opacity-90">
            Manage your tasks efficiently in one place.
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <form
          onSubmit={handleLogin}
          className="w-80 bg-white p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-5 text-center">Welcome Back</h2>

          <input
            type="email"
            placeholder="Email"
            className="border p-2 w-full mb-3 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-2 w-full mb-4 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700">
            Login
          </button>

          <p className="text-sm text-center mt-4">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 font-medium">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
