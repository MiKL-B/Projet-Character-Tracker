import { createContext, useContext, useState } from "react";
import { Redirect, Route } from "react-router-dom";

const authContext = createContext();

export function useAuth() {
  return useContext(authContext);
}

const verifyToken = async (user) => {
  const response = await fetch("api/auth/verif", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: user }),
  });
  return response["status"] === 200;
};

function useProvideAuth() {
  const [user, setUser] = useState(localStorage.getItem("token") || null);

  if (user) {
    verifyToken(user).then((res) => {
      if (!res) {
        setUser(null);
        localStorage.clear();
      }
    });
  }

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const signin = async ({ username, password }) => {
    const response = await fetch("api/auth/login/", {
      ...requestOptions,
      body: JSON.stringify({ username, password }),
    }).catch((e) => console.log(e));
    if (response.status !== 200) return false;

    let data = await response.text();
    setUser(data);
    localStorage.setItem("token", data);
    return true;
  };

  const register = async ({ username, password, mail }) => {
    const response = await fetch("api/auth/register/", {
      ...requestOptions,
      body: JSON.stringify({ username, password, mail }),
    }).catch((e) => console.log(e));
    if (response.status !== 201) return false;

    let data = await response.text();
    setUser(data);
    localStorage.setItem("token", data);
    return true;
  };

  const signout = () => {
    setUser(null);
    localStorage.clear();
  };

  return {
    user,
    signin,
    signout,
    register,
  };
}

export const PrivateRoute = ({ children, ...rest }) => {
  let { user } = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};
