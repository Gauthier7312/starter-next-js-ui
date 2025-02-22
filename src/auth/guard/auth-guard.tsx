import { useEffect, useCallback, useState } from 'react';
// routes
// import { paths } from 'src/routes/paths';
// import { useRouter } from 'src/routes/hooks';
//
import { useAuthContext } from '../hooks';
import { paths } from '@/lib/paths';
import { useRouter } from 'next/navigation';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function AuthGuard({ children }: Props) {
  const router = useRouter();

  const { authenticated } = useAuthContext();

  const [checked, setChecked] = useState(false);

  const check = useCallback(() => {
    if (!authenticated) {
      const searchParams = new URLSearchParams({
        returnTo: window.location.pathname,
      }).toString();

      // const loginPath = loginPaths[method];

      const href = `${paths.login}?${searchParams}`;

      router.replace(href);
    } else {
      setChecked(true);
    }
  }, [authenticated, router]);

  useEffect(() => {
    check();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!checked) {
    return null;
  }

  return <>{children}</>;
}
