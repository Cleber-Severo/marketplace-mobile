import { config } from '@gluestack-ui/config';
import { GluestackUIProvider, StatusBar, Text } from '@gluestack-ui/themed';
import { Routes } from '@routes/index';

export default function App() {
  // const [fontsLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular });

  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />

      <Routes />
    </GluestackUIProvider>
  );
}
