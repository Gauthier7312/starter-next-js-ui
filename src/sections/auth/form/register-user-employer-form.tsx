/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useCreateUserApi } from '@/api/register/create-user-api';
import FormProvider, { RHFTextField } from '@/components/hook-form';
import { LoadinButton } from '@/components/loadin-button';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

export default function RegisterUserEmployerForm({
  onPrevStep,
}: {
  onPrevStep: VoidFunction;
}) {
  // const { mutateAsync: createUserApi } = useCreateUserApi();
  const formSchema = z
    .object({
      companyName: z
        .string()
        .nonempty('Le nom de l&apos;entreprise est requis'),
      email: z
        .string()
        .email('Veuillez entrer une adresse email valide')
        .nonempty('L&apos;adresse email est requise'),
      password: z
        .string()
        .min(6, 'Au moins 6 caractères')
        .nonempty('Le mot de passe est requis'),
      confirmation: z
        .string()
        .min(6, 'Au moins 6 caractères')
        .nonempty('Le mot de passe est requis'),
    })
    .refine((data) => data.password === data.confirmation, {
      message: 'Les mots de passe ne correspondent pas',
      path: ['confirmation'],
    });

  const defaultValues = {
    email: '',
    password: '',
    companyName: '',
    confirmation: '',
  };
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    // const formData = {
    //   email: data?.email,
    //   password: data?.password,
    //   companyName: data?.companyName,
    // };

    try {
      // await createUserApi?.(formData);
      toast.success('Votre compte a été crée avec succès.');
    } catch {
      toast.error('Une erreur est survenue.');
    }
  });

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <div className="space-y-4">
        <RHFTextField
          placeholder="entreprise..."
          name="companyName"
          label="Nom de la structure"
        />

        <RHFTextField
          type="email"
          placeholder="email"
          name="email"
          label="Adresse Email"
        />

        <div className="flex flex-row justify-between space-x-2">
          <RHFTextField
            type="password"
            placeholder="*****"
            name="password"
            label="Mot de passe"
          />
          <RHFTextField
            type="password"
            placeholder="*****"
            name="confirmation"
            label="Confirmation"
          />
        </div>
      </div>

      <div className="flex flex-row items-center space-x-3 justify-start mt-4">
        <Button
          size="lg"
          onClick={onPrevStep}
          className="bg-red-500 text-white w-1/3 focus:ring-primary-first"
        >
          Retour
        </Button>
        <LoadinButton
          size="lg"
          type="submit"
          isLoading={isSubmitting}
          className="bg-primary-first text-white w-full hover:bg-primary-first"
        >
          Terminer
        </LoadinButton>
      </div>
    </FormProvider>
  );
}
