import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { Home } from '@screens/Home';
import { MyAnnouncements } from '@screens/MyAnnouncements';
import { SignOutPage } from '@screens/SignOut';
import { House, SignOut, Tag } from 'phosphor-react-native';
import { Platform } from 'react-native';
import { gluestackUIConfig } from '../../config/gluestack-ui.config';

type AppRoutes = {
  home: undefined;
  myAnnouncements: undefined;
  announcementsDetails: {
    announcementId: string;
  };
  signOut: undefined;
  createAnnouncement: undefined;
};

export type AppNavigationRoutesProps =
  BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  const { tokens } = gluestackUIConfig;

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: tokens.colors.gray400,
        tabBarActiveTintColor: tokens.colors.gray100,
        tabBarStyle: {
          height: Platform.OS === 'android' ? 'auto' : 96,
          backgroundColor: tokens.colors.gray700,
          borderWidth: 0,
          paddingBottom: tokens.space[9],
          paddingTop: tokens.space[8],
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <House size={24} color={color} />
          ),
        }}
      />

      <Screen
        name="myAnnouncements"
        component={MyAnnouncements}
        options={{
          tabBarIcon: ({ color }) => <Tag size={24} color={color} />,
        }}
      />

      <Screen
        name="signOut"
        component={SignOutPage}
        options={{
          tabBarIcon: ({ color }) => (
            <SignOut size={24} color={'#E07878'} />
          ),
        }}
      />
    </Navigator>
  );
}
