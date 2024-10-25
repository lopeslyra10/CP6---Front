import Image from "next/image";
import imgLogo from "@/Img/foto-logo.png";
import Menu from "../Menu/Menu";

export default function Cabecalho() {
    return (
        <header className="cabecalho">
            <Image src={imgLogo} alt="Sacola" width={100} height={100} />
            <Menu />
        </header>
    )
}

