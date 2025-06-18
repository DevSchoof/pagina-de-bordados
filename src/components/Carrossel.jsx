import * as React from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import { CardActionArea, CardActions, CardMedia, IconButton } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';


export default function Carrossel({ data, name }) {

  return (
    <Box
      sx={{
        width: '100%',
        // padding: '1rem',
        boxSizing: 'border-box',
        display: 'grid',
        placeItems: 'center',
      }}>
      <Typography
        component='h1'
        sx={{
          color: '#5D1A1A',
          marginBottom: '1.5rem',
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }
        }}>
        {name}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          gap: 1,
          py: 1,
          overflow: 'auto',
          width: '100%',
          scrollSnapType: 'x mandatory',
          '& > *': {
            scrollSnapAlign: 'center',
          },
          '::-webkit-scrollbar': { display: 'none' },
        }}
      >
        <Box sx={{ minWidth: { xs: '0.5rem', sm: '1rem', md: '1.5rem' } }} />
        {data.map((item) => (
          <Card sx={{ maxWidth: {xs: 200, sm: 300, md: 345}, minWidth: {xs: 174, sm: 261, md: 300} }}>
            <CardActionArea disableRipple>
              <CardMedia
                component="img"
                image={item.image_url}
                alt={item.description}
                sx={{
                  height: {xs: '139', sm: '208', md: '240'}
                }}
              />
            </CardActionArea>
            <CardActions disableSpacing dis>
              <IconButton
                onClick={() => window.open(`https://wa.me/5511915625606?text=me+interessei+no+produto+${item.name}%2C+como+posso+adquirir%3F`, '_blank')}
                aria-label="share"
                disableRipple
              >
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))}
        <Box sx={{ minWidth: { xs: '0.5rem', sm: '1rem', md: '1.5rem' } }} />
      </Box>
    </Box>
  );
}
