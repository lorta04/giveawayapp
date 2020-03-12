import React, {Component} from 'react';
import './requestroomForm.css'
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class requestroomForm extends Component {

  constructor() {
    super();
    this.state = {
      Email: '',
      RoomName: '',
      selectedFile: null
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeText = changeEvent => this.setState({ [changeEvent.target.name] : changeEvent.target.value });

  onChangeHandler=event=>{
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
  }

  onClickHandler = () => {
    const data = new FormData() 
    data.append('file', this.state.selectedFile)
  }

  render(){
    return(
      <div className="registerbox centered">
        <Form className = 'input'>
          <div className = 'Header'>
            <a>Add Giveaway Form</a>
          </div>
          <FormGroup className = 'form'>
            <Label className = 'lebel' for="exMail">อีเมลล์ผู้ขอเปิด</Label>
            <Input type="text" name="Email" id="exMail" placeholder="Email" value = {this.state.objectName} onChange = {this.onChangeText}/>
          </FormGroup>

          <FormGroup className = 'form'>
            <Label className = 'lebel' for="exName">ชื่อห้องที่ขอเปิด</Label>
            <Input type="text" name="RoomName" id="exName" placeholder="Name" value = {this.state.placeName} onChange = {this.onChangeText}/>
          </FormGroup>

          <FormGroup className = 'form'>
            <Label className = 'lebel' for="exImg">แนบไฟล์รูปแบนเนอร์/สมาชิกวงทั้งหมด (Zip)</Label><br/>
            {/*<input type="file" name="file" id="exImg" onChange={this.onChangeHandler}/>
            */}
              <div className="row">
                <div className="col-md-6">
                  <form method="post" action="#" id="#">                                            
                    <div className="form-group files">
                      <input type="file" className="form-control" multiple="" onChange={this.onChangeHandler}/>
                    </div>
                  </form>
                </div>
              </div>
          </FormGroup>
          <button type="button" className="btn btn-success btn-block button" onClick={this.onClickHandler}>Submit</button> 
        </Form>
      </div>    
    );
  }
}

export default requestroomForm;