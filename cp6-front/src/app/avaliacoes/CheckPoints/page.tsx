"use client";

import { useState } from 'react';

type Notas = {
  FrontEnd: number[];
  Java: number[];
  Python: number[];
  BancoDeDados: number[];
  Chatbot: number[];
  BusinessModel: number[];
};

const TabelaCursos = () => {
  const [notas, setNotas] = useState<Notas>({
    FrontEnd: [0, 0, 0],
    Java: [0, 0, 0],
    Python: [0, 0, 0],
    BancoDeDados: [0, 0, 0],
    Chatbot: [0, 0, 0],
    BusinessModel: [0, 0, 0],
  });

  const handleNotaChange = (curso: keyof Notas, index: number, value: string) => {
    const updatedNotas = { ...notas };
    const nota = parseFloat(value);

    if (nota >= 0 && nota <= 10) {
      updatedNotas[curso][index] = nota;
    } else if (value === '') {
      updatedNotas[curso][index] = 0;
    }

    setNotas(updatedNotas);
  };

  const calcularMedia = (notasCurso: number[]) => {
    const notasValidas = notasCurso.filter((nota) => nota > 0);
    const soma = notasValidas.reduce((acc, nota) => acc + nota, 0);
    return (notasValidas.length > 0) ? (soma / notasValidas.length).toFixed(2) : '0.00';
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Tabela de Notas dos Cursos</h1>
      <div className="overflow-x-auto w-full lg:w-3/4">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-800 text-white text-left">
              <th className="p-4 text-center">Curso</th>
              <th className="p-4 text-center">Nota 1</th>
              <th className="p-4 text-center">Nota 2</th>
              <th className="p-4 text-center">Nota 3</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(notas).map((curso) => (
              <tr key={curso} className="border-b border-gray-300">
                <td className="p-4 text-center font-semibold">{curso}</td>
                {[0, 1, 2].map((index) => (
                  <td key={index} className="p-4 text-center">
                    <input
                      type="number"
                      value={notas[curso as keyof Notas][index]}
                      onChange={(e) => handleNotaChange(curso as keyof Notas, index, e.target.value)}
                      className="border border-gray-300 p-2 rounded w-full text-center"
                      placeholder="0-10"
                      min="0"
                      max="10"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8 w-full lg:w-3/4">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Médias</h2>
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-800 text-white text-left">
              <th className="p-4 text-center">Curso</th>
              <th className="p-4 text-center">Média</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(notas).map((curso) => (
              <tr key={curso} className="border-b border-gray-300">
                <td className="p-4 text-center font-semibold">{curso}</td>
                <td className="p-4 text-center">
                  {calcularMedia(notas[curso as keyof Notas])}
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
