import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function ResgisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function registerUser(e) {
    e.preventDefault();
    axios.get("/test");
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-3xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <input
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            type="email"
            placeholder="Johndoe@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.email)}
          ></input>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button className="primary">Register</button>
          <div className="text-center py-2 text-gray-500">
            Already have an account with us?{" "}
            <Link className="underline text-black" to={"/login"}>
              {" "}
              Login here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
