import { useEffect } from "react";
import { useRouter } from "next/router";

const AdminDashboard = () => {
  const router = useRouter();

  useEffect(() => {
    // Logique de validation des droits d'accès ou redirection
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl">Tableau de bord Admin</h2>
      <p className="mt-4">Bienvenue, Admin ! Gérez les utilisateurs, annonces et paiements.</p>
      {/* Détails du tableau de bord admin ici */}
    </div>
  );
};

export default AdminDashboard;
