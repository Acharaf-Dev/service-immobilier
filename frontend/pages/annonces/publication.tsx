import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const AnnonceDetails = () => {
  const [annonce, setAnnonce] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      axios.get(`/api/annonces/${id}`).then((response) => {
        setAnnonce(response.data);
      });
    }
  }, [id]);

  return (
    <div className="container mx-auto p-6">
      {annonce ? (
        <>
          <h2 className="text-3xl">{annonce.title}</h2>
          <p>{annonce.description}</p>
          <p>{annonce.price}€</p>
        </>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
};

export default AnnonceDetails;
