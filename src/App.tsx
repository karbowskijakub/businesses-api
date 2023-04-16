import React from "react";
import GlobalStyles from "./assets/styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/assets/styles/theme";
import Navbar from "./layout/Navbar";
import Header from "./layout/Header";
const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Navbar />
            <Header />
        </ThemeProvider>
    );
};

export default App;
