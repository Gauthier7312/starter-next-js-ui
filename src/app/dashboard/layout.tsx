'use client';

import { AuthGuard } from '@/auth/guard';
import DashboardLayout from '@/layouts/dashboard/layout';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <AuthGuard>
      <DashboardLayout>{children}</DashboardLayout>
    </AuthGuard>
  );
}
