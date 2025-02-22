'use client';

import React, { useCallback } from 'react';
import { PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Iconify from '@/components/iconify';
import { useBoolean } from '@/hooks/use-boolean';
import { Popover } from '@radix-ui/react-popover';
import { useLocales } from '@/locales';
import { Button } from '@/components/ui/button';

function LanguagePoppever() {
  const locales = useLocales();
  const open = useBoolean();

  const handleChangeLang = useCallback(
    (newLang: string) => {
      locales.onChangeLang(newLang);
      open.onFalse();
    },
    [locales, open]
  );

  return (
    <div>
      <Popover open={open.value} onOpenChange={open.setValue}>
        <PopoverTrigger asChild>
          <Button variant="ghost" onClick={open.onTrue} size="sm">
            <Iconify icon="flagpack:fr" className="w-4 h-4" />
            <span className="text-sm">Fr</span>
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-16 p-1 space-y-1">
          <Button
            onClick={() => handleChangeLang('fr')}
            className="w-full"
            variant="ghost"
            size="sm"
          >
            <Iconify icon="flagpack:fr" className="w-4 h-4" />
            <span className="text-sm">Fr</span>
          </Button>
          <Button
            onClick={() => handleChangeLang('en')}
            className="w-full"
            variant="ghost"
            size="sm"
          >
            <Iconify icon="flagpack:gb-nir" className="w-4 h-4" />
            <span className="text-sm">En</span>
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default LanguagePoppever;
