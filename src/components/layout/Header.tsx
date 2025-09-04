import { AppBar, Toolbar, Typography } from '@mui/material';

function Header() {
  return (
    <AppBar 
      position="fixed"
      sx={{
        backgroundColor: '#0A406A',
        color: '#fff',
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
        borderRadius: '0 0 8px 8px',
      }}
    >
      <Toolbar sx={{ minHeight: 60, height: 60 }}>
        <Typography 
          variant="h5" 
          component="div"
          sx={{ 
            flexGrow: 1,
            textAlign: 'left',
            marginLeft: 3,
            paddingBottom: 2,
            alignSelf: 'flex-end',
            fontStyle: 'italic',
            fontWeight: 300,
            letterSpacing: '0.08em',
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
          }}
        >
          BISCUIT ACOUSTIC
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;