import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import { CircleUserRound } from 'lucide-react';
import Link from 'next/link';
import LanguagePoppever from './language-poppever';

export default function Header() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center h-14">
        <div className="flex justify-start space-x-24 items-center">
          <div className="flex items-center">
            <Link href="/" legacyBehavior>
              <a className="text-xl font-bold text-primary-first">Logo</a>
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link href="/" legacyBehavior>
              <a className="text-primary-first text-sm hover:text-gray-500">
                Page d&apos;accueil
              </a>
            </Link>
            {/* <Link href="/jobs" legacyBehavior>
              <a className="text-primary-first text-sm hover:text-gray-500">
                Trouver un emploi
              </a>
            </Link>
            <Link href="/" legacyBehavior>
              <a className="text-primary-first text-sm hover:text-gray-500">
                Faqs
              </a>
            </Link> */}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <LanguagePoppever />

          <Separator orientation="vertical" className="h-4 bg-gray-400" />

          <Link href="/auth/login" legacyBehavior>
            <Button variant="ghost" size="default" className="font-normal">
              <CircleUserRound />
              Connexion
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
