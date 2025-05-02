'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useParams } from 'next/navigation';

export default function AnnonceDetails() {
  const { id } = useParams();
  const [annonce, setAnnonce] = useState<any>(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/annonces/${id}`)
      .then(res => setAnnonce(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const reserver = async (type: 'location' | 'achat') => {
    try {
      await axios.post(
        `http://localhost:8000/api/transactions`,
        {
          annonce_id: id,
          type,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`,
          },
        }
      );
      alert(`Demande de ${type} envoyée !`);
    } catch (err) {
      alert('Erreur : action impossible');
    }
  };

  if (!annonce) return <p>Chargement...</p>;

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">{annonce.titre}</h1>
      <p className="text-gray-700 my-2">{annonce.description}</p>
      <p className="text-lg font-semibold text-blue-600">{annonce.prix} €</p>
      <div className="flex gap-4 mt-4">
        <button onClick={() => reserver('location')} className="bg-yellow-500 px-4 py-2 text-white rounded">
          Louer
        </button>
        <button onClick={() => reserver('achat')} className="bg-green-600 px-4 py-2 text-white rounded">
          Acheter
        </button>
      </div>
    </main>
  );
}
