"use client";
import { useState } from 'react';

type Notas = {
  CheckPoints: number | null;
  ChallengerSprints: number | null;
  GlobalSolution: number | null;
};

const MediaTabela: React.FC = () => {
  const [notas, setNotas] = useState<Notas>({
    CheckPoints: null,
    ChallengerSprints: null,
    GlobalSolution: null,
  });

  const handleNotaChange = (disciplina: keyof Notas, value: string) => {
    const nota = parseFloat(value);

    if (nota >= 0 && nota <= 100) {
      setNotas((prevNotas) => ({ ...prevNotas, [disciplina]: nota }));
    } else if (value === '') {
      setNotas((prevNotas) => ({ ...prevNotas, [disciplina]: null }));
    }
  };

  const calcularMedia = () => {
    const notasValidas = Object.values(notas).filter((nota) => nota !== null) as number[];
    if (notasValidas.length === 0) return 'N/A';

    const soma = notasValidas.reduce((acc, curr) => acc + curr, 0);
    return (soma / notasValidas.length).toFixed(2);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Tabela de Médias</h1>
      <div className="overflow-x-auto w-full lg:w-1/2">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-4 text-center">Disciplina</th>
              <th className="p-4 text-center">Nota</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(notas).map((disciplina) => (
              <tr key={disciplina} className="border-b border-gray-300">
                <td className="p-4 text-center font-semibold">{disciplina}</td>
                <td className="p-4 text-center">
                  <input
                    type="number"
                    value={notas[disciplina as keyof Notas] ?? ''}
                    onChange={(e) => handleNotaChange(disciplina as keyof Notas, e.target.value)}
                    className="border border-gray-300 p-2 rounded w-full text-center"
                    placeholder="0-100"
                    min="0"
                    max="100"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8 w-full lg:w-1/2 text-center">
        <h2 className="text-xl font-semibold text-gray-700">Média Geral:</h2>
        <p className="text-lg text-gray-600">{calcularMedia()}</p>
      </div>
    </div>
  );
};

export default MediaTabela;
