import Header1 from './components/1-header/Header1';
import Header2 from './components/1-header/Header2';
import Header3 from './components/1-header/Header3';
// import { useState } from 'react'
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './Theme';
import Hero from './components/2-hero/hero';
import Main from './components/3-main/main';
import Footer from './components/4-footer/footer';
import Scroll from './scroll/Scroll';


function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header1 />
        <Header2 />
        <Header3 />

        <Box sx={{bgcolor: theme.palette.bg.main}}>
          <Hero />

          <Main />
        </Box>
        <Scroll />
        <Footer />


      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
