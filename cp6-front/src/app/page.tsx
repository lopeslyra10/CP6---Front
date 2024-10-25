import ImgProva from "@/Img/foto-prova.png";
import Image from "next/image";

 
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8 pb-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Avaliações</h1>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6 max-w-xl w-full text-center">
        <Image src={ImgProva} alt="Foto de prova" width={100} height={100} className="mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-gray-700">CheckPoints</h3>
        <p className="text-gray-600 mt-2">
          O CheckPoints é uma avaliação feita durante o semestre para cada disciplina, onde o estudante tem direito a 3 e a menor nota é descartada ao calcular a média.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6 max-w-xl w-full text-center">
        <Image src={ImgProva} alt="Foto de prova" width={100} height={100} className="mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-gray-700">Global Solution</h3>
        <p className="text-gray-600 mt-2">
          A Global Solution é uma avaliação realizada uma vez por semestre para aplicar conhecimento em projetos de maior peso que os CheckPoints.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 max-w-xl w-full text-center">
        <Image src={ImgProva} alt="Foto de prova" width={100} height={100} className="mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-gray-700">Challenger Sprints</h3>
        <p className="text-gray-600 mt-2">
          O Challenger Sprints simula uma demanda de mercado, onde empresas parceiras da FIAP propõem problemas reais para os alunos solucionarem até o final do ano. Os melhores projetos competem por prêmios e possíveis contratações da empresa parceira.
        </p>
      </div>


    </div>
  );
}