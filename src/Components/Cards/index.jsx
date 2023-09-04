import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'



export default function CardFilme({titulo, sinopse, ano, avalicao, imagem}) {
  return (
    <Card sx={{}}>
      <div className="image" style={{ backgroundImage: `url(${imagem})` }}></div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {sinopse}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{avalicao}</Button>
        <Button size="small">{ano}</Button>
      </CardActions>
    </Card>
  );
}

