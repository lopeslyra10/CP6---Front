import React, { useState } from 'react';
import CheckPoints from '../avaliacoes/CheckPoints/page;
import ChallengerSprints from '../avaliacoes/ChallengerSprint/page';
import GlobalSolution from '../avaliacoes/GlobalSolution/page';

function MediaFinal() {
  const [mediaCheckPoints, setMediaCheckPoints] = useState<number | null>(null);
  const [notaChallenger, setNotaChallenger] = useState<number | null>(null);
  const [notaGlobal, setNotaGlobal] = useState<number | null>(null);

  const calcularMediaFinal = (): string => {
    if (mediaCheckPoints !== null && notaChallenger !== null && notaGlobal !== null) {
      const mediaFinal = (mediaCheckPoints + notaChallenger + notaGlobal) / 2;
      return mediaFinal.toFixed(2);
    }
    return 'Notas incompletas';
  };

  return (
    <div>
      <h1>Média Final</h1>
      <CheckPoints onChange={(media) => setMediaCheckPoints(media)} />
      <ChallengerSprints onChange={(nota) => setNotaChallenger(nota)} />
      <GlobalSolution onChange={(nota) => setNotaGlobal(nota)} />
      <p>Média Final: {calcularMediaFinal()}</p>
    </div>
  );
}

export default MediaFinal;