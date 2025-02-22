import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import MainLayout from '@/layouts/main';
import { MapPin } from 'lucide-react';

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import CadreJobItem from './view/cadre-job-item';

export default function JobsView() {
  return (
    <MainLayout>
      <div className="container mx-auto my-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-1">
            <Filter />
          </div>
          <div className="lg:col-span-3 space-y-8">
            <JobList />

            <div className="space-y-4">
              <div className="flex flex-row justify-between items-center px-2">
                <p className="text-base font-medium text-primary-first">
                  Annonce de <span className="text-secondary-first">1.382</span>{' '}
                  emplois disponibles
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4">
                <div className="lg:col-span-1">
                  <CadreJobItem />
                </div>
                <div className="lg:col-span-1">
                  <CadreJobItem />
                </div>
                <div className="lg:col-span-1">
                  <CadreJobItem />
                </div>
                <div className="lg:col-span-1">
                  <CadreJobItem />
                </div>
                <div className="lg:col-span-1">
                  <CadreJobItem />
                </div>
                <div className="lg:col-span-1">
                  <CadreJobItem />
                </div>
                <div className="lg:col-span-1">
                  <CadreJobItem />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

function Filter() {
  return (
    <Card className="p-5 min-w-80 h-auto hidden lg:block lg:sticky lg:top-4 space-y-4">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-lg font-semibold ">Filtrer par</h2>
        <Button size="sm" variant="secondary">
          Réinitialiser
        </Button>
      </div>

      <Separator />

      <div className="space-y-4">
        <h6 className="text-base font-semibold">Trier par</h6>

        <div>
          <RadioGroup
            // onValueChange={field.onChange}
            // defaultValue={field.value}
            className="flex flex-col space-y-1"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="default"
                id="r1"
                className="checked:bg-secondary-first checked:border-secondary-first"
              />
              <label
                htmlFor="r1"
                className="text-sm text-gray-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Récentes
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="comfortable"
                id="r2"
                className="checked:bg-secondary-first checked:border-secondary-first"
              />
              <label
                htmlFor="r2"
                className="text-sm text-gray-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Ancien
              </label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h6 className="text-base font-semibold">Type d&apos;emploi</h6>

        <div className="grid grid-cols-2 gap-3">
          {DATA_TYPE_JOB.map((typeJob) => (
            <div key={typeJob.id} className="flex items-center space-x-2">
              <Checkbox
                id={typeJob.id}
                className="checked:bg-secondary-first checked:border-secondary-first"
              />
              <label
                htmlFor={typeJob.id}
                className="text-sm text-gray-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {typeJob.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h6 className="text-base font-semibold">Expériences</h6>

        <div className="grid grid-cols-2 gap-3">
          {DATA_TYPE_EXPERIENCE.map((typeExp) => (
            <div key={typeExp.id} className="flex items-center space-x-2">
              <Checkbox id={typeExp.id} />
              <label
                htmlFor={typeExp.id}
                className="text-sm text-gray-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {typeExp.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h6 className="text-base font-semibold">Niveau d&apos;études</h6>

        <div className="grid grid-cols-2 gap-3">
          {DATA_STUDENT.map((typeSchool) => (
            <div key={typeSchool.id} className="flex items-center space-x-2">
              <Checkbox id={typeSchool.id} />
              <label
                htmlFor={typeSchool.id}
                className="text-sm text-gray-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {typeSchool.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h6 className="text-base font-semibold">Remote/Sur place</h6>

        <div className="space-y-3">
          <RadioGroup
            // onValueChange={field.onChange}
            // defaultValue={field.value}
            className="flex flex-col space-y-1"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="remote" id="r3" />
              <label
                htmlFor="r3"
                className="text-sm text-gray-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remote
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="onsite" id="r4" />
              <label
                htmlFor="r4"
                className="text-sm text-gray-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Sur place
              </label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </Card>
  );
}

function JobList() {
  return (
    <Card className="p-4 py-6 w-full space-y-4">
      <div className="space-y-1">
        <h2 className="text-xl text-primary-first font-bold">
          Trouvez l&apos;emploi de vos{' '}
          <span className="text-secondary-first">rêves</span> ici
        </h2>
        <p className="text-sm text-gray-500">
          Explorez nos nouvelles opportunités d&apos;emploi pour découvrir et
          postuler pour le meilleur poste disponible aujourdhui!
        </p>
      </div>

      <Separator />

      <div className="w-full">
        <div className="flex flex-row items-center justify-start space-x-2">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MapPin className="h-5 w-5 text-gray-700" />
            </div>
            <Input
              placeholder="Mots clés, entreprise, post etc..."
              className="pl-10 border-primary-first shadow-none focus-visible:border-none focus:border-none "
            />
          </div>

          <Separator orientation="vertical" className="h-8 bg-gray-500" />

          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MapPin className="h-5 w-5 text-gray-700" />
            </div>
            <Input
              placeholder="Pays, ville, département..."
              className="pl-10 border-primary-first shadow-none focus-visible:border-none focus:border-none"
            />
          </div>

          <Button
            size="lg"
            variant="default"
            className="bg-primary-first text-white w-1/4"
          >
            Recherche
          </Button>
        </div>
      </div>
    </Card>
  );
}

const DATA_TYPE_JOB = [
  {
    id: 'full time',
    label: 'Temps plein',
  },
  {
    id: 'part time',
    label: 'Temps partiel',
  },
  {
    id: 'cdd',
    label: 'CDD',
  },
  {
    id: 'cdi',
    label: 'CDI',
  },
  {
    id: 'freelance',
    label: 'Freelance',
  },
  {
    id: 'stage',
    label: 'Stage',
  },
  {
    id: 'temporaire',
    label: 'Temporaire',
  },
  {
    id: 'benevole',
    label: 'Bénévole',
  },
] as const;

const DATA_TYPE_EXPERIENCE = [
  {
    id: 'entry',
    label: 'Débutant',
  },
  {
    id: 'junior',
    label: 'Junior',
  },
  {
    id: 'intermediaire',
    label: 'Intermédiaire',
  },
  {
    id: 'senior',
    label: 'Senior',
  },
  {
    id: 'lead',
    label: 'Lead',
  },
  {
    id: 'manager',
    label: 'Manager',
  },
] as const;

const DATA_STUDENT = [
  {
    id: 'none',
    label: 'Pas de diplôme',
  },
  {
    id: 'bac',
    label: 'BAC',
  },
  {
    id: 'bts',
    label: 'BTS/DUT',
  },
  {
    id: 'licence',
    label: 'Licence',
  },
  {
    id: 'master',
    label: 'Master',
  },
  {
    id: 'doc',
    label: 'Doctorat',
  },
];
