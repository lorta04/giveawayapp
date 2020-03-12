import React, { Component, useState } from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import { Button, Col, Row, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input  } from 'reactstrap';
import './Detail.css';
import Jong from './Jongmodal'
//import { super } from '@babel/types';

class Detail extends Component {
  constructor(props){
    super(props)
    this.state = {

    };
  }
  
  render() {

    const datagw = this.props.data
    const status = datagw.giveaway_userannounce
    console.log(datagw)
    console.log(datagw.giveaway_userannounce)

    return (
  
        <div className="App">
          <div className="App__Aside">
          <div className = "aaa">
            <ListGroup style = {{padding:'0px'}}>
                <ul>
                <li><ListGroupItem>ชื่อของ : {datagw.giveawayname} </ListGroupItem></li>
                <li><ListGroupItem>แจกโดย : {datagw.giveaway_givername}</ListGroupItem></li>

                <li><ListGroupItem>สถานที่ : {datagw.giveaway_place}</ListGroupItem></li>
                <li><ListGroupItem>วันเวลา : {datagw.giveaway_date+' '+datagw.giveaway_time}</ListGroupItem></li>
                <li><ListGroupItem>จำนวนของที่เหลือ : <Badge pill>{datagw.giveaway_amount}</Badge></ListGroupItem></li>

                
                <li>
                  <Col>
                    <Row>
                      <Jong dataitem = {datagw} />
  
                    </Row>
                  </Col>
                </li>

                <li>From Giver : </li>
                <li><ListGroup >{status.map((data)=>{return(
                    <ListGroupItem  color = "warning"><p>{data.detail}</p><p style ={{margin:'4px',fontSize:'9px',textAlign:'right'}}>{data.date}</p></ListGroupItem>)
                })}</ListGroup></li>
                </ul>
            </ListGroup>
          </div>
                         
          </div>
          <div style = {{display: 'flex',  justifyContent:'center', alignItems:'center', backgroundColor: 'rgb(169, 226, 236)'}}className="App__Form">
                <img src = {datagw.giveaway_pic} style = {{width:"300px"}}></img>
          </div>
        </div>
      
    
    );
  }
}

export default Detail;