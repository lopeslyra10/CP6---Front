import React from 'react';
import Link from 'next/link';

const Menu: React.FC = () => {
  return (
    <nav className="bg-gray-700 p-4 text-white">
      <ul className="flex justify-center space-x-6">
        <li>
          <Link href="/">
            <a className="hover:text-gray-300">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/checkpoints">
            <a className="hover:text-gray-300">CheckPoints</a>
          </Link>
        </li>
        <li>
          <Link href="/globalsolution">
            <a className="hover:text-gray-300">GlobalSolution</a>
          </Link>
        </li>
        <li>
          <Link href="/challengersprints">
            <a className="hover:text-gray-300">Challenger Sprints</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;