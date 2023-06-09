import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { useTheme } from "@mui/material";
import Layout from "./component/Layout/Layout";
import './App.css';

function App() {

  const theme = useTheme();
  
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>  
        <Layout />
      </BrowserRouter>
  </ThemeProvider>
  );
}

export default App;



