import Image from "next/image";
import imgErro from "@/Img/img-404.jpg"
export default function NotFound() {
  return (
    <div>
        <h1>404: Page Not Found</h1>
        <h2>O recurso que você está tentando acessar não está disponível.</h2>

        <Image src={imgErro} alt="Página de Erro" width={200} height={50} placeholder="blur" blurDataURL="/blur.jpg" layout="responsive"/>
    </div>
  )
}
