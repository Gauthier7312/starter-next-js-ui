'use client';

import FormProvider, { RHFTextField } from '@/components/hook-form';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { LoadinButton } from '@/components/loadin-button';
import { toast } from 'sonner';
// import { useAuthContext } from '@/auth/hooks';

type FormValuesProps = {
  password: string;
  email: string;
};

const formSchema = z.object({
  email: z
    .string()
    .email('Veuillez entrer une adresse email valide')
    .nonempty('L&apos;adresse email est requise'),
  password: z
    .string()
    .min(6, 'Le mot de passe doit contenir au moins 6 caractères')
    .nonempty('Le mot de passe est requis'),
});

const defaultValues: FormValuesProps = {
  email: '',
  password: '',
};

export default function LoginView() {
  // const { login } = useAuthContext();
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async () => {
    try {
      // await login?.(data.email, data.password);
    } catch (error) {
      toast.error(error.message);
    }
  });

  return (
    <div className="flex flex-col items-center justify-center pt-[10%] space-y-4">
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Card className="w-full max-w-md p-4 space-y-5">
          <div className="space-y-2">
            <h1 className="text-2xl text-primary-first font-bold">Logo</h1>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ad
              ipsam eius perferendis possimus, natus temporibus officia optio
              expedita illo.
            </p>
            <Separator />
          </div>

          <RHFTextField
            type="email"
            placeholder="email"
            name="email"
            label="Adresse Email"
          />

          <RHFTextField
            type="password"
            placeholder="*****"
            name="password"
            label="Mot de passe"
          />

          <div className="space-y-4">
            <Link href="/auth/forgot-password">
              <p className="flex flex-row justify-end font-medium text-xs text-gray-500">
                Mot de passe oublié !
              </p>
            </Link>

            <LoadinButton
              size="lg"
              variant="default"
              type="submit"
              className="bg-primary-first text-white w-full focus:ring-primary-first hover:bg-primary-first"
              isLoading={isSubmitting}
            >
              Se connecter
            </LoadinButton>

            <p className="text-center font-medium text-xs text-gray-500">
              Vous n&apos;avez pas de compte ?{' '}
              <Link href="/auth/register">
                <span className="text-secondary-first">Inscrivez-vous</span>
              </Link>
            </p>
          </div>
        </Card>
      </FormProvider>
    </div>
  );
}
