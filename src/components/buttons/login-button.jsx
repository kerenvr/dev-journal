import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/profile",
      },
    });
  };

  return (
    <button className="bg-fuchsia-400 rounded-md px-4 py-2 text-white" onClick={handleLogin}>
      Log In
    </button>
  );
};