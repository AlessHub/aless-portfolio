import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from './Item';
import sliderInfo from '../../../../utils/sliderinfo.json';

function Slider()
{
    // var items = [
    //     {
    //         name: "Random Name #1",
    //         description: "Probably the most random thing you have ever seen!"
    //     },
    //     {
    //         name: "Random Name #2",
    //         description: "Hello World!"
    //     }
    // ]

    return (
        <Carousel sx={{maxWidth:'30vw', margin:'auto'}}>
            {
                sliderInfo.map( (item, i) => <Item key={item.id} item={item} /> )
            }
        </Carousel>
    )
}

export default Slider
