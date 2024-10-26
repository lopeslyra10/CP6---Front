"use client"
import { useState } from 'react';

type Notas = {
  CheckPoints: number | null;
  ChallengerSprints: number | null;
  GlobalSolution: number | null;
};

const MediaTabela: React.FC = () => {
  const [notas, setNotas] = useState<Notas>({
    CheckPoints: null, // Uma nota para CheckPoints
    ChallengerSprints: null, // Uma nota para Challenger Sprints
    GlobalSolution: null, // Uma nota para Global Solution
  });

  const handleNotaChange = (disciplina: keyof Notas, value: string) => {
    const nota = parseFloat(value);

    // Atualiza a nota se o valor estiver entre 0 e 100
    if (nota >= 0 && nota <= 100) {
      setNotas((prevNotas) => ({ ...prevNotas, [disciplina]: nota }));
    } else if (value === '') {
      setNotas((prevNotas) => ({ ...prevNotas, [disciplina]: null })); // Reseta a nota se o campo estiver vazio
    }
  };

  const calcularMedia = () => {
    const notasValidas = Object.values(notas).filter(nota => nota !== null) as number[]; // Junta todas as notas válidas

    if (notasValidas.length === 0) return 'N/A'; // Se não houver notas válidas, retorna 'N/A'

    const soma = notasValidas.reduce((acc, curr) => acc + curr, 0);
    return (soma / notasValidas.length).toFixed(2); // Calcula a média
  };
return (
    <div className="overflow-x-auto">
      <h1 className="text-2xl font-bold mb-4">Tabela de Médias</h1>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Disciplina</th>
            <th className="border border-gray-300 p-2">Nota</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(notas).map((disciplina) => (
            <tr key={disciplina}>
              <td className="border border-gray-300 p-2">{disciplina}</td>
              <td className="border border-gray-300 p-2">
                <input
                  type="number"
                  value={notas[disciplina as keyof Notas] ?? ''} // Garantindo que o valor não seja null
                  onChange={(e) => handleNotaChange(disciplina as keyof Notas, e.target.value)}
                  className="border border-gray-400 p-1 rounded w-full"
                  placeholder="0-100"
                  min="0"
                  max="100"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Média Geral:</h2>
        <p className="text-lg">{calcularMedia()}</p>
      </div>
    </div>
  );
};

export default MediaTabela;