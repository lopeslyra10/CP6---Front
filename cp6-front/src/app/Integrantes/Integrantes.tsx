import imgLucas from "@/Img/foto-lucas.jpeg";
import imgAugusto from "@/Img/foto-augusto.jpeg";
import imgMatheus from "@/Img/foto-matheus.jpeg";
import Image from "next/image";
import Link from "next/link";

export default function Integrantes(){
    document.title = "Integrantes";
    return(
        <div>
    <h1>Turma 1TDSPY</h1>
      <h2>Integrantes do Grupo</h2>
      <div className="integrante">
        <h3>Integrante 1</h3>
        <p>Nome: Augusto</p>
        <p>Sobrenome: Lopes Lyra</p>
        <p>RM: 555592</p>
        <p>Link do repositório: Clique <a href="https://github.com/lopeslyra10"
            target="_blank">AQUI.</a></p>
        <Image src={imgAugusto} alt="Foto do Augusto" width={300}/>
        </div>
        <div>
        <h3>Integrante 2</h3>
        <p>Nome: Lucas</p>
        <p>Sobrenome: Barreto Consentino</p>
        <p>RM: 5557107</p>
        <p>Link do repositório: Clique <a href="https://github.com/Coutinh00"
            target="_blank">AQUI.</a></p>
        <Image src={imgLucas} alt="Foto do Lucas" width={300}/>
      </div>
      <div>
      <h3>Integrante 3</h3>
        <p>Nome: Matheus </p>
        <p>Sobrenome: de Lima Martins</p>
        <p>RM: 556572</p>
        <p>Link do repositório: Clique <a href="https://github.com/limonadadoce"
            target="_blank">AQUI.</a></p>
        <Image src={imgMatheus} alt="Foto do Lucas" width={300}/>
      </div>
      <p> <Link href="/">Home</Link></p>

    </div>
    )


}