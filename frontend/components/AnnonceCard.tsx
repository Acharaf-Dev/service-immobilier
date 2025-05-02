import { useRouter } from "next/router";

interface Annonce {
  id: number;
  title: string;
  description: string;
  price: number;
}

const AnnonceCard = ({ annonce }: { annonce: Annonce }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/annonces/${annonce.id}`);
  };

  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer" onClick={handleClick}>
      <h3 className="text-xl font-semibold">{annonce.title}</h3>
      <p className="text-gray-600">{annonce.description}</p>
      <p className="text-blue-500 font-bold">{annonce.price}€</p>
    </div>
  );
};

export default AnnonceCard;
