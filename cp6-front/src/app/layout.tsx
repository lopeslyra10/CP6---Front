import type { Metadata } from "next";
import "./globals.css";
import Cabecalho from "./Components/Cabecalho/Cabecalho";
import Rodape from "./Components/Rodape/Rodape";


export const metadata: Metadata = {
  title: "CP6 - Front",
  description: "CP6 desenvolvido por Augusto Lopes, Lucas Barreto e Matheus de Lima",
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  colorScheme: "light"
}

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {

  

  return (
    <html lang="pt-br">
      <body>
        <Cabecalho />
          {children}
        <Rodape />
       </body>
    </html>
  );
}
