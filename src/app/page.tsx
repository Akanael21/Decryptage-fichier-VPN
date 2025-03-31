import { MDXRemote } from 'next-mdx-remote/rsc';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import InfoCard from '../components/InfoCard';
import StatCard from '../components/StatCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <header className="bg-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold">Analyse Cryptographique</h1>
          <p className="mt-4 text-xl">Décodage et analyse du fichier ⚔️⚔️WARRIOR_ULTIMATE_ULTRA🇨🇲🇨🇲.hat</p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Outil de décryptage de fichiers VPN</h2>
          
          <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-md mb-6 border-l-4 border-blue-500">
            <p className="text-blue-800 dark:text-blue-200">
              Cet outil permet d&apos;analyser et de décrypter différents types de fichiers VPN chiffrés, 
              en utilisant une variété d&apos;algorithmes de chiffrement. L&apos;interface web interactive 
              vous permet de visualiser les données et de comprendre le processus de décryptage.
            </p>
          </div>
          
          <h3 className="text-xl font-semibold mb-4">Résumé de l&apos;analyse</h3>
          
          <p className="mb-4">
            Le fichier &quot;⚔️⚔️WARRIOR_ULTIMATE_ULTRA🇨🇲🇨🇲.hat&quot; a été analysé en utilisant plusieurs méthodes de décodage et de déchiffrement. Voici les principales découvertes :
          </p>
          
          <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li>Le fichier original est un fichier texte ASCII contenant des données encodées en Base64</li>
            <li>Après décodage Base64, nous avons obtenu un fichier binaire de 1600 octets</li>
            <li>Parmi les différentes tentatives de déchiffrement, le fichier déchiffré avec la clé &quot;CAMEROON&quot; en mode CBC a été identifié comme une possible clé secrète OpenPGP</li>
            <li>Malgré cette identification, le contenu exact de la clé reste difficile à interpréter car elle semble utiliser un format ou une version non standard que les outils standard comme GPG ne peuvent pas traiter correctement</li>
          </ol>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard 
              title="Algorithmes supportés" 
              value="12+" 
              description="AES, DES, 3DES, Blowfish, RC4, etc."
              icon="🔐"
              color="blue"
            />
            <StatCard 
              title="Formats VPN" 
              value="5+" 
              description="OpenVPN, PPTP, L2TP/IPSec, IKEv2"
              icon="🌐"
              color="green"
            />
            <StatCard 
              title="Visualisation" 
              value="Interactive" 
              description="Analyse hexadécimale en temps réel"
              icon="👁️"
              color="purple"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-600 text-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Méthodologie</h3>
              <p className="mb-4">
                Découvrez les techniques et outils utilisés pour analyser ce fichier cryptographique.
              </p>
              <Link href="/methodologie" className="inline-block bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-50 transition-colors">
                Voir la méthodologie
              </Link>
            </div>
          </div>
          
          <div className="bg-green-600 text-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Résultats détaillés</h3>
              <p className="mb-4">
                Explorez les résultats complets de notre analyse et les conclusions sur la nature du fichier.
              </p>
              <Link href="/resultats" className="inline-block bg-white text-green-600 px-4 py-2 rounded-md font-medium hover:bg-green-50 transition-colors">
                Voir les résultats
              </Link>
            </div>
          </div>
          
          <div className="bg-purple-600 text-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Visualisation hexadécimale</h3>
              <p className="mb-4">
                Aperçu des 256 premiers octets du fichier déchiffré avec la clé &quot;CAMEROON&quot; en mode CBC.
              </p>
              <Link href="/hexview" className="inline-block bg-white text-purple-600 px-4 py-2 rounded-md font-medium hover:bg-purple-50 transition-colors">
                Explorer la visualisation hexadécimale
              </Link>
            </div>
          </div>
        </div>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <h3 className="text-lg font-semibold text-yellow-800">Avertissement important</h3>
          <p className="text-yellow-700">
            Cet outil est fourni à titre éducatif uniquement. Il est conçu pour aider à comprendre les mécanismes 
            de chiffrement et de sécurité des fichiers VPN. Nous ne sommes pas responsables des mauvaises utilisations 
            de cet outil ou des informations fournies. L&apos;utilisation de cet outil pour accéder à des données 
            protégées sans autorisation est illégale et contraire à l&apos;éthique.
          </p>
        </div>
      </main>
      
      <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Décryptage Fichier VPN - Créé à des fins éducatives uniquement
          </p>
        </div>
      </footer>
    </div>
  );
}
