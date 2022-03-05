import { useParams, useLocation, useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useAuth } from "./Auth";

export const withHook = (Component) => {
  return (props) => (
    <Component
      {...props}
      history={useHistory()}
      params={useParams()}
      location={useLocation()}
      auth={useAuth()}
    />
  );
};

export const getUserId = () => {
  const token = localStorage.getItem("token");
  if (!token) return;
  return jwt_decode(token).id;
};
