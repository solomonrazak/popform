import { createContext, useContext, useState, ReactNode } from "react";

type UserContextData = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
};

export const userContext = createContext<UserContextData | undefined>(
  undefined
);

interface UserProviderProps {
  children: ReactNode;
}

// context Provider
export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [name, setName] = useState<string>("");

  return (
    <userContext.Provider value={{ name, setName }}>
      {children}
    </userContext.Provider>
  );
};

// context consumer
export const useUser = () => {
  const context = useContext(userContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
