import { createContext, useState } from "react";

export const AdressContext = createContext({
  city: null,
  setCity: () => null,
});

export const AdressProvider = ({ children }) => {
  const [city, setCity] = useState("Ho Chi Minh");
  const value = { city, setCity };
  return (
    <AdressContext.Provider value={value}>
      {children}
    </AdressContext.Provider>
  );
};
