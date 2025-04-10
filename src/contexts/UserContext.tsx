import { createContext, useState, type ReactNode } from "react";

interface IUserContext {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  userId: number;
  setUserId: React.Dispatch<React.SetStateAction<number>>;
  role: number;
  setRole: React.Dispatch<React.SetStateAction<number>>;
  image: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext<IUserContext>({
  isLogged: false,
  setIsLogged: () => {},
  userId: 0,
  setUserId: () => {},
  role: 0,
  setRole: () => {},
  image: "",
  setImage: () => {},
  email: "",
  setEmail: () => {},
  username: "",
  setUsername: () => {},
});

// custom composant qui vient entourer le composant racime et qui provide le context
export default function UserContextProvider({ children }: { children: ReactNode }) {
  // definition de la valeur du context
  const [isLogged, setIsLogged] = useState(false);
  const [userId, setUserId] = useState(0);
  const [role, setRole] = useState(0);
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  return (
    <UserContext.Provider
      value={{
        isLogged,
        setIsLogged,
        userId,
        setUserId,
        role,
        setRole,
        image,
        setImage,
        email,
        setEmail,
        username,
        setUsername,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
