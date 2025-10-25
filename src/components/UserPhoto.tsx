import { Center, Image, View } from '@gluestack-ui/themed';
import { PencilSimpleLine } from 'phosphor-react-native';
import { ComponentProps } from 'react';
import { TouchableOpacity } from 'react-native';

type Props = ComponentProps<typeof Image>;

export function UserPhoto({ ...rest }: Props) {
  return (
    <View position="relative">
      <Image
        rounded="$full"
        backgroundColor="$gray600"
        {...rest}
        alt="profile photo placeholder"
      />

      <Center
        position="absolute"
        bottom={-2}
        right={-2}
        bg="$blueLight"
        w="$9"
        h="$9"
        rounded="$full"
      >
        <PencilSimpleLine size={18} color="#FFF" />
      </Center>
    </View>
  );
}
