import { Box, Chip, Stack } from '@mui/material';
import { songsData } from '../../data/songsData';

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
        height: 'calc(100vh - 60px)',
        backgroundColor: '#f5f5f5',
        padding: 2,
        borderRight: '1px solid #e0e0e0',
        flexShrink: 0,
      }}
    >
      <Stack spacing={2}>
        {songsData.sets.map((set) => (
          <Chip
            key={set.id}
            label={set.name}
            onClick={() => onSetChange(set.id)}
            color={activeSet === set.id ? 'primary' : 'default'}
            clickable
            sx={{ 
              width: '100%',
              justifyContent: 'flex-start',
              padding: '8px 12px',
              fontSize: '1rem'
            }}
          />
        ))}
      </Stack>
    </Box>
  );
}

export default Sidebar;