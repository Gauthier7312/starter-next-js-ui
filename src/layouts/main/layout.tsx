import React from 'react';
import Header from './header';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col h-screen">
      <Header />

      <main className="flex-1 px-10">{children}</main>

      <footer className="border-t border-gray-300 text-center py-2">
        <p className="text-xs text-gray-600">
          &copy; {currentYear} Logo. All rights reserved. Accompagner votre
          parcours professionnel avec les meilleures opportunités et ressources.
        </p>
      </footer>
    </div>
  );
}
