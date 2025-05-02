import Link from "next/link";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="bg-blue-600 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-semibold">
          Service Immobilier
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-white">Accueil</Link>
          <Link href="/annonces" className="text-white">Annonces</Link>
          {session ? (
            <>
              <Link href="/dashboard" className="text-white">Dashboard</Link>
              <button onClick={() => signOut()} className="text-white">Se déconnecter</button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-white">Se connecter</Link>
              <Link href="/register" className="text-white">S'inscrire</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
