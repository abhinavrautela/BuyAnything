import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader";
import { UserContext } from "./Contexts";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [userLoading, setUserLoading] = useState(true);
  const token = localStorage.getItem("MyToken");
  useEffect(() => {
    if (token) {
      axios
        .get("https://myeasykart.codeyogi.io/me", {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          setUser(response.data);
          setUserLoading(false);
        })
        .catch(() => {
          setUser(undefined);
          localStorage.removeItem("MyToken");
          setUserLoading(false);
        });
    } else setUserLoading(false);
  }, []);
  if (userLoading) {
    return <Loader size={"full"} />;
  }

  return (
    <UserContext.Provider value={{ isLoggedIn: !!token, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
