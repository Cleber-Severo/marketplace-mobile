import { LogoLg } from '@assets/logoLg';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import {
  ScrollView,
  Text,
  useToast,
  VStack,
} from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

import { Controller, useForm } from 'react-hook-form';

import defautAvatar from '@assets/Avatar.png';
import { TouchableOpacity } from 'react-native';
import { UserPhoto } from '@components/UserPhoto';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from '@services/api';

type SignUpFormData = {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  avatar: string;
};

const validationSchema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  avatar: yup.string().required('Foto é obrigatória'),
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
    setValue,
    formState: { errors },
  } = useForm<SignUpFormData>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      avatar: '',
    },
    resolver: yupResolver(validationSchema),
  });
  console.log('🚀 ~ SignUp ~ errors:', errors);

  const toast = useToast();

  async function handleUserPhotoSelect() {
    console.log('Inside image picker');
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync(
        {
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          quality: 1,
          aspect: [4, 4],
          allowsEditing: true,
        }
      );

      if (photoSelected.canceled) {
        return;
      }

      const photoUri = photoSelected.assets[0].uri;

      if (photoUri) {
        const photoInfo = (await FileSystem.getInfoAsync(
          photoUri
        )) as { size: number };

        const fileExtension = photoUri.split('.').pop();

        const photoFile = {
          name: `profileImage_${Date.now()}.${fileExtension}`.toLowerCase(),
          uri: photoUri,
          type: `${photoSelected.assets[0].type}/${fileExtension}`,
        } as any;

        const photoFilePayload = JSON.stringify(photoFile);

        setValue('avatar', photoFilePayload);
      }
    } catch (error) {
      console.log('🚀 ~ handleUserPhotoSelect ~ error:', error);
    }
  }

  async function submitSignUp(data: SignUpFormData) {
    try {
      const userPhoto = JSON.parse(data.avatar);
      const formData = new FormData();
      formData.append('avatar', userPhoto);
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('tel', data.phone);
      formData.append('password', data.password);

      await api.post('/users', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (error) {
      console.log('Error:', error);
    }
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
        pb="$3"
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
          <TouchableOpacity onPress={handleUserPhotoSelect}>
            <UserPhoto source={defautAvatar} isEdit />
          </TouchableOpacity>

          <Text color="$red500" size="sm">
            {errors.avatar?.message}
          </Text>

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
