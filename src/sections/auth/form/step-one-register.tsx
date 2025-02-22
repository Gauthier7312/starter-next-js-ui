import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function StepOneRegister({
  onTypeUser,
}: {
  onTypeUser: (type: string) => void;
}) {
  return (
    <>
      <div className="flex flex-row items-center space-x-2 justify-start">
        <span className="bg-gray-200 font-semibold text-primary-first rounded-full p-2 mr-2">
          1/2
        </span>
        <div className="space-y-0">
          <h2 className="text-sm font-normal text-primary-first">
            Êtes-vous un{' '}
            <span className="text-primary-first font-semibold">Récruteur</span>{' '}
            ou un{' '}
            <span className="text-primary-first font-semibold">Candidat</span> ?
          </h2>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <Button
          variant="ghost"
          className="border border-primary-first w-full"
          size="lg"
          onClick={() => onTypeUser('recruiter')}
        >
          Récruteur
        </Button>

        <Button
          variant="ghost"
          className="border border-primary-first w-full"
          size="lg"
          onClick={() => onTypeUser('candidate')}
        >
          Candidat
        </Button>
      </div>
    </>
  );
}
