'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:8000/api/login', {
        email,
        password
      });

      // Stocker le token et rôle utilisateur
      Cookies.set('token', res.data.token);
      Cookies.set('user_role', res.data.user.role);

      // Rediriger vers le dashboard approprié
      if (res.data.user.role === 'admin') router.push('/dashboard/admin');
      else if (res.data.user.role === 'employe') router.push('/dashboard/employe');
      else if (res.data.user.role === 'proprietaire') router.push('/dashboard/owner');
      else router.push('/dashboard/client');
    } catch (err) {
      setError('Identifiants incorrects');
    }
  };

  return (
    <main className="max-w-md mx-auto mt-20 p-4 border rounded-lg shadow">
      <h1 className="text-xl font-bold mb-4">Connexion</h1>
      <input
        type="email"
        placeholder="Email"
        className="w-full mb-2 p-2 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        className="w-full mb-2 p-2 border rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="text-red-500">{error}</p>}
      <button onClick={handleLogin} className="w-full bg-blue-600 text-white p-2 rounded mt-2">
        Se connecter
      </button>
    </main>
  );
}
