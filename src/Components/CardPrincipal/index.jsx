import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import { Box, CardActionArea, Grid, Paper } from '@mui/material';

export default function CardPrincipal({titulo, sinopse, ano, avalicao, imagem, diretor}) {
  return (
    <Card sx={{ maxWidth: 500}}>
      <CardActionArea>
      <CardMedia 
      component={Paper} sx={{ height: "fit-content"}}
      />
      <Box display='flex' flexDirection={'column'} alignItems="center">
      <div className="image" style={{ backgroundImage: `url(${imagem})` }}></div>
      </Box>
      <CardContent>
      <Box display='flex' flexDirection={'column'} justifyContent="space-between" alignItems="center" sx={{maxWidth: 500}}>
        <Typography gutterBottom variant="body1" component="div" sx={{height: 200}}>
          {titulo}{ano}{diretor}
        </Typography>
        </Box>
      </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  );
}

