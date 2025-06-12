import * as React from 'react';
import Box from '@mui/joy/Box'; 
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import { CardActionArea, CardActions, CardMedia, IconButton } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';


export default function Carrossel({data, name}) {

  return (
    <Box
      sx={{
        width: '100vw',
        padding: '2rem',
        display: 'grid',
        placeItems: 'center',
      }}>
      <Typography component='h1' fontSize='2.5rem' sx={{
        color: '#fff',
        marginBottom: '1.5rem',
      }}>
        {name}
      </Typography>

      <Box
        sx={{
          display: 'flex', 
          gap: 1, 
          py: 1, 
          overflow: 'auto', 
          width: '100vw',
          scrollSnapType: 'x mandatory',
          '& > *': {
            scrollSnapAlign: 'center',
          },
          '::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {data.map((item) => (
          <Card sx={{ maxWidth: 345, minWidth: 300 }}>
            <CardActionArea disableRipple>
              <CardMedia
                component="img"
                height="240"
                image={item.image_url}
                alt={item.description}
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
      </Box>
    </Box>
  );
}
