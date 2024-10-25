"use client"; // Adicione esta linha se necessário
import { useState } from 'react';

type Notas = {
  CheckPoints: number[];
  ChallengerSprints: number[];
  GlobalSolution: number[];
};

const MediaTabela: React.FC = () => {
  const [notas, setNotas] = useState<Notas>({
    CheckPoints: [0, 0],
    ChallengerSprints: [0, 0],
    GlobalSolution: [0, 0],
  });

  const handleNotaChange = (disciplina: keyof Notas, index: number, value: string) => {
    const updatedNotas = { ...notas };
    const nota = parseFloat(value);
    
    // Verifica se a nota está entre 0 e 100
    if (nota >= 0 && nota <= 100) {
      updatedNotas[disciplina][index] = nota; // Atualiza a nota
    } else if (value === '') {
      updatedNotas[disciplina][index] = 0; // Reseta a nota se o campo estiver vazio
    }

    setNotas(updatedNotas);
  };

  const calcularMedia = (notas: number[]) => {
    const soma = notas.reduce((acc, curr) => acc + curr, 0);
    return (soma / notas.length).toFixed(2);
  };

  return (
    <div className="overflow-x-auto">
      <h1 className="text-2xl font-bold mb-4">Tabela de Médias</h1>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Disciplina</th>
            <th className="border border-gray-300 p-2">Nota 1</th>
            <th className="border border-gray-300 p-2">Nota 2</th>
            <th className="border border-gray-300 p-2">Média</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(notas).map((disciplina) => (
            <tr key={disciplina}>
              <td className="border border-gray-300 p-2">{disciplina}</td>
              {[0, 1].map((index) => (
                <td key={index} className="border border-gray-300 p-2">
                  <input
                    type="number"
                    value={notas[disciplina as keyof Notas][index]}
                    onChange={(e) => handleNotaChange(disciplina as keyof Notas, index, e.target.value)}
                    className="border border-gray-400 p-1 rounded w-full"
                    placeholder="0-100"
                    min="0"
                    max="100"
                  />
                </td>
              ))}
              <td className="border border-gray-300 p-2">
                {calcularMedia(notas[disciplina as keyof Notas])}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MediaTabela;