import { useAuth } from '@hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

export function SignOutPage() {
  const navigation = useNavigation();
  const { signOut } = useAuth();

  useEffect(() => {
    signOut();
  }, []);

  return null;
}
