import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';


export default function Item({item}) {
  return (
    <Card sx={{ boxShadow:"2px 2px #AB3CAF", border:'1px solid #AB3CAF', width:80, height:100, display:'flex', flexDirection:'column', alignItems:'center'}}>
      <CardMedia
        component="img"
        alt="Card"
        image={item.icon}
        sx={{width: "100%",
            maxWidth: '50px',
            minHeight: '25px',
            height: 'auto',
            margin: 'auto',
          }}
      />
    </Card>
  );
}