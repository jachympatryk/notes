import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { RootState, setUser } from "store";
import { auth, googleAuthProvider } from "config";

import { ReactComponent as GmailLogo } from "assets/icons/gmail.svg";

import styles from "./navigation.module.scss";

export const Navigation = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state: RootState) => state.auth);

  const handleLogin = () => {
    signInWithPopup(auth, googleAuthProvider).then(({ user: userResponse }) => {
      const { refreshToken, accessToken } = userResponse;

      dispatch(setUser(userResponse));
      localStorage.setItem("token", accessToken);
      localStorage.setItem("refresh_token", refreshToken);
    });
  };

  const showLinks = !!user;

  return (
    <div className={styles.container}>
      {showLinks && (
        <>
          <Link className={styles.link} to="/">
            notes
          </Link>
          <Link className={styles.link} to="/">
            todos
          </Link>
          <div className={styles.profile}>
            <img src={user.photoURL || AccountCircleIcon} alt="user profile" className={styles.profilePicture} />
            <p className={styles.name}>{user.displayName}</p>
          </div>
        </>
      )}
      {!showLinks && (
        <IconButton onClick={handleLogin} className={styles.iconButton}>
          <GmailLogo className={styles.icon} />
        </IconButton>
      )}
    </div>
  );
};
