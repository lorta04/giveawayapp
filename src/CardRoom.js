import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,NavLink
} from 'reactstrap';

const Roomcard = (props) => {
  const roomdata = props.roomdata
  /*
  const clickk =(Link) => {
    console.log(Link)
    console.log('click')
  };
  */
 
  return(
  <div><ul style = {{padding : '0px'}}>
    {roomdata.map((room)=>{
      const url = '/room/'+room.roomname
      return (<li>
        <Card>
          <CardImg top width="100%" src={room.room_img} alt="Card image cap" />
          <CardBody>
            <CardTitle><h1>{room.roomtitle}</h1></CardTitle>
            <CardSubtitle></CardSubtitle>
        
            <NavLink href = {url} style = {{padding:'0px', marginTop:'10px',fontSize:'30px'}}>Click</NavLink>
          </CardBody>
        </Card></li>)
    })}
    </ul>
        
      </div>);
  
};

export default Roomcard;