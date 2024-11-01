import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <button className="bg-fuchsia-400 rounded-md px-4 py-2 text-white" onClick={handleLogout}>
      Log Out
    </button>
  );
};