import { LogoLg } from '@assets/logoLg';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { Pressable, ScrollView, Text, VStack } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

// import LogoSvg from '@assets/logoLg.svg';
// const Logo = LogoSvg;
export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} bg="$gray700">
        <VStack
          flex={1}
          justifyContent="center"
          alignItems="center"
          borderRadius="$3xl"
          bg="$gray600"
        >
          <VStack
            width="$48"
            justifyContent="center"
            alignItems="center"
            mb="$16"
          >
            <LogoLg />

            <Text
              mb="$1"
              fontSize="$3xl"
              color="$gray100"
              fontFamily="$heading"
              letterSpacing="$xs"
            >
              marketspace
            </Text>
            <Text mb="$4" fontSize="$xs" color="$gray300">
              Seu espaço de compra e venda
            </Text>
          </VStack>

          <VStack w="$full" px="$12" alignItems="center">
            <Text mb="$4" fontSize="$sm" color="$gray200">
              Acesse sua conta
            </Text>

            <VStack w="$full" mb="$4">
              <Input placeholder="E-mail" />
              <Input placeholder="Senha" type="password" />
            </VStack>

            <Button title="Entrar" variant="primary" onPress={() => {}} />
          </VStack>
        </VStack>

        <VStack
          justifyContent="center"
          alignItems="center"
          bg="$gray700"
          px="$12"
          py="$20"
        >
          <Text mb="$4" fontSize="$sm" color="$gray200">
            Ainda não tem acesso?
          </Text>

          <Button
            title="Criar uma conta"
            onPress={() => {
              navigation.navigate('signUp');
            }}
          />
        </VStack>
      </VStack>
    </ScrollView>
  );
}
