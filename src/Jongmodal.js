
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {decode} from 'jsonwebtoken';
import Axios from 'axios';

const ModalExample = (props) => {
  const {
    buttonLabel,
    className,
    dataitem
  } = props;
  console.log(dataitem)

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const Jongclick = () => {
    console.log('confirm')
    const token = localStorage.getItem('token')
    if(token){
    const inp = {
      username: decode(token,'secret').username,
      giveawayname: dataitem.giveawayname
    }
    console.log(inp)
    Axios.post('http://localhost:5000/queue/add',inp)
    .then((res)=>{
      console.log(res.data)
      if(res.data.error){
        alert(res.data.error);
      }else{
        window.location.reload(true)
      }
    })
  }else{
    alert('Error to queue ... Please login or register')
  }
  }
  
  if(dataitem.giveaway_status==1){
  return (
    <div>
      <Button color="info" onClick={toggle}>จอง</Button>
      
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>CONFIRM</ModalHeader>
        <ModalBody>
          Please Confirm
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={Jongclick}>Confirm</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
  }
  else{
    return(<div>
        <Button color="danger" >Full</Button>
      </div>);
    
  }
}

export default ModalExample;