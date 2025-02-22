import Iconify from '@/components/iconify';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CalendarDays, Coins, MapPinHouse } from 'lucide-react';
import Image from 'next/image';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';

export default function CadreJobItem() {
  return (
    <Card className="p-4 border space-y-3">
      <div className="space-y-2">
        <div className="flex flex-row justify-start items-center space-x-2 relative">
          <div className="p-1 border border-gray-200 rounded-sm">
            <Image src="../forgot.svg" alt="images" width={38} height={38} />
          </div>

          <div>
            <h5 className="text-base font-semibold text-primary-first">
              Senior UI/UX Designer
            </h5>
            <p className="font-normal text-sm text-secondary-first">Twitter</p>
          </div>

          <div className="absolute top-0 right-0">
            <Iconify
              icon="carbon:bookmark-filled"
              // icon="carbon:bookmark"
              className="w-6 h-6 text-secondary-first cursor-pointer"
            />
          </div>
        </div>

        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. illo earum ab
          sunt pariatur eligendi...
        </p>
      </div>

      <Separator />

      <div className="flex flex-row justify-start space-x-4 items-center">
        <p className="bg-gray-200 p-1 border rounded-sm text-sm text-primary-first font-medium">
          Full-time
        </p>
        <p className="bg-gray-200 p-1 border rounded-sm text-sm text-primary-first font-medium">
          1-3 years
        </p>
        <p className="bg-gray-200 p-1 border rounded-sm text-sm text-primary-first font-medium">
          Onsite
        </p>
      </div>

      <div className="space-y-2">
        <div className="flex flex-row justify-start items-center space-x-2">
          <div className="bg-gray-200 p-1 text-primary-first rounded-sm">
            <Coins className="w-5 h-5" />
          </div>
          <p className="text-sm font-medium text-gray-600">$1200 - 5000</p>
        </div>

        <div className="flex flex-row justify-start items-center space-x-2">
          <div className="bg-gray-200 p-1 text-primary-first rounded-sm">
            <MapPinHouse className="w-5 h-5" />
          </div>
          <p className="text-sm font-medium text-gray-600">Gagnoa - rue 12</p>
        </div>

        {/* <div className="flex flex-row justify-start items-center space-x-2">
          <div className="bg-gray-200 p-1 text-primary-first rounded-sm">
            <Users className="w-5 h-5" />
          </div>
          <p className="text-sm font-medium text-gray-600">12 appliquants</p>
        </div> */}
        <p className="text-xs text-gray-400">Posté il y a 5min maintenant</p>
      </div>

      <Separator />

      <div className="flex flex-row justify-start items-center space-x-4">
        <DetailJobItem />

        <Button
          size="sm"
          className="bg-primary-first focus:ring-primary-first hover:bg-primary-first"
        >
          Postulez maintenant
        </Button>
      </div>
    </Card>
  );
}

function DetailJobItem() {
  return (
    <Sheet>
      <SheetTrigger className="cursor-default">
        <Button size="sm" variant="secondary" className="">
          Plus de détails
        </Button>
      </SheetTrigger>

      <SheetContent className="max-w-sm sm:max-w-xl h-full overflow-y-auto">
        <SheetHeader>
          {/* <SheetTitle>Are you absolutely sure?</SheetTitle> */}
          <SheetDescription>
            <div className="space-y-4 mt-4">
              <div className="flex flex-row justify-start items-center space-x-2 relative">
                <div className="p-1 border border-gray-200 rounded-sm">
                  <Image
                    src="../forgot.svg"
                    alt="images"
                    width={38}
                    height={38}
                  />
                </div>

                <div>
                  <h5 className="text-base font-semibold text-primary-first">
                    Senior UI/UX Designer
                  </h5>
                  <p className="font-normal text-sm text-secondary-first">
                    Twitter
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex flex-row justify-start space-x-6 items-center">
                <p className="bg-gray-200 p-1 border rounded-sm text-sm text-primary-first font-medium">
                  Full-time
                </p>
                <p className="bg-gray-200 p-1 border rounded-sm text-sm text-primary-first font-medium">
                  1-3 years
                </p>
                <p className="bg-gray-200 p-1 border rounded-sm text-sm text-primary-first font-medium">
                  Onsite
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex flex-row justify-start items-center space-x-2">
                  <div className="bg-gray-200 p-1 text-primary-first rounded-sm">
                    <Coins className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-medium text-gray-600">
                    $1200 - 5000
                  </p>
                </div>

                <div className="flex flex-row justify-start items-center space-x-2">
                  <div className="bg-gray-200 p-1 text-primary-first rounded-sm">
                    <MapPinHouse className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-medium text-gray-600">
                    Gagnoa - rue 12
                  </p>
                </div>

                <div className="flex flex-row justify-start items-center space-x-2">
                  <div className="bg-gray-200 p-1 text-primary-first rounded-sm">
                    <CalendarDays className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-medium text-gray-600">
                    Date de publication: 14/2/2025
                  </p>
                </div>

                <div className="flex flex-row justify-start items-center space-x-2">
                  <div className="bg-gray-200 p-1 text-primary-first rounded-sm">
                    <CalendarDays className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-medium text-gray-600">
                    Date d&apos;expiration: 14/2/2025
                  </p>
                </div>

                <div className="space-x-4 flex flex-row items-center justify-start pt-2">
                  <Button
                    size="sm"
                    className="bg-primary-first hover:bg-primary-first"
                  >
                    Postulez maintenant
                  </Button>
                  <Button size="sm" variant="secondary">
                    Sauvegader
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-1">
                <div className="text-base text-primary-first font-semibold">
                  Description de l&apos;emploi
                </div>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  in, praesentium ducimus ea iste officia magnam vel laudantium
                  aspernatur eos esse repellendus, voluptates perferendis
                  debitis omnis, perspiciatis necessitatibus voluptas ipsam!
                </p>
              </div>

              <div className="space-y-1">
                <div className="text-base text-primary-first font-semibold">
                  Responsabilités
                </div>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  in, praesentium ducimus ea iste officia magnam vel laudantium
                  aspernatur eos esse repellendus, voluptates perferendis
                  debitis omnis, perspiciatis necessitatibus voluptas ipsam!
                </p>
              </div>

              <div className="space-y-3">
                <div className="text-base text-primary-first font-semibold">
                  Compétences
                </div>
                <div className="flex flex-wrap justify-start space-x-2 items-center">
                  <p className="bg-gray-100 p-1 border rounded-sm text-sm text-primary-first font-normal mb-2">
                    HTML
                  </p>
                  <p className="bg-gray-100 p-1 border rounded-sm text-sm text-primary-first font-normal mb-2">
                    CSS
                  </p>
                  <p className="bg-gray-100 p-1 border rounded-sm text-sm text-primary-first font-normal mb-2">
                    JavaScript
                  </p>
                  <p className="bg-gray-100 p-1 border rounded-sm text-sm text-primary-first font-normal mb-2">
                    HTML
                  </p>
                  <p className="bg-gray-100 p-1 border rounded-sm text-sm text-primary-first font-normal mb-2">
                    CSS
                  </p>
                  <p className="bg-gray-100 p-1 border rounded-sm text-sm text-primary-first font-normal mb-2">
                    JavaScript
                  </p>
                  <p className="bg-gray-100 p-1 border rounded-sm text-sm text-primary-first font-normal mb-2">
                    HTML
                  </p>
                  <p className="bg-gray-100 p-1 border rounded-sm text-sm text-primary-first font-normal mb-2">
                    CSS
                  </p>
                  <p className="bg-gray-100 p-1 border rounded-sm text-sm text-primary-first font-normal mb-2">
                    JavaScript
                  </p>
                  <p className="bg-gray-100 p-1 border rounded-sm text-sm text-primary-first font-normal mb-2">
                    HTML
                  </p>
                  <p className="bg-gray-100 p-1 border rounded-sm text-sm text-primary-first font-normal mb-2">
                    CSS
                  </p>
                  <p className="bg-gray-100 p-1 border rounded-sm text-sm text-primary-first font-normal mb-2">
                    JavaScript
                  </p>
                </div>
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
