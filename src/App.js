
import { useState } from "react";
import { Route,Routes } from "react-router-dom";
import Topbar from "./scenes/global/TopBar";
import Sidebar from "./scenes/global/SideBar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team/team";
import Invoices from "./scenes/invoices/inovices";
import Contacts from "./scenes/contact/contact";
import Bar from "./scenes/bar/bar";
import Geography from "./scenes/geography/geograpy";
import Line from "./scenes/line/line";
import Pie from "./scenes/pie/pie";
import Calendar from "./scenes/calendar/calendar"; 
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext,useMode } from "./theme";



function App() {

  const [theme,colorMode] = useMode()
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Sidebar isSidebar={isSidebar} />
        <main className="content">
          <Topbar setIsSidebar={setIsSidebar} />
          <Routes>
        <Route path="/" element={<Dashboard/>} />
       <Route path="/team" element={<Team />} />
       <Route path="/invoices" element={<Invoices />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/geography" element={<Geography />} />
        <Route path="/pie" element={<Pie />} />
        <Route path="/line" element={<Line />} />
        </Routes>
      </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
