import { Paper, Container } from '@mui/material';


function Item({item})
{
    return (
        <Paper sx={{backgroundColor:"white", display:'flex', flexDirection:"column", alignItems:'center', height:'240px'}}>
            <Container sx={{display:'flex', alignItems:'center', flexDirection:'column', mt:3}}>
                
            <img className="sliderIcon" src={item.icon} alt="icon"/>
            <h2 style={{color:'black'}}>{item.title}</h2>
            <p style={{color:'black'}}> {item.description}</p>
            </Container>
        </Paper>
    )
}

export default Item;