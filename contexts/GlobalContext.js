import { createContext, useContext, useState } from "react";
import useMediaQuery from "../hooks/useGetMediaQuery";
export const GlobalContext = createContext(null);

export default function GlobalContextProvider({ children }) {
  const isDesktop = useMediaQuery("(min-width: 780px)");
  const [isHomepage, setIsHomepage] = useState(false);
  return (
    <GlobalContext.Provider value={{ isDesktop, isHomepage, setIsHomepage }}>
      {children}
    </GlobalContext.Provider>
  );
}
export function useGlobalContext() {
  return useContext(GlobalContext);
}
