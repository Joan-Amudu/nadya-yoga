'use client'
import * as React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';



export default function CustomCard({title, subheader, image, alt, children}) {

  return (
    <Card sx={{ maxWidth: 345 }}>      
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt={alt}
      />
      <CardHeader      
        title={title}
        subheader={subheader}
      />
      <CardContent>
    
        <Typography variant="body2" color="text.secondary">
            {children}   
        </Typography>
       
      </CardContent>
      <CardActions disableSpacing>
      
      
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      
      </CardActions>
      
    </Card>
  );
}
