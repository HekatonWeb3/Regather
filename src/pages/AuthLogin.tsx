import React, { useState } from "react";
import { AuthClient } from "@dfinity/auth-client";
import { useNavigate } from "react-router";

const ConnectICPPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [principal, setPrincipal] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Hook untuk navigasi

  const handleLogin = async () => {
    const authClient = await AuthClient.create();

    await authClient.login({
      identityProvider: "https://identity.ic0.app/#authorize",
      onSuccess: async () => {
        setIsAuthenticated(true);
        const identity = authClient.getIdentity();
        setPrincipal(identity.getPrincipal().toText());
        setMessage("Hello, authenticated user!");

        // Navigasi ke HomePage setelah berhasil login
        navigate("/home");
      },
      onError: () => {
        setMessage("Failed to authenticate. Please try again.");
      },
    });
  };

  const handleLogout = async () => {
    const authClient = await AuthClient.create();
    await authClient.logout();
    setIsAuthenticated(false);
    setPrincipal("");
    setMessage("You have been logged out.");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Connect to ICP</h1>
        {!isAuthenticated ? (
          <>
            <p className="mb-4 text-gray-600">Log in to connect to the Internet Computer.</p>
            <button
              onClick={handleLogin}
              className="bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition"
            >
              Connect
            </button>
          </>
        ) : (
          <>
            <p className="mb-4 text-gray-600">Welcome, authenticated user!</p>
            <p className="mb-4 font-mono text-sm text-gray-800">Principal: {principal}</p>
            <p className="mb-4 text-green-600">{message}</p>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white py-2 px-4 rounded-xl hover:bg-red-700 transition"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ConnectICPPage;
