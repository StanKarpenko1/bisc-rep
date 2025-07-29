import { Box } from '@mui/material';
import type { ReactNode } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode;
  activeSet: string;
  onSetChange: (setId: string) => void;
}

function Layout({ children, activeSet, onSetChange }: LayoutProps) {
  return (
    <>
      <Header />
      <Box sx={{ display: 'flex', marginTop: '120px' }}>
        <Sidebar activeSet={activeSet} onSetChange={onSetChange} />
        <Box
          component="main"
          sx={{
            flex: 1,
            minHeight: 'calc(100vh - 120px)',
            backgroundColor: '#fafafa',
            padding: 3,
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
}

export default Layout;