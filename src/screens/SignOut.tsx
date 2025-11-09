import { useAuth } from '@hooks/useAuth';
import { useEffect } from 'react';

export function SignOutPage() {
  const { signOut } = useAuth();

  useEffect(() => {
    signOut();
  }, []);

  return null;
}
