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
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SpeedIcon from '@mui/icons-material/Speed';
import { useState } from 'react';

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
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

 
  return (
    <Box sx={{ width: '80%', margin: '0 auto' }} data-testid="song-accordion-container">
      {songs.map((song) => (
        <Accordion 
          key={song.id}
          expanded={expanded === song.id}
          onChange={handleChange(song.id)}
          data-testid={`song-accordion-${song.id}`}
          slotProps={{ transition: { timeout: 300 } }}
          sx={{ 
            width: '100%',
            mb: 2,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon data-testid={`expand-icon-${song.id}`} />}
            data-testid={`song-accordion-summary-${song.id}`}
            sx={{
              backgroundColor: '#f5f5f5',
              '&:hover': {
                backgroundColor: '#e8e8e8',
              },
              '& .MuiAccordionSummary-content': {
                flexDirection: 'column',
                alignItems: 'flex-start',
                width: '100%',
              },
            }}
          >
            <Box sx={{ width: '100%' }}>
              <Typography variant="h6" data-testid={`song-title-${song.id}`} sx={{ mb: 1 }}>
                {song.title}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <Typography variant="body2" color="text.secondary" data-testid={`song-artist-${song.id}`}>
                  by {song.artist}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }} data-testid={`song-actions-container-${song.id}`}>
                  <IconButton
                    href={song.dropboxUrl}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                    sx={{ color: 'primary.main' }}
                    data-testid={`play-button-${song.id}`}
                    aria-label={`Play ${song.title}`}
                  >
                    <MusicNoteIcon />
                  </IconButton>
                  <Chip
                    icon={<SpeedIcon data-testid={`tempo-icon-${song.id}`} />}
                    label={`${song.tempo} BPM`}
                    size="small"
                    color="primary"
                    variant="outlined"
                    data-testid={`tempo-chip-${song.id}`}
                  />
                </Box>
              </Box>
            </Box>
          </AccordionSummary>
          <AccordionDetails sx={{ pt: 3, pb: 2 }} data-testid={`song-accordion-details-${song.id}`}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <Typography
                variant="body1"
                data-testid={`song-lyrics-${song.id}`}
                sx={{
                  whiteSpace: 'pre-line',
                  fontFamily: 'monospace',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                {song.lyrics}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <IconButton
                  onClick={() => setExpanded(false)}
                  sx={{
                    border: '1px solid rgba(0, 0, 0, 0.23)',
                    borderRadius: '50%',
                    padding: '6px',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    },
                  }}
                  data-testid={`close-accordion-${song.id}`}
                  aria-label="Close accordion"
                >
                  <ExpandLessIcon sx={{ fontSize: '1.2rem' }} />
                </IconButton>
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

export default SongAccordion;