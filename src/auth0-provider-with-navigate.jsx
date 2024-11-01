import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Auth0ProviderWithNavigate = ({ children }) => {
  const navigate = useNavigate();

  const domain = import.meta.env.VITE_AUTH0_ISSUER_BASE_URL;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

  const onRedirectCallback = (appState) => {
    console.log("Redirecting to:", appState?.returnTo || window.location.pathname);
    navigate(appState?.returnTo || window.location.pathname);
  };

  // console.log("Domain:", domain);
  // console.log("Client ID:", clientId);
  // console.log("Redirect URI:", redirectUri);

  if (!(domain && clientId && redirectUri)) {
    console.error("Missing Auth0 configuration.");
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
