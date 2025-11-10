import { Text, VStack } from '@gluestack-ui/themed';
import { useAuth } from '@hooks/useAuth';
import defautAvatar from '@assets/Avatar.png';
import { UserPhoto } from '@components/UserPhoto';
import { api } from '@services/api';

export function Home() {
  const { user } = useAuth();
  const { name, avatar_url, avatar } = user;

  return (
    <VStack>
      <Text>HOME SCREEN</Text>
      <Text>Welcome, {name}!</Text>
      <Text>Your avatar URL is: {avatar_url}</Text>
      <Text>Your avatar is: {avatar}</Text>
      <UserPhoto
        source={
          user.avatar
            ? { uri: `${api.defaults.baseURL}/images/${user.avatar}` }
            : defautAvatar
        }
        size="sm"
      />
    </VStack>
  );
}
