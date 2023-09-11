import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import { Box, CardActionArea, Paper } from '@mui/material';

export default function CardFilme({titulo, sinopse, ano, avalicao, imagem, diretor}) {
  return (
    <Card sx={{ maxWidth: 800}}>
      <CardActionArea>
      <CardMedia 
      component={Paper} sx={{ height: "fit-content" }}
      />
      <Box display='flex' flexDirection={'column'} alignItems="center">
      <div className="image" style={{ backgroundImage: `url(${imagem})` }}></div>
      </Box>
      <CardContent sx={{height: 360}}>
        <Box display='flex' flexDirection={'column'} justifyContent="space-between" alignItems="center">
          <Typography gutterBottom variant="body1" component="div">
          {titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {sinopse}
        </Typography>
        </Box>
      </CardContent>
      </CardActionArea>
      <CardActions>
      <Box display='flex' flexDirection={'row'} alignItems="center" justifyContent="flex-start">
          <p size="large" id="ano">{ano}</p>
          <p size="large">{avaliacao}</p>
      </Box>
      </CardActions>
    </Card>
  );
}

