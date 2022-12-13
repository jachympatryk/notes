import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import { signInWithPopup } from "firebase/auth";

import { RootState, setDarkTheme, setLightTheme, setUser } from "store";
import { auth, googleAuthProvider } from "config";
import { ui as uiData } from "constants/ui.constants";
import { NOTES_PAGE } from "../../../constants/routes.constants";

import { ReactComponent as GmailLogo } from "assets/icons/gmail.svg";
import { ReactComponent as Sun } from "assets/icons/sun.svg";
import { ReactComponent as Moon } from "assets/icons/moon.svg";
import account from "assets/icons/account.svg";

import styles from "./navigation.module.scss";

export const Navigation = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state: RootState) => state.auth);
  const { theme } = useSelector((state: RootState) => state.ui);

  const handleLogin = () => {
    signInWithPopup(auth, googleAuthProvider).then(({ user: userResponse }) => {
      const { refreshToken, accessToken } = userResponse;

      dispatch(setUser(userResponse));
      localStorage.setItem("token", accessToken);
      localStorage.setItem("refresh_token", refreshToken);
    });
  };

  const isLightTheme = theme === uiData.light;

  const handleThemeChange = () => {
    switch (theme) {
      case uiData.dark:
        return dispatch(setLightTheme());
      case uiData.light:
        return dispatch(setDarkTheme());
      default:
        return dispatch(setLightTheme());
    }
  };

  const showLinks = !!user;
  const userPhoto = user?.photoURL || account;

  return (
    <div className={styles.container}>
      {showLinks && (
        <>
          <Link className={styles.link} to={NOTES_PAGE.path}>
            notes
          </Link>
          <Link className={styles.link} to="/">
            todos
          </Link>
          <div className={styles.profile}>
            <img src={userPhoto} alt="user profile" className={styles.profilePicture} />
            <p className={styles.name}>{user.displayName}</p>
          </div>
        </>
      )}
      {!showLinks && (
        <IconButton onClick={handleLogin} className={styles.iconButton}>
          <GmailLogo className={styles.icon} />
        </IconButton>
      )}

      <IconButton className={styles.iconButton} onClick={handleThemeChange}>
        {isLightTheme ? <Moon className={styles.icon} /> : <Sun className={styles.icon} />}
      </IconButton>
    </div>
  );
};
