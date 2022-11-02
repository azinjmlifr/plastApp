import { createTheme, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import AppContent from "./app/AppContent";
import LoginComponent from "./pages/login/LoginComponent";
import RegisterComponent from "./pages/register/RegisterComponent";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "IRANSans-Medium",
      fontSize: 10,
      textAlign: 1.5,
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Toaster />
        <Routes>
          <Route path="register" element={<RegisterComponent />} />
          <Route path="login" element={<LoginComponent />} />
          <Route path="/*" element={<AppContent />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
