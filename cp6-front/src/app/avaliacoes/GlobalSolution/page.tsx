import { useState } from 'react';

function GlobalSolution() {
  const [nota, setNota] = useState<number | null>(null);

  return (
    <div>
      <h2>Global Solution</h2>
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
}

export default GlobalSolution;