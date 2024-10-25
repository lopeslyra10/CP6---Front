"use client"; // Adicione esta linha se necessário
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

    // Atualiza a nota se o valor estiver entre 0 e 100
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
    <div className="overflow-x-auto">
      <h1 className="text-2xl font-bold mb-4">Tabela de Notas dos Cursos</h1>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Curso</th>
            <th className="border border-gray-300 p-2">Nota</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(notas).map((curso) => (
            <tr key={curso}>
              <td className="border border-gray-300 p-2">{curso}</td>
              <td className="border border-gray-300 p-2">
                <input
                  type="number"
                  value={notas[curso as keyof Notas] ?? ''} // Garantindo que o valor não seja null
                  onChange={(e) => handleNotaChange(curso as keyof Notas, e.target.value)}
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
        <h2 className="text-xl font-bold">Média das Notas: {calcularMedia()}</h2>
      </div>
    </div>
  );
};

export default TabelaCursos;