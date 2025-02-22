'use client';

import { GuestGuard } from '@/auth/guard';
import AuthLayout from '@/layouts/auth';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <GuestGuard>
      <AuthLayout>{children}</AuthLayout>
    </GuestGuard>
  );
}
