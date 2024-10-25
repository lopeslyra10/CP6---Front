import imgLucas from "@/Img/foto-lucas.jpeg";
import imgAugusto from "@/Img/foto-augusto.jpeg";
import imgMatheus from "@/Img/foto-matheus.jpeg";
import Image from "next/image";
import Link from "next/link";


export default function Integrantes() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-bold mb-4">Turma 1TDSPY</h1>
            <h2 className="text-2xl font-semibold mb-6">Integrantes do Grupo</h2>

            <div className="bg-white shadow-md rounded-lg p-6 mb-4 w-full max-w-md text-center">
                <h3 className="text-xl font-semibold">Integrante 1</h3>
                <p>Nome: Augusto</p>
                <p>Sobrenome: Lopes Lyra</p>
                <p>RM: 555592</p>
                <p>
                    Link do repositório: Clique <a href="https://github.com/lopeslyra10" target="_blank" className="text-blue-500 hover:underline">AQUI.</a>
                </p>
                <Image src={imgAugusto} alt="Foto do Augusto" width={300} height={300} className="mt-4 rounded-md" />
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 mb-4 w-full max-w-md text-center">
                <h3 className="text-xl font-semibold">Integrante 2</h3>
                <p>Nome: Lucas</p>
                <p>Sobrenome: Barreto Consentino</p>
                <p>RM: 5557107</p>
                <p>
                    Link do repositório: Clique <a href="https://github.com/Coutinh00" target="_blank" className="text-blue-500 hover:underline">AQUI.</a>
                </p>
                <Image src={imgLucas} alt="Foto do Lucas" width={300} height={300} className="mt-4 rounded-md" />
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 mb-4 w-full max-w-md text-center">
                <h3 className="text-xl font-semibold">Integrante 3</h3>
                <p>Nome: Matheus</p>
                <p>Sobrenome: de Lima Martins</p>
                <p>RM: 556572</p>
                <p>
                    Link do repositório: Clique <a href="https://github.com/limonadadoce" target="_blank" className="text-blue-500 hover:underline">AQUI.</a>
                </p>
                <Image src={imgMatheus} alt="Foto do Matheus" width={300} height={300} className="mt-4 rounded-md" />
            </div>

            <Link href="/" className="mt-6 text-blue-500 hover:underline">Voltar para Home</Link>
        </div>
    );
}