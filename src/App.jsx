import "./App.css";
import Layout from "./components/Layout/Layout";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "./styles/theme.config";
import { TimerWrapper } from "./context/timerContext";
import PomodoroApp from "./pages/Pomodoro";

function App() {
 return (
  <ThemeProvider theme={theme}>
   <GlobalStyles />
   <TimerWrapper>
    <Layout>
     <PomodoroApp />
    </Layout>
   </TimerWrapper>
  </ThemeProvider>
 );
}

export default App;
