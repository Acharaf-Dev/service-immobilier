'use client';
import { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleRegister = async () => {
    await axios.post('http://localhost:8000/api/register', form);
    alert('Inscription réussie, veuillez vous connecter.');
  };

  return (
    <main className="max-w-md mx-auto mt-20 p-4">
      <h1 className="text-xl font-bold mb-4">Inscription</h1>
      <input placeholder="Nom" className="input" onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" className="input" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Mot de passe" className="input" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button onClick={handleRegister} className="btn">S’inscrire</button>
    </main>
  );
}
