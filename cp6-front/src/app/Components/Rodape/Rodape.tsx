import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; 2024 Minha Aplicação. Todos os direitos reservados.</p>
        <nav className="space-x-4">
          <Link href="/privacy-policy">
            <a className="hover:text-gray-400">Política de Privacidade</a>
          </Link>
          <Link href="/terms">
            <a className="hover:text-gray-400">Termos de Serviço</a>
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;