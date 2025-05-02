import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirection ou chargement d'éléments à l'ouverture
  }, []);

  return (
    <div className="container mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">Bienvenue sur Service Immobilier</h1>
      <p className="text-lg mb-4">La meilleure plateforme pour gérer, louer, et acheter des biens immobiliers</p>
      <button
        onClick={() => router.push("/login")}
        className="bg-blue-500 text-white px-6 py-3 rounded-full"
      >
        Se connecter
      </button>
    </div>
  );
};

export default Home;
