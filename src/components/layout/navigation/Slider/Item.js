import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Item({item}) {
  return (
    <Card sx={{ maxWidth: 400}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={item.icon}ç
        sx={{width: "100%",
            maxWidth: '60px',
            minHeight: '70px',
            height: 'auto',
            margin: 'auto',
            mt: 2}}
      />
      <CardContent>
        <Typography align="center" gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography align="center" variant="body2" color="text.secondary">
        </Typography>
      </CardContent>
    </Card>
  );
}