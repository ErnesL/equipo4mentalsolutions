import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, createContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { getUserProfile } from "../firebase/user-service";

export const UserContext = createContext(null);

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, async (firebaseUser) => {
      setIsLoading(true);
      if (firebaseUser) {
        const profile = await getUserProfile(firebaseUser.email);
        console.log(profile, firebaseUser);
        setUser(profile);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
