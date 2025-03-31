import React from 'react';

interface HexViewerProps {
  data: string;
  startOffset?: number;
  bytesPerRow?: number;
  showAscii?: boolean;
}

const HexViewer: React.FC<HexViewerProps> = ({
  data,
  startOffset = 0,
  bytesPerRow = 16,
  showAscii = true,
}) => {
  // Fonction pour convertir un caractère en sa représentation ASCII affichable
  const toAscii = (byte: number): string => {
    if (byte >= 32 && byte <= 126) {
      return String.fromCharCode(byte);
    }
    return '.';
  };

  // Fonction pour formater l'offset en hexadécimal
  const formatOffset = (offset: number): string => {
    return offset.toString(16).padStart(8, '0');
  };

  // Fonction pour formater un byte en hexadécimal
  const formatByte = (byte: number): string => {
    return byte.toString(16).padStart(2, '0');
  };

  // Convertir la chaîne hexadécimale en tableau d'octets
  const hexToBytes = (hex: string): number[] => {
    const bytes: number[] = [];
    for (let i = 0; i < hex.length; i += 2) {
      bytes.push(parseInt(hex.substr(i, 2), 16));
    }
    return bytes;
  };

  // Convertir la chaîne de données en tableau d'octets
  const bytes = hexToBytes(data.replace(/\s/g, ''));

  // Calculer le nombre de lignes nécessaires
  const rows = Math.ceil(bytes.length / bytesPerRow);

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm font-mono">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="px-2 py-1 text-left">Offset</th>
            {Array.from({ length: bytesPerRow }, (_, i) => (
              <th key={i} className="px-1 py-1 text-center">
                {formatByte(i)}
              </th>
            ))}
            {showAscii && <th className="px-2 py-1 text-left">ASCII</th>}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }, (_, rowIndex) => {
            const rowOffset = startOffset + rowIndex * bytesPerRow;
            const rowBytes = bytes.slice(
              rowIndex * bytesPerRow,
              (rowIndex + 1) * bytesPerRow
            );
            
            return (
              <tr key={rowIndex} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="px-2 py-1 text-purple-600 font-semibold">
                  {formatOffset(rowOffset)}
                </td>
                
                {Array.from({ length: bytesPerRow }, (_, colIndex) => {
                  const byteIndex = rowIndex * bytesPerRow + colIndex;
                  const byte = byteIndex < bytes.length ? bytes[byteIndex] : null;
                  
                  return (
                    <td 
                      key={colIndex} 
                      className={`px-1 py-1 text-center ${
                        byte !== null 
                          ? 'hover:bg-purple-200 dark:hover:bg-purple-700 cursor-pointer' 
                          : ''
                      }`}
                      title={byte !== null ? `${byte} (0x${formatByte(byte)}) - '${toAscii(byte)}'` : ''}
                    >
                      {byte !== null ? formatByte(byte) : ''}
                    </td>
                  );
                })}
                
                {showAscii && (
                  <td className="px-2 py-1">
                    {rowBytes.map((byte, i) => toAscii(byte)).join('')}
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HexViewer;
