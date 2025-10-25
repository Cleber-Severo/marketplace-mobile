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

import defautAvatar from '@assets/Avatar.png';
import { TouchableOpacity } from 'react-native';
import { UserPhoto } from '@components/UserPhoto';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type FormData = {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

const validationSchema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  email: yup
    .string()
    .required('E-mail é obrigatório')
    .email('E-mail inválido'),
  phone: yup.string().required('Telefone é obrigatório'),
  password: yup
    .string()
    .required('Senha é obrigatória')
    .min(6, 'Senha deve ter pelo menos 6 caracteres'),
  confirmPassword: yup
    .string()
    .required('Confirme a senha')
    .oneOf([yup.ref('password')], 'As senhas devem ser iguais.'),
});

export function SignUp() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(validationSchema),
  });

  function submitSignUp(data: FormData) {
    console.log(data);
  }

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
        <VStack
          width="$64"
          justifyContent="center"
          alignItems="center"
          my="$4"
        >
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
          <Text
            mb="$2"
            fontSize="$xs"
            color="$gray300"
            textAlign="center"
          >
            Crie sua conta e use o espaço para comprar itens variados
            e vender seus produtos{' '}
          </Text>
        </VStack>

        <VStack w="$full" px="$12" alignItems="center">
          <TouchableOpacity>
            <UserPhoto source={defautAvatar} />
          </TouchableOpacity>
          <VStack w="$full" mb="$2" mt="$3">
            <Controller
              name="name"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input
                  value={value}
                  onChangeText={onChange}
                  placeholder="Nome"
                  errorMessage={errors.name?.message}
                />
              )}
            />

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
              name="phone"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input
                  value={value}
                  onChangeText={onChange}
                  placeholder="Telefone"
                  errorMessage={errors.phone?.message}
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
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input
                  value={value}
                  onChangeText={onChange}
                  placeholder="Confirmar senha"
                  type="password"
                  errorMessage={errors.confirmPassword?.message}
                />
              )}
            />
          </VStack>

          <Button
            title="Criar conta"
            variantCustomProp="dark"
            onPress={handleSubmit(submitSignUp)}
          />

          <Text mt="$10" mb="$2" fontSize="$sm" color="$gray200">
            Já tem uma conta?
          </Text>

          <Button
            title="Ir para login"
            onPress={() => navigation.goBack()}
          />
        </VStack>
      </VStack>
    </ScrollView>
  );
}
