import AuthContext  from "../../context/AuthContext";
import { AuthContextType } from "./types";
import { useContext } from "react";

const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  
  return context;
};

export default useAuth;