import { createContext } from "react";

const UserContext = createContext({
  user: { name: "Dummy", email: "dummy@gamil.com" },
});

export default UserContext;
