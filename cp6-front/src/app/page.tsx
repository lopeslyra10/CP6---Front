import ImgProva from "@/Img/foto-prova.png";
import Image from "next/image";





export default function Home() {
  return (
<div>
    <h1>Avaliações</h1>
      <div className="">
      <Image src={ImgProva} alt="Foto de prova" width={100}/>
        <h3>CheckPoints</h3>
        <p>O CheckPoints é uma avaliação feita durante o semestre para cada diciplina, onde o estudante tem direito a 3 e a menos nota é descartada quando realizamos a média </p>
      
        </div>
        <div>
        <Image src={ImgProva} alt="Foto de prova" width={100}/>
        <h3>Globalsolution</h3>
        <p>A globalsolution é uma avaliação feita uma vez por semestre no intuito de ajudar os alunos pois essa nota tem um peso maior que o CheckPoints </p>
      </div>
      <div>
      
      </div>
      <Image src={ImgProva} alt="Foto de prova" width={100}/>
        <h3>Challengersprints</h3>
        <p>O challengersprints tem como objetivo ensinar o aluno como seria uma demanda no mercado de trabalho, pois uma das empresas parceiras da FIAP entrega uma problema real, e os alunos tem como objetivo desenvolver alguma solução até o final do ano </p>
        <p>onde os melhores grupos disputam para ver qual irá ganhar o prémio do NEXT com a possibilidade da empres aparceira comprar o projeto ou contratar os serviçõs</p>


    </div>
    )
  }