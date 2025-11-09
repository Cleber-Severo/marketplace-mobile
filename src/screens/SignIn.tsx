import { LogoLg } from '@assets/logoLg';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import {
  Pressable,
  ScrollView,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAuth } from '@hooks/useAuth';

type FormData = {
  email: string;
  password: string;
};

const validationSchema = yup.object({
  email: yup
    .string()
    .required('E-mail é obrigatório')
    .email('E-mail inválido'),
  password: yup
    .string()
    .required('Senha é obrigatória')
    .min(6, 'Senha deve ter pelo menos 6 caracteres'),
});

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const { signIn } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(validationSchema),
  });

  async function submitSignIn(data: FormData) {
    await signIn(data.email, data.password);
  }

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
            mt="$4"
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
              <Controller
                name="email"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <Input
                    value={value}
                    onChangeText={onChange}
                    placeholder="E-mail"
                    errorMessage={errors.email?.message}
                  />
                )}
              />

              <Controller
                name="password"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <Input
                    value={value}
                    onChangeText={onChange}
                    placeholder="Senha"
                    type="password"
                    errorMessage={errors.password?.message}
                  />
                )}
              />
            </VStack>

            <Button
              title="Entrar"
              variantCustomProp="primary"
              onPress={handleSubmit(submitSignIn)}
            />
          </VStack>
        </VStack>

        <VStack
          justifyContent="center"
          alignItems="center"
          bg="$gray700"
          px="$12"
          py="$16"
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
