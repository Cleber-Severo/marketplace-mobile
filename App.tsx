import { config } from './config/gluestack-ui.config';
import { GluestackUIProvider, StatusBar, Text } from '@gluestack-ui/themed';
import {
  Karla_400Regular,
  Karla_700Bold,
  useFonts,
} from '@expo-google-fonts/karla';
import { Routes } from '@routes/index';
import { Loading } from '@components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({ Karla_400Regular, Karla_700Bold });

  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />

      {fontsLoaded ? <Routes /> : <Loading />}
    </GluestackUIProvider>
  );
}
