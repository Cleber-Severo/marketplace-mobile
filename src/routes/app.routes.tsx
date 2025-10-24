import { Text } from '@gluestack-ui/themed';
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { Home } from '@screens/Home';
import { MyAnnouncements } from '@screens/MyAnnouncements';
import { TouchableOpacity } from 'react-native';

function SignOutButton() {
  return null;
}

type AppRoutes = {
  home: undefined;
  myAnnouncements: undefined;
  announcementsDetails: {
    announcementId: string;
  };
  signOut: undefined;
  createAnnouncement: undefined;
};

export type AppNavigationRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="home" component={Home} />
      <Screen name="myAnnouncements" component={MyAnnouncements} />
      {/* <Screen
        name="signOut"
        component={SignOutButton}
        options={{
          tabBarButton: props => (
            <TouchableOpacity
              onPress={() => console.log('Sined out fn')}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 10,
              }}
            >
              <Text>Sign out</Text>
            </TouchableOpacity>
          ),
        }}
      /> */}
    </Navigator>
  );
}
