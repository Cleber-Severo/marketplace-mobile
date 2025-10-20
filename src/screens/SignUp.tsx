import { Pressable, ScrollView, Text } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

export function SignUp() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <Text>Sign UP</Text>

      <Pressable
        onPress={() => {
          navigation.goBack();
        }}
        backgroundColor="$amber400"
      >
        <Text>Go to Sign in</Text>
      </Pressable>
    </ScrollView>
  );
}
