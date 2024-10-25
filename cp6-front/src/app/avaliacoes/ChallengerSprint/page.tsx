import { useState } from 'react';

function ChallengerSprints() {
  const [nota, setNota] = useState<number | null>(null);

  return (
    <div>
      <h2>Challenger Sprints</h2>
      <input
        type="number"
        value={nota ?? ''}
        onChange={(e) => setNota(Number(e.target.value))}
        placeholder="Insira a nota (0 a 100)"
        max={100}
        min={0}
      />
      {nota !== null && <p>Nota: {nota}</p>}
    </div>
  );

  console.log("Componente ChallengerSprints renderizado");
  return (
    <div>
      <h2>Notas de Challenger Sprints</h2>
      {/* Adicione conteúdo aqui */}
    </div>
  );
}

export default ChallengerSprints;