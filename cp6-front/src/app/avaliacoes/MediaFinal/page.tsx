"use client"; // Adicione esta linha se necessário
import { useState } from 'react';

type Notas = {
  CheckPoints: number[];
  ChallengerSprints: number[];
  GlobalSolution: number[];
};

const MediaTabela: React.FC = () => {
  const [notas, setNotas] = useState<Notas>({
    CheckPoints: [0, 0, 0], // 3 notas para CheckPoints
    ChallengerSprints: [0, 0, 0], // 3 notas para Challenger Sprints
    GlobalSolution: [0, 0, 0], // 3 notas para Global Solution
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

  const calcularMedia = () => {
    const notasValidas = [
      ...notas.CheckPoints.filter(nota => nota > 0),
      ...notas.ChallengerSprints.filter(nota => nota > 0),
      ...notas.GlobalSolution.filter(nota => nota > 0),
    ]; // Junta todas as notas válidas

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
            <th className="border border-gray-300 p-2">Nota 1</th>
            <th className="border border-gray-300 p-2">Nota 2</th>
            <th className="border border-gray-300 p-2">Nota 3</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(notas).map((disciplina) => (
            <tr key={disciplina}>
              <td className="border border-gray-300 p-2">{disciplina}</td>
              {[0, 1, 2].map((index) => (
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
