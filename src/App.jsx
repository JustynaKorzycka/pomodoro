import "./App.css";
import Layout from "./components/Layout";
import { ThemeProvider } from "styled-components";
import {
 themeRed,
 GlobalStyles,
 FONT_FAMILY_TYPE,
} from "./styles/theme.config";
import { TimerWrapper } from "./context/timerContext";
import SwitchButtons from "./components/SwitchButtons";
import Timer from "./components/Timer/Timer";
import { useState } from "react";
import Settings from "./components/Settings/Settings";

function App() {
 const [selectedTheme, setSelectedTheme] = useState(themeRed);
 const [fontFamilyType, setFontFamilyType] = useState(FONT_FAMILY_TYPE.Kumbh);

 return (
  <ThemeProvider theme={selectedTheme}>
   <GlobalStyles fontFamily={fontFamilyType} />
   <TimerWrapper>
    <Layout>
     <h1>pomodoro</h1>
     <SwitchButtons />
     <Timer />
     <Settings
      fontFamilyType={fontFamilyType}
      setFontFamilyType={setFontFamilyType}
      selectedTheme={selectedTheme}
      setSelectedTheme={setSelectedTheme}
     />
    </Layout>
   </TimerWrapper>
  </ThemeProvider>
 );
}

export default App;
