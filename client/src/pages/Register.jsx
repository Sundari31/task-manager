import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", { name, email, password });
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-6 rounded-lg shadow-lg w-80"
      >
        <h2 className="text-2xl font-bold mb-5 text-center">
          Create Account
        </h2>

        <input
          type="text"
          placeholder="Name"
          className="border p-2 w-full mb-3 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

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

        <button className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700">
          Register
        </button>

        <p className="text-sm text-center mt-4">
          Already registered?{" "}
          <Link to="/" className="text-blue-600 font-medium">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
