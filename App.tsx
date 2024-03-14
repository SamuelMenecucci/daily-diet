import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme";
import { Home } from "@screens/Home";
import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Home /> : <Loading />}
    </ThemeProvider>
  );
}
