import { Box } from "@gluestack-ui/themed";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const theme = DefaultTheme;

  return (
    <Box flex={1} bg="$blueGray50">
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
}
