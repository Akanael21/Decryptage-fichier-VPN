import React from 'react';

type TimelineItemProps = {
  step: string;
  title: string;
  description: string;
  isLast?: boolean;
};

const TimelineItem: React.FC<TimelineItemProps> = ({ step, title, description, isLast = false }) => {
  return (
    <div className="relative flex items-start group">
      <div className="flex flex-col items-center mr-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-blue-600 bg-blue-100 text-blue-600 font-bold z-10">
          {step}
        </div>
        {!isLast && (
          <div className="w-px h-full bg-blue-300 group-hover:bg-blue-600 transition-colors duration-300"></div>
        )}
      </div>
      <div className="pb-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mt-1">{description}</p>
      </div>
    </div>
  );
};

export default function AnalysisTimeline() {
  return (
    <div className="py-6">
      <TimelineItem 
        step="1"
        title="Examen initial du fichier"
        description="Identification du fichier comme texte ASCII avec encodage Base64, analyse des caractéristiques du nom de fichier et de son extension non standard."
      />
      <TimelineItem 
        step="2"
        title="Décodage Base64"
        description="Conversion du contenu Base64 en fichier binaire de 1600 octets, sans format spécifique reconnaissable."
      />
      <TimelineItem 
        step="3"
        title="Tentatives de déchiffrement"
        description="Application de multiples algorithmes (AES, DES, XOR) avec différentes clés dérivées du nom du fichier, incluant des références au Cameroun."
      />
      <TimelineItem 
        step="4"
        title="Identification d'une structure OpenPGP"
        description="Découverte d'une structure ressemblant à une clé OpenPGP après déchiffrement avec la clé 'CAMEROON' en mode CBC."
      />
      <TimelineItem 
        step="5"
        title="Analyse de la structure binaire"
        description="Examen hexadécimal et recherche de chaînes de caractères pour tenter d'extraire des informations exploitables."
        isLast={true}
      />
    </div>
  );
}
