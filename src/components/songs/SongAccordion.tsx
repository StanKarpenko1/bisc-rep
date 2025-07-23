import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  IconButton,
  Chip,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import SpeedIcon from '@mui/icons-material/Speed';

interface Song {
  id: string;
  title: string;
  artist: string;
  lyrics: string;
  dropboxUrl: string;
  tempo: number;
}

interface SongAccordionProps {
  songs: Song[];
}

function SongAccordion({ songs }: SongAccordionProps) {
  return (
    <Box sx={{ width: '100%' }}>
      {songs.map((song) => (
        <Accordion 
          key={song.id}
          sx={{ 
            width: '100%',
            mb: 2,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              backgroundColor: '#f5f5f5',
              '&:hover': {
                backgroundColor: '#e8e8e8',
              },
              '& .MuiAccordionSummary-content': {
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography variant="h6">{song.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                by {song.artist}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mr: 2 }}>
              <IconButton
                href={song.dropboxUrl}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                sx={{ color: 'primary.main' }}
              >
                <AudiotrackIcon />
              </IconButton>
              <Chip
                icon={<SpeedIcon />}
                label={`${song.tempo} BPM`}
                size="small"
                color="primary"
                variant="outlined"
              />
            </Box>
          </AccordionSummary>
          <AccordionDetails sx={{ pt: 3 }}>
            <Typography
              variant="body1"
              sx={{
                whiteSpace: 'pre-line',
                fontFamily: 'monospace',
                fontSize: '1.1rem',
                lineHeight: 1.8,
              }}
            >
              {song.lyrics}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

export default SongAccordion;