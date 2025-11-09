import { Text, VStack } from '@gluestack-ui/themed';
import { useAuth } from '@hooks/useAuth';

export function Home() {
  const { user } = useAuth();
  const { name, avatar_url } = user;

  return (
    <VStack>
      <Text>HOME SCREEN</Text>
      <Text>Welcome, {name}!</Text>
      <Text>Your avatar URL is: {avatar_url}</Text>
    </VStack>
  );
}
