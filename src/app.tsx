import React from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { PageRoute } from "components";
import { routes } from "config";
import { RootState, setNotes } from "./store";
import { useFirebaseFetch } from "./hooks";
import { getUserNotes } from "firestore";

import "./assets/styles/app.scss";

export const App: React.FC = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state: RootState) => state.auth);
  const { notesRefresher } = useSelector((state: RootState) => state.app);

  useFirebaseFetch(() => getUserNotes(user?.uid || ""), {
    dependencies: [user, notesRefresher],
    condition: Boolean(user),
    onSuccess: (response) => {
      dispatch(setNotes(response || []));
    },
  });

  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.name} path={route.path} element={<PageRoute {...route} />} />
      ))}
    </Routes>
  );
};
