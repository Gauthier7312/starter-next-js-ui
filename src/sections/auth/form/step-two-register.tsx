import { Separator } from '@/components/ui/separator';
import React from 'react';
import RegisterUserCandidateForm from './register-user-condidate-form';
import RegisterUserEmployerForm from './register-user-employer-form';

export default function StepTwoRegister({
  typeUser,
  onPrevStep,
}: {
  typeUser: string;
  onPrevStep: VoidFunction;
}) {
  return (
    <>
      <div className="flex flex-row items-center space-x-2 justify-start">
        <span className="bg-gray-200 font-semibold text-primary-first rounded-full p-2 mr-2">
          2/2
        </span>
        <div className="space-y-0">
          <h2 className="text-sm font-normal text-primary-first">
            {typeUser === 'candidate'
              ? `Créez un profil et postulez aux offres d&apos;emploi.`
              : 'Créez un profil pour publiez des offres et trouvez les meilleurs talents.'}
          </h2>
        </div>
      </div>

      <Separator />

      <div className="space-y-2">
        {typeUser === 'candidate' && (
          <RegisterUserCandidateForm onPrevStep={onPrevStep} />
        )}

        {typeUser === 'recruiter' && (
          <RegisterUserEmployerForm onPrevStep={onPrevStep} />
        )}
      </div>
    </>
  );
}
