import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { useTheme } from '@emotion/react';


export default function Item({item}) {
  const theme = useTheme();
  return (
    <Card  sx={{ boxShadow:`2px 2px ${theme.palette.primary.main}`, border:`1px solid ${theme.palette.primary.main}`, width:80, height:80, display:'flex', flexDirection:'column', alignItems:'center'}}>
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