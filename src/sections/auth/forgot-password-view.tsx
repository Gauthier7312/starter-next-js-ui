'use client';

import FormProvider, { RHFTextField } from '@/components/hook-form';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { LoadinButton } from '@/components/loadin-button';
import Image from 'next/image';

const formSchema = z.object({
  email: z
    .string()
    .email('Veuillez entrer une adresse email valide')
    .nonempty('L&apos;adresse email est requise'),
});

export default function ForgotPasswordView() {
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    console.log('Données soumises :', data);
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Card className="w-full max-w-md p-4 space-y-5">
          <div className="space-y-2">
            <h1 className="text-2xl text-primary-first font-bold">Logo</h1>

            <Separator />

            <div className="flex flex-row space-x-2 items-center">
              <Image alt="svg" src="/forgot.svg" width={28} height={28} />

              <h1 className="text-2xl text-primary-first font-bold">
                Mot de passe{' '}
                <span className="text-secondary-first">oublié</span>{' '}
              </h1>
            </div>

            <p className="text-gray-600 text-sm">
              Veuillez entrer votre adresse email pour recevoir un lien de
              réinitialisation de mot de passe.
            </p>
            <Separator />
          </div>

          <RHFTextField
            type="email"
            placeholder="email"
            name="email"
            label="Adresse Email"
          />

          <LoadinButton
            size="lg"
            variant="default"
            type="submit"
            className="bg-primary-first text-white w-full focus:ring-primary-first hover:bg-primary-first"
            isLoading={isSubmitting}
          >
            Envoyer une demande
          </LoadinButton>

          <p className="text-center font-medium text-xs text-gray-500">
            <Link href="/auth/login">
              Retour à la{' '}
              <span className="text-secondary-first">connexion</span>
            </Link>
          </p>
        </Card>
      </FormProvider>
    </div>
  );
}
