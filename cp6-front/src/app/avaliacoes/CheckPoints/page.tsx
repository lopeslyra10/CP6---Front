import { useState } from 'react';

function CheckPoints() {
  const [notas, setNotas] = useState([0, 0, 0]);
  const [media, setMedia] = useState<number | null>(null);

  const calcularMedia = () => {
    const notasOrdenadas = [...notas].sort((a, b) => a - b).slice(1); // Remove a menor nota
    const soma = notasOrdenadas.reduce((acc, nota) => acc + nota, 0);
    setMedia(soma / notasOrdenadas.length);
  };

  return (
    <div>
      <h2>CheckPoints</h2>
      {notas.map((nota, index) => (
        <input
          key={index}
          type="number"
          value={nota}
          onChange={(e) => {
            const novaNota = [...notas];
            novaNota[index] = Number(e.target.value);
            setNotas(novaNota);
          }}
          placeholder={Nota ${index + 1}}
          max={100}
          min={0}
        />
      ))}
      <button onClick={calcularMedia}>Calcular Média</button>
      {media && <p>Média Final (descartando a menor nota): {media.toFixed(2)}</p>}
    </div>
  );
}

export default CheckPoints;