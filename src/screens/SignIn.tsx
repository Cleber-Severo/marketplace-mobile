import { Pressable, ScrollView, Text } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <Text>Sign In</Text>
      <Pressable
        onPress={() => {
          navigation.navigate('signUp');
        }}
        backgroundColor="$amber400"
      >
        <Text>go to sign up</Text>
      </Pressable>
    </ScrollView>
  );
}
