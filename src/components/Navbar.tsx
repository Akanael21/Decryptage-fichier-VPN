import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-2 md:mb-0">
          <Link href="/" className="text-xl font-bold">
            Décryptage Fichier VPN
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/" className="hover:bg-blue-700 px-3 py-2 rounded">
            Accueil
          </Link>
          <Link href="/methodologie" className="hover:bg-blue-700 px-3 py-2 rounded">
            Méthodologie
          </Link>
          <Link href="/resultats" className="hover:bg-blue-700 px-3 py-2 rounded">
            Résultats
          </Link>
          <Link href="/hexview" className="hover:bg-blue-700 px-3 py-2 rounded">
            Visualisation Hex
          </Link>
        </div>
      </div>
      <div className="bg-yellow-500 text-black text-center py-1 text-sm">
        <strong>Avertissement :</strong> Cet outil est fourni à titre éducatif uniquement. Nous ne sommes pas responsables des mauvaises utilisations.
      </div>
    </nav>
  );
}
