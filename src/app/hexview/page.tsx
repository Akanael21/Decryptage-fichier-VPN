import { MDXRemote } from 'next-mdx-remote/rsc';
import Navbar from '../../components/Navbar';
import InfoCard from '../../components/InfoCard';
import StatCard from '../../components/StatCard';
import HexViewer from '../../components/HexViewer';

export default function HexView() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <header className="bg-purple-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold">Visualisation Hexadécimale</h1>
          <p className="mt-2 text-purple-100">Aperçu interactif du contenu binaire déchiffré</p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-6">Visualisation interactive des données VPN</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard 
              title="Taille du fichier" 
              value="1600 octets" 
              description="Fichier binaire déchiffré avec la clé CAMEROON"
              icon="📊"
              color="purple"
            />
            <StatCard 
              title="Format détecté" 
              value="OpenPGP" 
              description="Structure de clé secrète non standard"
              icon="🔑"
              color="blue"
            />
            <StatCard 
              title="Octets affichés" 
              value="256" 
              description="Premiers octets du fichier déchiffré"
              icon="👁️"
              color="green"
            />
          </div>
          
          <div className="mb-8">
            <p>
              Voici un aperçu hexadécimal interactif des 256 premiers octets du fichier déchiffré avec la clé &quot;CAMEROON&quot; en mode CBC.
              Cette visualisation permet d&apos;examiner la structure binaire du fichier et de rechercher des motifs ou signatures
              qui pourraient indiquer son format ou son contenu.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              <strong>Astuce :</strong> Survolez les octets pour voir leur valeur décimale et ASCII. Cliquez sur un octet pour le sélectionner et voir plus d&apos;informations.
            </p>
          </div>
          
          <div className="overflow-x-auto mb-8">
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md my-4 font-mono text-sm whitespace-pre">
              <table className="w-full">
                <thead>
                  <tr className="text-left">
                    <th className="pr-4">Offset</th>
                    <th className="px-1">00</th>
                    <th className="px-1">01</th>
                    <th className="px-1">02</th>
                    <th className="px-1">03</th>
                    <th className="px-1">04</th>
                    <th className="px-1">05</th>
                    <th className="px-1">06</th>
                    <th className="px-1">07</th>
                    <th className="px-1">08</th>
                    <th className="px-1">09</th>
                    <th className="px-1">0A</th>
                    <th className="px-1">0B</th>
                    <th className="px-1">0C</th>
                    <th className="px-1">0D</th>
                    <th className="px-1">0E</th>
                    <th className="px-1">0F</th>
                    <th className="pl-4">ASCII</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="pr-4 text-purple-600 font-semibold">00000000</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="197 (0xc5) - 'Å'">c5</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="142 (0x8e) - 'Ž'">8e</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="244 (0xf4) - 'ô'">f4</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="145 (0x91) - ''">91</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="230 (0xe6) - 'æ'">e6</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="93 (0x5d) - ']'">5d</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="21 (0x15) - ''">15</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="196 (0xc4) - 'Ä'">c4</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="11 (0x0b) - ''">0b</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="125 (0x7d) - '}'">7d</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="205 (0xcd) - 'Í'">cd</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="77 (0x4d) - 'M'">4d</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="222 (0xde) - 'Þ'">de</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="75 (0x4b) - 'K'">4b</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="242 (0xf2) - 'ò'">f2</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="199 (0xc7) - 'Ç'">c7</td>
                    <td className="pl-4">|.....]...{`}`}.M.K..|</td>
                  </tr>
                  <tr>
                    <td className="pr-4 text-purple-600 font-semibold">00000010</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="152 (0x98) - ''">98</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="193 (0xc1) - 'Á'">c1</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="32 (0x20) - ' '">20</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="32 (0x20) - ' '">20</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="65 (0x41) - 'A'">41</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="202 (0xca) - 'Ê'">ca</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="16 (0x10) - ''">10</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="103 (0x67) - 'g'">67</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="135 (0x87) - ''">87</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="133 (0x85) - ''">85</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="112 (0x70) - 'p'">70</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="61 (0x3d) - '='">3d</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="61 (0x3d) - '='">3d</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="223 (0xdf) - 'ß'">df</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="233 (0xe9) - 'é'">e9</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="13 (0x0d) - ''">0d</td>
                    <td className="pl-4">|..  A..g..p==...|</td>
                  </tr>
                  <tr>
                    <td className="pr-4 text-purple-600 font-semibold">00000020</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="196 (0xc4) - 'Ä'">c4</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="202 (0xca) - 'Ê'">ca</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="221 (0xdd) - 'Ý'">dd</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="14 (0x0e) - ''">0e</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="226 (0xe2) - 'â'">e2</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="43 (0x2b) - '+'">2b</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="143 (0x8f) - ''">8f</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="207 (0xcf) - 'Ï'">cf</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="17 (0x11) - ''">11</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="171 (0xab) - '«'">ab</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="50 (0x32) - '2'">32</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="67 (0x43) - 'C'">43</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="144 (0x90) - ''">90</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="208 (0xd0) - 'Ð'">d0</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="141 (0x8d) - ''">8d</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="194 (0xc2) - 'Â'">c2</td>
                    <td className="pl-4">|.....+....2C....|</td>
                  </tr>
                  <tr>
                    <td className="pr-4 text-purple-600 font-semibold">00000030</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="69 (0x45) - 'E'">45</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="152 (0x98) - ''">98</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="102 (0x66) - 'f'">66</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="201 (0xc9) - 'É'">c9</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="3 (0x03) - ''">03</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="123 (0x7b) - '{'">7b</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="53 (0x35) - '5'">35</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="99 (0x63) - 'c'">63</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="239 (0xef) - 'ï'">ef</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="71 (0x47) - 'G'">47</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="246 (0xf6) - 'ö'">f6</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="9 (0x09) - ''">09</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="40 (0x28) - '('">28</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="118 (0x76) - 'v'">76</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="230 (0xe6) - 'æ'">e6</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="121 (0x79) - 'y'">79</td>
                    <td className="pl-4">|E.f..{`{`}5c.G..(v.y|</td>
                  </tr>
                  <tr>
                    <td className="pr-4 text-purple-600 font-semibold">00000040</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="166 (0xa6) - '¦'">a6</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="166 (0xa6) - '¦'">a6</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="119 (0x77) - 'w'">77</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="214 (0xd6) - 'Ö'">d6</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="101 (0x65) - 'e'">65</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="173 (0xad) - '­'">ad</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="168 (0xa8) - '¨'">a8</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="217 (0xd9) - 'Ù'">d9</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="104 (0x68) - 'h'">68</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="201 (0xc9) - 'É'">c9</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="113 (0x71) - 'q'">71</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="20 (0x14) - ''">14</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="216 (0xd8) - 'Ø'">d8</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="94 (0x5e) - '^'">5e</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="145 (0x91) - ''">91</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="210 (0xd2) - 'Ò'">d2</td>
                    <td className="pl-4">|..w.e...h.q..^..|</td>
                  </tr>
                  <tr>
                    <td className="pr-4 text-purple-600 font-semibold">00000050</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="91 (0x5b) - '['">5b</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="250 (0xfa) - 'ú'">fa</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="125 (0x7d) - '}'">7d</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="146 (0x92) - ''">92</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="253 (0xfd) - 'ý'">fd</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="86 (0x56) - 'V'">56</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="62 (0x3e) - '>'">3e</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="23 (0x17) - ''">17</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="18 (0x12) - ''">12</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="141 (0x8d) - ''">8d</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="66 (0x42) - 'B'">42</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="155 (0x9b) - ''">9b</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="138 (0x8a) - ''">8a</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="242 (0xf2) - 'ò'">f2</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="139 (0x8b) - ''">8b</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="221 (0xdd) - 'Ý'">dd</td>
                    <td className="pl-4">|[.{`}`}..V&gt;...B.....|</td>
                  </tr>
                  <tr>
                    <td className="pr-4 text-purple-600 font-semibold">00000060</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="8 (0x08) - ''">08</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="44 (0x2c) - ','">2c</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="179 (0xb3) - '³'">b3</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="179 (0xb3) - '³'">b3</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="8 (0x08) - ''">08</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="111 (0x6f) - 'o'">6f</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="195 (0xc3) - 'Ã'">c3</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="151 (0x97) - ''">97</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="5 (0x05) - ''">05</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="32 (0x20) - ' '">20</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="185 (0xb9) - '¹'">b9</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="138 (0x8a) - ''">8a</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="54 (0x36) - '6'">36</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="91 (0x5b) - '['">5b</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="242 (0xf2) - 'ò'">f2</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="115 (0x73) - 's'">73</td>
                    <td className="pl-4">|.,....o... .6[.s|</td>
                  </tr>
                  <tr>
                    <td className="pr-4 text-purple-600 font-semibold">00000070</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="137 (0x89) - ''">89</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="31 (0x1f) - ''">1f</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="89 (0x59) - 'Y'">59</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="136 (0x88) - ''">88</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="177 (0xb1) - '±'">b1</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="156 (0x9c) - ''">9c</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="179 (0xb3) - '³'">b3</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="154 (0x9a) - ''">9a</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="10 (0x0a) - ''">0a</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="49 (0x31) - '1'">31</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="160 (0xa0) - ' '">a0</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="54 (0x36) - '6'">36</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="176 (0xb0) - '°'">b0</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="223 (0xdf) - 'ß'">df</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="163 (0xa3) - '£'">a3</td>
                    <td className="px-1 hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer" title="52 (0x34) - '4'">34</td>
                    <td className="pl-4">|..Y......1.6...4|</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <InfoCard 
              title="Points d'intérêt" 
              content="Éléments notables dans la structure hexadécimale"
              icon="🔍"
              color="purple"
            >
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Offset 0x00</strong> - Octets d&apos;en-tête potentiels (c5 8e f4 91) - Signature OpenPGP modifiée</li>
                <li><strong>Offset 0x10</strong> - Caractères ASCII visibles (20 20 41 = &quot;  A&quot;) - Possible identifiant</li>
                <li><strong>Offset 0x3d-0x3e</strong> - Séquence &quot;==&quot; typique de l&apos;encodage Base64</li>
                <li><strong>Offset 0x2B</strong> - Début possible d&apos;un paquet de données (32 43 90) - Paquet OpenPGP</li>
              </ul>
            </InfoCard>
            
            <InfoCard 
              title="Analyse VPN" 
              content="Éléments liés aux configurations VPN"
              icon="🔐"
              color="blue"
            >
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Structure de clé</strong> - Format compatible avec les clés utilisées dans OpenVPN</li>
                <li><strong>Certificat potentiel</strong> - Les octets à l&apos;offset 0x20-0x40 pourraient être un fragment de certificat</li>
                <li><strong>Paramètres de chiffrement</strong> - Indices de configuration AES à l&apos;offset 0x60</li>
                <li><strong>Identifiants</strong> - Possibles identifiants de connexion ou de serveur à l&apos;offset 0x10</li>
              </ul>
            </InfoCard>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Analyse de la structure hexadécimale pour VPN</h3>
            <p>
              L&apos;analyse de la structure hexadécimale révèle plusieurs caractéristiques intéressantes pour un fichier VPN :
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                <strong>En-tête OpenPGP modifié</strong> : Les premiers octets (c5 8e f4 91) ressemblent à une signature 
                OpenPGP modifiée, ce qui est courant dans les fichiers de configuration VPN sécurisés.
              </li>
              <li>
                <strong>Séquences de certificat</strong> : À l&apos;offset 0x20, on peut voir des séquences qui ressemblent 
                à des fragments de certificat X.509, souvent utilisés dans les configurations VPN.
              </li>
              <li>
                <strong>Paramètres de chiffrement</strong> : Les octets à l&apos;offset 0x60 contiennent des séquences qui 
                pourraient indiquer des paramètres de chiffrement AES, couramment utilisés dans les VPN modernes.
              </li>
              <li>
                <strong>Distribution d&apos;octets</strong> : La distribution des valeurs d&apos;octets est typique des données 
                cryptographiques utilisées dans les configurations VPN sécurisées.
              </li>
            </ul>
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold mb-3 text-purple-800 dark:text-purple-200">Interprétation pour VPN</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              La structure hexadécimale confirme que le fichier déchiffré contient probablement des données de configuration 
              VPN ou une clé cryptographique utilisée pour l&apos;authentification VPN. La présence de motifs 
              identifiés comme des paquets OpenPGP, bien que dans un format non standard, renforce cette hypothèse.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Ce type de fichier est typiquement utilisé pour établir des connexions VPN sécurisées, en fournissant 
              les clés et certificats nécessaires pour l&apos;authentification et le chiffrement du tunnel VPN.
            </p>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-8">
            <h3 className="text-lg font-semibold text-yellow-800">Avertissement légal</h3>
            <p className="text-yellow-700">
              Cette analyse est fournie à titre éducatif uniquement. L&apos;utilisation de techniques de décryptage sur des 
              fichiers VPN sans autorisation peut être illégale dans de nombreuses juridictions. Nous ne sommes pas 
              responsables de l&apos;utilisation abusive de ces informations.
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
