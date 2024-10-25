import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Minha Aplicação</h1>
        <nav className="space-x-4">
          <Link href="/">
            <a className="hover:text-gray-400">Início</a>
          </Link>
          <Link href="/about">
            <a className="hover:text-gray-400">Sobre</a>
          </Link>
          <Link href="/contact">
            <a className="hover:text-gray-400">Contato</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
