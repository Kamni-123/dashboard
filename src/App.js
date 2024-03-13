import { ColorModeContext, useMode } from "./Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import TopBoard from "./scenes/global/TopBoard";
import Dashboard from "./scenes/dashboard/dashboard";
import SideBar from "./scenes/global/SideBar";
import { Route, Routes } from "react-router-dom";

function App() {
  const [theme, colorMode] = useMode(ThemeProvider);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ display: 'flex' }}>
  <SideBar />
  <div style={{ flex: 1 }}>
    <TopBoard />
    <main>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </main>
  </div>
</div>

      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
