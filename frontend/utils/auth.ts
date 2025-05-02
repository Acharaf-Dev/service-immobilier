import { signIn, signOut, useSession } from "next-auth/react";

// Fonction pour se connecter
export const login = async (email: string, password: string) => {
  try {
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    return res;
  } catch (error) {
    console.error("Erreur lors de la connexion", error);
  }
};

// Fonction pour se déconnecter
export const logout = () => {
  signOut({ redirect: false });
};
