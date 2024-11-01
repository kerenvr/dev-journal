import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    console.log("Sign Up button clicked."); // Debugging statement

    try {
      await loginWithRedirect({
        appState: {
          returnTo: "/profile",
        },
        authorizationParams: {
          screen_hint: "signup",
        },
      });
      console.log("Redirecting to Auth0 for sign up..."); // Debugging statement
    } catch (error) {
      console.error("Error during loginWithRedirect:", error); // Log any errors
    }
  };

  return (
    <button   className="">
      Sign Up
    </button>
  );
};
