"use client"; 
import { useState } from 'react';

interface Notas {
  FrontEnd: number[];
  Java: number[];
  Python: number[];
  BancoDeDados: number[];
  Chatbot: number[];
  BusinessModel: number[];
}

const TabelaCursos: React.FC = () => {
  const [notas, setNotas] = useState<Notas>({
    FrontEnd: [0, 0, 0, 0],
    Java: [0, 0, 0, 0],
    Python: [0, 0, 0, 0],
    BancoDeDados: [0, 0, 0, 0],
    Chatbot: [0, 0, 0, 0],
    BusinessModel: [0, 0, 0, 0],
  });

  const handleNotaChange = (curso: keyof Notas, index: number, value: string) => {
    const updatedNotas = { ...notas };
    const nota = parseFloat(value);

    if (value === '') {
      updatedNotas[curso][index] = 0;
    } else if (nota >= 0 && nota <= 100) {
      updatedNotas[curso][index] = nota;
    }

    setNotas(updatedNotas);
  };

  const calcularMedia = (curso: keyof Notas): string => {
    const total = notas[curso].reduce((acc, nota) => acc + nota, 0);
    const media = total / notas[curso].length;
    return isNaN(media) || media === 0 ? 'N/A' : media.toFixed(2);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Tabela de Notas dos Cursos</h1>
      <div className="overflow-x-auto w-full lg:w-3/4">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-4 text-center">Curso</th>
              <th className="p-4 text-center">Semestre 1 - Nota 1</th>
              <th className="p-4 text-center">Semestre 1 - Nota 2</th>
              <th className="p-4 text-center">Semestre 2 - Nota 1</th>
              <th className="p-4 text-center">Semestre 2 - Nota 2</th>
              <th className="p-4 text-center">Média</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(notas).map((curso) => (
              <tr key={curso} className="border-b border-gray-300">
                <td className="p-4 text-center font-semibold">{curso}</td>
                {[0, 1, 2, 3].map((index) => (
                  <td key={index} className="p-4 text-center">
                    <input
                      type="number"
                      value={notas[curso as keyof Notas][index]}
                      onChange={(e) => handleNotaChange(curso as keyof Notas, index, e.target.value)}
                      className="border border-gray-300 p-2 rounded w-full text-center"
                      placeholder="0-100"
                      min="0"
                      max="100"
                    />
                  </td>
                ))}
                <td className="p-4 text-center font-semibold text-gray-600">
                  {calcularMedia(curso as keyof Notas)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabelaCursos;
