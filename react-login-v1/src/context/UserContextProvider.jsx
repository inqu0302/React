import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useUserContext = () => useContext(AppContext);

function UserContextProvider({ children }) {
  const [user, setUser] = useState({
    userid: "",
    password: "",
    re_password: "",
    e_mail: "",
  });

  const providerData = { user, setUser };

  return (
    <>
      <AppContext.Provider value={providerData}>{children}</AppContext.Provider>
    </>
  );
}

export default UserContextProvider;
