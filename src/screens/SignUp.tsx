import { LogoLg } from '@assets/logoLg';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { Pressable, ScrollView, Text, VStack } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

import defautAvatar from '@assets/Avatar.png';
import { TouchableOpacity } from 'react-native';
import { UserPhoto } from '@components/UserPhoto';

export function SignUp() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack
        flex={1}
        justifyContent="center"
        alignItems="center"
        borderRadius="$3xl"
        bg="$gray600"
      >
        <VStack width="$64" justifyContent="center" alignItems="center" my="$4">
          <LogoLg width={65} />

          <Text
            mb="$1"
            fontSize="$xl"
            color="$gray100"
            fontFamily="$heading"
            letterSpacing="$xs"
          >
            Boas vindas!
          </Text>
          <Text mb="$2" fontSize="$xs" color="$gray300" textAlign="center">
            Crie sua conta e use o espaço para comprar itens variados e vender
            seus produtos{' '}
          </Text>
        </VStack>

        <VStack w="$full" px="$12" alignItems="center">
          <TouchableOpacity>
            <UserPhoto source={defautAvatar} />
          </TouchableOpacity>
          <VStack w="$full" mb="$2" mt="$3">
            <Input placeholder="Nome" />
            <Input placeholder="E-mail" />
            <Input placeholder="Telefone" />
            <Input placeholder="Senha" type="password" />
            <Input placeholder="Confirmar senha" type="password" />
          </VStack>

          <Button title="Criar conta" variant="dark" onPress={() => {}} />
          <Text mt="$10" mb="$2" fontSize="$sm" color="$gray200">
            Já tem uma conta?
          </Text>

          <Button
            title="Ir para login"
            onPress={() => {
              navigation.goBack();
            }}
          />
        </VStack>
      </VStack>
    </ScrollView>
  );
}
