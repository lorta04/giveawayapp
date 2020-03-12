import React, { Component, useState } from 'react';
//import './Listbox.css';
import GWtable from './mygiveawaytable'
import {
  Container, Row, Col,
  Collapse, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input
} from 'reactstrap';
import axios from 'axios';
import { format } from 'date-fns'


class Listbox extends Component {

  constructor() {
    super();
    this.state = {
      collapse : false,
      modal : false,
      detail : ''
    };

    this.toggle = this.toggle.bind(this);
  }


  toggle() {
    this.setState({collapse:!this.state.collapse});
  }

  toggle2 = () => this.setState({modal : !this.state.modal,
    detail : ''})

  addstatus = () => {console.log("detail: " + this.state.detail);
                      if(this.state.detail==''){
                        alert("Please add status");
                        return;
                      }
                      const datetime = new Date();
                      console.log(datetime)
                      const data = {giveawayname:this.props.data.giveawayname, status:{date:format(datetime,"d/MM/yyyy HH:mm"),detail:this.state.detail}}
                      axios.put('http://localhost:5000/giveaway/addstatus',data).then()
                      alert('add status complete')
                      //this.setState({modal : !this.state.modal});
                      window.location.reload(true);
                    }

  onChangeText = changeEvent => this.setState({ [changeEvent.target.name] : changeEvent.target.value });

  render() {
    const data = this.props.data
    return (
      <div className="List justify-content-center card card-block">

        <ul className="list-group list-group-flush">
            
          <li className="list-group-item">
          <CardBody>
            <Container>
              <Row>
                <Col xs = {2.5}>
                  <img style = {{width:"120px"}} src = {data.giveaway_pic}/>
  
                </Col>
                <Col>
                  <h5>{data.giveawayname}</h5>
                  <h6>{this.props.data.Content}</h6>
                  <br/>
                  <br/>
                  <div className = "float-right">
                    <Button className ="btn btn-dark ListButton2">Edit</Button>
                    <Button className ="btn btn-dark ListButton2">Delete</Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </CardBody>
          </li>

          <li className="list-group-item">
          <Button onClick={this.toggle} className = "btn btn-dark ListButton">Reciever List</Button>
          
          <Button className = "btn btn-info Addstatus"  onClick={this.toggle2}>Add Status</Button>

          <Collapse isOpen={this.state.collapse}>
              <CardBody>
                <GWtable data = {data.giveawayname} />
              </CardBody>
          </Collapse>
          </li>

        </ul>
      
        <div>
          <Modal isOpen={this.state.modal} toggle={this.toggle2} >
            <ModalHeader toggle={this.toggle2}>Add Status</ModalHeader>
            <ModalBody>
            <FormGroup>
              <Label>Status</Label>
              <Input type="textarea" rows = '4' name="detail" placeholder="Detail" value = {this.state.detail}  onChange = {this.onChangeText}/>
            </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.addstatus}>Submit</Button>{' '}
              <Button color="secondary" onClick={this.toggle2}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>

      </div>
    );

  }

}

export default Listbox;
