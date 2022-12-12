import React from "react";
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";

import { auth, googleAuthProvider } from "config";
import { setUser } from "store";

export const LoginPage: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    signInWithPopup(auth, googleAuthProvider).then(({ user }) => {
      const { refreshToken, accessToken } = user;

      dispatch(setUser(user));
      localStorage.setItem("token", accessToken);
      localStorage.setItem("refresh_token", refreshToken);
    });
  };

  return (
    <div>
      <button type="button" onClick={handleLogin}>
        sign in with google
      </button>
    </div>
  );
};
