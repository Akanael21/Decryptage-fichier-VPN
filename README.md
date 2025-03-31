# Décryptage Fichier VPN

Outil d'analyse et de décryptage de fichiers VPN avec interface web interactive. Ce projet combine une interface graphique pour visualiser et décrypter des fichiers chiffrés, notamment le fichier "WARRIOR_ULTIMATE_ULTRA.hat". L'application inclut un décodeur multi-algorithmes capable de traiter différents formats de chiffrement, une visualisation hexadécimale des données, et une documentation détaillée du processus d'analyse cryptographique.

## Fonctionnalités

- Analyse et décodage de fichiers VPN chiffrés
- Support pour multiples algorithmes de chiffrement (AES, DES, 3DES, Blowfish, ChaCha20, etc.)
- Compatibilité avec divers formats VPN (OpenVPN, PPTP, L2TP/IPSec, IKEv2, WireGuard)
- Visualisation hexadécimale interactive avec informations détaillées
- Interface web responsive développée avec Next.js et Tailwind CSS
- Documentation complète du processus d'analyse

## Avertissement Important

**Cet outil est fourni à titre éducatif uniquement.** L'utilisation de techniques de décryptage sur des fichiers VPN sans autorisation peut être illégale dans de nombreuses juridictions. Nous ne sommes pas responsables de l'utilisation abusive de ces informations.

## Technologies utilisées

- [Next.js](https://nextjs.org/) - Framework React pour le développement web
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitaire
- [TypeScript](https://www.typescriptlang.org/) - Superset JavaScript typé

## Installation

```bash
# Cloner le dépôt
git clone https://github.com/votre-nom-utilisateur/decryptage-fichier-vpn.git

# Accéder au répertoire du projet
cd decryptage-fichier-vpn

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

## Déploiement

### Déploiement local
```bash
# Construire l'application pour la production
npm run build

# Démarrer le serveur de production
npm run start
```

### Déploiement sur GitHub Pages

Pour déployer ce site sur GitHub Pages :

1. Dans le fichier `next.config.ts`, ajoutez :
```javascript
const nextConfig = {
  output: 'export',
  basePath: '/decryptage-fichier-vpn',
  images: {
    unoptimized: true,
  },
};
```

2. Construisez le site :
```bash
npm run build
```

3. Déployez le contenu du dossier `out` sur la branche `gh-pages` de votre dépôt GitHub.

## Structure du site

- **Page d'accueil** : Présentation de l'outil et résumé de l'analyse
- **Méthodologie** : Techniques et algorithmes utilisés pour l'analyse des fichiers VPN
- **Résultats** : Conclusions et interprétations des données extraites
- **Visualisation Hexadécimale** : Aperçu interactif du contenu binaire déchiffré

## Utilisation éthique

Ce projet est destiné à des fins éducatives et de recherche uniquement. L'analyse de fichiers VPN sans autorisation appropriée peut être illégale. Nous encourageons l'utilisation de ces techniques uniquement sur vos propres fichiers ou dans un cadre autorisé.

## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.
