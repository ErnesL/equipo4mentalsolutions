// TODOS LOS METODOS DE AUTENTICACION

import {
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAdditionalUserInfo,
} from "firebase/auth";
import { auth, googleProvider } from "./config";
import { createUserProfile } from "./user-service";

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const { isNewUser } = getAdditionalUserInfo(result);
    if (isNewUser) {
      await createUserProfile(result.user.uid, {
        email: result.user.email,
        name: result.user.displayName,
        age: 0,
        role: "",
      });
    }
  } catch (error) {}
};

export const registerWithEmailAndPassword = async (
  email,
  password,
  extraData
) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await createUserProfile(result.user.uid, { email, ...extraData });
  } catch (error) {}
};
export const loginWithEmailAndPassword = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {}
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {}
};
