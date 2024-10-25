import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Student Portfolio</h1>
        </div>
      </header>
      <main className="container mx-auto p-4">
        {children}
      </main>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>© 2024 FIAP Student Portfolio</p>
      </footer>
    </div>
  );
};

export default Layout;
