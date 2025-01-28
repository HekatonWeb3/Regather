import { useState, useEffect } from "react";
import { AuthClient } from "@dfinity/auth-client";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [principal, setPrincipal] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const checkAuthStatus = async () => {
      const authClient = await AuthClient.create();
      const isLoggedIn = await authClient.isAuthenticated();

      if (isLoggedIn) {
        setIsAuthenticated(true);
        const identity = authClient.getIdentity();
        setPrincipal(identity.getPrincipal().toText());
        setMessage("Authenticated");
      } else {
        setIsAuthenticated(false);
        setMessage("Not authenticated");
      }
      setLoading(false); // Setelah pengecekan selesai, set loading menjadi false
    };

    checkAuthStatus();
  }, []);

  const handleLogout = async () => {
    const authClient = await AuthClient.create();
    await authClient.logout();
    setIsAuthenticated(false);
    setPrincipal("");
    setMessage("You have been logged out.");
    window.location.href = "/";
  };

  return { isAuthenticated, principal, message, handleLogout, loading };
};
