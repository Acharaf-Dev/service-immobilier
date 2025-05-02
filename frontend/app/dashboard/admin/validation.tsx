'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function AdminDashboard() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/admin/transactions', {
        headers: { Authorization: `Bearer ${Cookies.get('token')}` },
      })
      .then(res => setTransactions(res.data));
  }, []);

  const traiter = async (id: number, action: 'validate' | 'reject') => {
    await axios.post(
      `http://localhost:8000/api/admin/transactions/${id}/${action}`,
      {},
      { headers: { Authorization: `Bearer ${Cookies.get('token')}` } }
    );
    setTransactions(prev => prev.filter((t: any) => t.id !== id));
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Transactions en attente</h1>
      <ul>
        {transactions.map((t: any) => (
          <li key={t.id} className="mb-4 border-b pb-2">
            <p>Type : {t.type} - Annonce ID : {t.property_id} - Client : {t.client.name}</p>
            <div className="flex gap-2 mt-2">
              <button onClick={() => traiter(t.id, 'validate')} className="bg-green-600 px-3 py-1 text-white rounded">
                Valider
              </button>
              <button onClick={() => traiter(t.id, 'reject')} className="bg-red-600 px-3 py-1 text-white rounded">
                Rejeter
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
