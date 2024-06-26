import { useAuth0 } from "@auth0/auth0-react";
import SlideButton from "../global/SlideButton";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/",
      },
    });
  };

  return (
    <SlideButton onClick={handleLogin} isBlue>
        Login
    </SlideButton>
  );
};