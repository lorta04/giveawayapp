import React, { Component } from 'react';
import './addgiveForm.css'
import { Container, Button } from 'reactstrap';

class ShowRoomRequest extends Component {

    constructor(props) {
        super(props);
    }
    
    counting (count) {
      return count = count + 1;
    } 

    render() {
    
    var count = 0;
    var aaa = [['a','a2'],['b','b2'],['c','c2'],['d','d2']];
    
    return (
      <Container  className = "d-flex justify-content-center">
      <table className = "table-striped">
          <thead>
              <tr style = {{height : '50px'}}>
              <th style = {{textAlign : 'center',width : '50px'}}>#</th>
              <th style = {{textAlign : 'center',width : '300px'}}>ชื่อผู้ขอ</th>
              <th style = {{textAlign : 'center',width : '300px'}}>Email ผู้ขอ</th>
              <th style = {{textAlign : 'center',width : '200px'}}>Download File</th>
              </tr>
          </thead>
          <tbody>
          {
            aaa.map(data => {
              count = this.counting(count); 
              return (
              <tr>
              <th style = {{textAlign : 'center'}}>{count}</th>
              <td style = {{padding: '15px'}}>{data[0]}</td>
              <td style = {{padding: '15px'}}>{data[1]}</td>
              <td>
                <div className = 'd-flex justify-content-center' style = {{marginTop : 'auto', marginBottom : 'auto'}}>
                  <Button className = "btn btn-dark ListButton" style = {{textAlign: 'center'}}>Download File</Button>
                </div>
              </td>
              </tr>
              )
          })}
        </tbody>
      </table>
      </Container>
    )
    }
}

export default ShowRoomRequest;