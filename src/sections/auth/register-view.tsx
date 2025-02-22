'use client';

import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
// import StepOneRegister from './form/step-one-register';
// import { useCallback, useState } from 'react';
// import StepTwoRegister from './form/step-two-register';

export default function RegisterView() {
  // const [step, setStep] = useState<number>(1);

  // const [typeUser, setTypeUser] = useState<string>('');

  // const handleNextStep = useCallback(() => {
  //   setStep((prevStep) => prevStep + 1);
  // }, []);

  // const handlePrevStep = useCallback(() => {
  //   setStep((prevStep) => prevStep - 1);
  // }, []);

  // const handleTypeUser = useCallback(
  //   (type: string) => {
  //     setTypeUser(type);
  //     handleNextStep();
  //   },
  //   [handleNextStep]
  // );

  return (
    <div className="flex flex-col items-center justify-center pt-[8%] space-y-4">
      <Card className="w-full max-w-md p-4 space-y-5">
        <div className="space-y-2">
          <h1 className="text-2xl text-primary-first font-bold">Logo</h1>

          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
            reprehenderit quisquam corporis ex laborum excepturi t
          </p>

          <Separator />
        </div>

        {/* {step === 1 && <StepOneRegister onTypeUser={handleTypeUser} />} */}

        {/* {step === 2 && (
          <StepTwoRegister typeUser={typeUser} onPrevStep={handlePrevStep} />
        )} */}

        <p className="text-center font-medium text-xs text-gray-500">
          Vous avez un compte ?{' '}
          <Link href="/auth/login">
            <span className="text-secondary-first">Connectez-vous</span>
          </Link>
        </p>
      </Card>
    </div>
  );
}
