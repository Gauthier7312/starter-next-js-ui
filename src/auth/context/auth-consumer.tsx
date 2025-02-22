'use client';

import Loading from '@/app/dashboard/loading';
import { AuthContext } from './auth-context';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export function AuthConsumer({ children }: Props) {
  return (
    <AuthContext.Consumer>
      {(auth) => (auth.loading ? <Loading /> : children)}
    </AuthContext.Consumer>
  );
}
