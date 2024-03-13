import { ColorModeContext, useMode } from "./Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import TopBoard from "./scenes/global/TopBoard";
import Dashboard from "./scenes/dashboard/dashboard";

import SideBar from "./scenes/global/SideBar";
import { Route, Routes } from "react-router-dom";
import Team from "./scenes/team/team";

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
        <Route path="/team" element={<Team />} />
        <Route path="/end-year" element={<Team />} />
        <Route path="/topics" element={<Team />} />
        <Route path="/sector" element={<Team />} />
        <Route path="/region" element={<Team />} />
        <Route path="/pest" element={<Team />} />
        <Route path="/source" element={<Team />} />
        <Route path="/swot" element={<Team />} />
        <Route path="/bar" element={<Team />} />
        <Route path="/line" element={<Team />} />
        <Route path="/pie" element={<Team />} />
        <Route path="/geography" element={<Team />} />
      </Routes>
    </main>
  </div>
</div>

      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
