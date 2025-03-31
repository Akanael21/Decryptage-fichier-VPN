import Navbar from '../../components/Navbar';
import AnalysisTimeline from '../../components/AnalysisTimeline';
import InfoCard from '../../components/InfoCard';
import StatCard from '../../components/StatCard';

export default function Methodologie() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <header className="bg-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold">Méthodologie d'analyse</h1>
          <p className="mt-2 text-blue-100">Techniques et outils utilisés pour l'analyse des fichiers VPN</p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">Processus d'analyse détaillé</h2>
          
          <div className="mb-8">
            <p className="mb-4">
              Notre approche pour décrypter les fichiers VPN suit une méthodologie rigoureuse qui combine 
              plusieurs techniques d'analyse cryptographique. Cette méthodologie est applicable à divers 
              formats de fichiers VPN et protocoles de chiffrement.
            </p>
            
            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-md mb-6 border-l-4 border-blue-500">
              <p className="text-blue-800 dark:text-blue-200">
                <strong>Note technique :</strong> Les fichiers VPN contiennent généralement des clés de chiffrement, 
                des certificats, des paramètres de configuration et parfois des informations d'authentification. 
                Notre outil est capable d'identifier et d'analyser ces différents éléments.
              </p>
            </div>
          </div>
          
          <AnalysisTimeline />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-12">
            <InfoCard 
              title="Algorithmes de décryptage" 
              content="Méthodes utilisées pour le décryptage des fichiers VPN"
              icon="🔓"
              color="blue"
            >
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>AES (128, 192, 256 bits)</strong> - Algorithme standard pour le chiffrement symétrique</li>
                <li><strong>DES et 3DES</strong> - Algorithmes plus anciens encore utilisés dans certains systèmes</li>
                <li><strong>Blowfish et Twofish</strong> - Alternatives populaires pour les VPN</li>
                <li><strong>ChaCha20</strong> - Chiffrement par flux moderne utilisé dans certains VPN</li>
                <li><strong>RSA et ECC</strong> - Pour le déchiffrement des clés asymétriques</li>
                <li><strong>XOR</strong> - Technique simple parfois utilisée en combinaison avec d'autres méthodes</li>
              </ul>
            </InfoCard>
            
            <InfoCard 
              title="Formats VPN supportés" 
              content="Types de fichiers VPN que notre outil peut analyser"
              icon="📁"
              color="green"
            >
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>OpenVPN (.ovpn, .conf)</strong> - Configurations et certificats</li>
                <li><strong>PPTP</strong> - Fichiers de configuration Point-to-Point Tunneling Protocol</li>
                <li><strong>L2TP/IPSec</strong> - Configurations Layer 2 Tunneling Protocol</li>
                <li><strong>IKEv2</strong> - Fichiers Internet Key Exchange version 2</li>
                <li><strong>WireGuard</strong> - Configurations du protocole moderne WireGuard</li>
                <li><strong>Formats propriétaires</strong> - Incluant les fichiers .hat et autres formats spécifiques</li>
              </ul>
            </InfoCard>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard 
              title="Taux de réussite" 
              value="85%" 
              description="Pour les formats standards"
              icon="📊"
              color="green"
            />
            <StatCard 
              title="Méthodes d'analyse" 
              value="6+" 
              description="Techniques complémentaires"
              icon="🔍"
              color="blue"
            />
            <StatCard 
              title="Temps moyen" 
              value="< 5 min" 
              description="Par fichier analysé"
              icon="⏱️"
              color="purple"
            />
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-8">
            <h3 className="text-lg font-semibold text-yellow-800">Utilisation éthique</h3>
            <p className="text-yellow-700">
              Cette méthodologie est partagée à des fins éducatives uniquement. L'analyse de fichiers VPN 
              sans autorisation appropriée peut être illégale. Nous encourageons l'utilisation de ces techniques 
              uniquement sur vos propres fichiers ou dans un cadre autorisé.
            </p>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-12">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Décryptage Fichier VPN - Créé à des fins éducatives uniquement
          </p>
        </div>
      </footer>
    </div>
  );
}
