import { Box, Chip, Stack } from '@mui/material';

interface SidebarProps {
  activeSet: string;
  onSetChange: (setId: string) => void;
}

function Sidebar({ activeSet, onSetChange }: SidebarProps) {
  return (
    <Box
      sx={{
        width: 200,
        minWidth: 200,
        height: 'calc(100vh - 120px)',
        backgroundColor: '#f5f5f5',
        padding: 2,
        borderRight: '1px solid #e0e0e0',
        flexShrink: 0,
      }}
    >
      <Stack spacing={2}>
        <Chip
          label="Set 1"
          onClick={() => onSetChange('set1')}
          color={activeSet === 'set1' ? 'primary' : 'default'}
          clickable
          sx={{ 
            width: '100%',
            justifyContent: 'flex-start',
            padding: '8px 12px',
            fontSize: '1rem'
          }}
        />
        <Chip
          label="Set 2"
          onClick={() => onSetChange('set2')}
          color={activeSet === 'set2' ? 'primary' : 'default'}
          clickable
          sx={{ 
            width: '100%',
            justifyContent: 'flex-start',
            padding: '8px 12px',
            fontSize: '1rem'
          }}
        />
      </Stack>
    </Box>
  );
}

export default Sidebar;