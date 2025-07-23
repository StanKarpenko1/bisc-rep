import { useState } from 'react';
import { CssBaseline, ThemeProvider, createTheme, Typography, Box } from '@mui/material';
import Layout from './components/layout/Layout';
import SongAccordion from './components/songs/SongAccordion';
import songsData from './data/songs.json';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0A406A',
    },
  },
});

function App() {
  const [activeSet, setActiveSet] = useState('set1');

  const currentSet = songsData.sets.find(set => set.id === activeSet);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout activeSet={activeSet} onSetChange={setActiveSet}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <Box sx={{ mb: 3, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
              {currentSet?.name}
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              {currentSet?.songs.length} songs in this set
            </Typography>
          </Box>
          {currentSet && <SongAccordion songs={currentSet.songs} />}
        </Box>
      </Layout>
    </ThemeProvider>
  );
}

export default App;