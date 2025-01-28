import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth"; // Mengimpor hook global
import { AuthClient } from "@dfinity/auth-client";
import { redirect, useNavigate } from "react-router"; // Untuk navigasi setelah login

const AuthLogin = () => {
  const { isAuthenticated, principal, message, handleLogout } = useAuth(); // Mendapatkan handleLogout dari useAuth
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Navigasi ke halaman lain setelah login

  const handleLogin = async () => {
    setLoading(true);
    const authClient = await AuthClient.create();

    await authClient.login({
      identityProvider: "https://identity.ic0.app/#authorize",
      onSuccess: async () => {
        const identity = authClient.getIdentity();
        const userPrincipal = identity.getPrincipal().toText();
        setLoading(false);
        window.location.href = "/";
      },
      onError: () => {
        setLoading(false);
        alert("Login failed. Please try again.");
      },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Login to ICP</h1>
        {isAuthenticated ? (
          <>
            <p className="mb-4 text-gray-600">Welcome back, authenticated user!</p>
            <p className="mb-4 text-gray-800">Principal: {principal}</p>
            <p className="mb-4 text-green-600">{message}</p>
            <button
              onClick={handleLogout} // Memanggil handleLogout untuk logout
              className="bg-red-600 text-white py-2 px-4 rounded-xl hover:bg-red-700 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <p className="mb-4 text-gray-600">Log in to connect to the Internet Computer.</p>
            <button
              onClick={handleLogin}
              className={`bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Connect"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthLogin;
