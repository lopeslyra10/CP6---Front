"use client";
import { useState } from 'react';

type Notas = {
  FrontEnd: number | null;
  Java: number | null;
  Python: number | null;
  BancoDeDados: number | null;
  Chatbot: number | null;
  BusinessModel: number | null;
};

const TabelaCursos: React.FC = () => {
  const [notas, setNotas] = useState<Notas>({
    FrontEnd: null,
    Java: null,
    Python: null,
    BancoDeDados: null,
    Chatbot: null,
    BusinessModel: null,
  });

  const handleNotaChange = (curso: keyof Notas, value: string) => {
    const nota = parseFloat(value);

    setNotas((prevNotas) => ({
      ...prevNotas,
      [curso]: nota >= 0 && nota <= 100 ? nota : null,
    }));
  };

  const calcularMedia = () => {
    const totalNotas = Object.values(notas).filter((nota) => nota !== null) as number[];
    const soma = totalNotas.reduce((acc, curr) => acc + curr, 0);
    return totalNotas.length > 0 ? (soma / totalNotas.length).toFixed(2) : 'N/A';
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Tabela de Notas dos Cursos</h1>
      <div className="overflow-x-auto w-full lg:w-3/4">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-800 text-white text-left">
              <th className="p-4 text-center">Curso</th>
              <th className="p-4 text-center">Nota</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(notas).map((curso) => (
              <tr key={curso} className="border-b border-gray-300">
                <td className="p-4 text-center font-semibold">{curso}</td>
                <td className="p-4 text-center">
                  <input
                    type="number"
                    value={notas[curso as keyof Notas] ?? ''} 
                    onChange={(e) => handleNotaChange(curso as keyof Notas, e.target.value)}
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
      <div className="mt-8 w-full lg:w-3/4">
        <h2 className="text-xl font-semibold text-gray-700 text-center">
          Média das Notas: {calcularMedia()}
        </h2>
      </div>
    </div>
  );
};

export default TabelaCursos;
