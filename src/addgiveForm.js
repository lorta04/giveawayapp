import React, {Component} from 'react';
import './addgiveForm.css'
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns'
import {connect} from 'react-redux'
import {decode} from 'jsonwebtoken'
import axios from 'axios';

class AddGiveForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      objectName: '',
      placeName: '',
      detail: '',
      amount: 0,
      pic: '',
      date: '',
      time: new Date(),
      selectedOption: 'option1',
      disableTime: false,
      date: new Date()
    };
    this.onChangeOption = this.onChangeOption.bind(this);
    this.onClickSubmit = this.onClickSubmit.bind(this);
    this.handleChange = this.onChangeDate.bind(this);
  }
  token = this.props.token

  onChangeTime = time => this.setState({ time });

  onChangeText = changeEvent => this.setState({ [changeEvent.target.name] : changeEvent.target.value });

  onChangeOption (changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    });
    if (changeEvent.target.value === 'option2') {
      this.setState({
        time : '',
        disableTime: true
      });
    }
    else {
      this.setState({
        time : new Date(),
        disableTime: false
      })
    }
  }

  onChangeTime = date => {
    this.setState({
      time: date,
    });
  };

  onChangeDate = date => {
    this.setState({
      date: date,
    });
  };

  onClickSubmit() {

    if (this.state.disableTime == true) {
      var time = this.state.time;
    }
    else {
      var time = format(this.state.time,"HH:mm");
    }


    console.log("Name : " + this.state.objectName + 
                "\nPlace : " + this.state.placeName +
                "\nDetail : " + this.state.detail +
                "\nAmount : " + this.state.amount + 
                "\nPic : " + this.state.pic +
                "\nDate : " + format(this.state.date,"yyyy-MM-dd") +
                "\nTime : " + time);
    if(this.state.objectName === '' || this.state.placeName === '' || this.state.detail === '' 
    || this.state.pic === '' || this.state.date === ''){
      alert("กรอกข้อมูลให้ครบทุกช่อง")
      return;
    }
    if(!this.props.token){
      alert("Please Login")
      return;
    }
    const data = {giveawayname:this.state.objectName, giveaway_room:this.props.room, giveaway_place:this.state.placeName,
      giveaway_givername:decode(this.props.token,'secret').username,giveaway_status:1,giveaway_detail:this.state.detail,giveaway_amount:this.state.amount,
      giveaway_pic:this.state.pic,giveaway_date:format(this.state.date,"yyyy-MM-dd"),giveaway_time:time,giveaway_userannounce:[]} 
    
      console.log(data)
      axios.post('http://localhost:5000/giveaway/add',data).then((res)=>{
        // redirected
        console.log(res)
        alert('add giveaway complete')
        window.location.replace('/room/'+this.props.room)
      }).catch((res)=>{alert('error to add new giveaway')})
    
  }

  render(){

    //console.log(this.props)
    if(this.props.token){
    return(
      <div>
        <Form>
              <FormGroup>
            <Label for="exObject">ชื่อของที่จะแจก</Label>
            <Input type="text" name="objectName" id="exObject" placeholder="Object Name" value = {this.state.objectName} onChange = {this.onChangeText}/>
          </FormGroup>

          <FormGroup>
            <Label for="exPlace">สถานที่จะแจก</Label>
            <Input type="text" name="placeName" id="exPlace" placeholder="Place Name" value = {this.state.placeName} onChange = {this.onChangeText}/>
          </FormGroup>

          <FormGroup>
            <Label for="exDetail">รายละเอียด</Label>
            <Input type="textarea" rows = '4' name="detail" id="exDetail" placeholder="Detail" className = 'DetailBox' value = {this.state.detail} onChange = {this.onChangeText}/>
          </FormGroup>

          <FormGroup>
            <Label>จำนวน</Label>
            <Input type="number" name="amount" placeholder="Amount" value = {this.state.amount} onChange = {this.onChangeText}/>
          </FormGroup>

          <FormGroup>
            <Label for="exDetail">รูปของแจก (Link ภาพ)</Label>
            <Input type="text" name="pic" id="exDetail" placeholder="URL Pic" className = 'DetailBox' value = {this.state.pic} onChange = {this.onChangeText}/>
          </FormGroup>

          <p style ={{fontSize:'10px'}}>**คุณต้อง Upload รูปจากเว็บไซต์นอก หรือ Copy URL รูปจาก Twitter</p>
          <FormGroup>
            <Label for="exDate">วันที่แจก</Label><br/>
            <DatePicker id = "exDate"
                        className = "react-datepickera react-datepickera__today-button react-datepickera__header" 
                        selected={this.state.date} 
                        onChange={this.onChangeDate}
                        dateFormat="eee d MMMM yyyy"
                        />
          </FormGroup>

          <FormGroup>
            <Label for="exTime">เวลาที่แจก</Label>
            <br/>
            <Row>
              <Col xs = {3}>
                <div className="radio">
                  <label>
                    <input type="radio" value="option1" checked={this.state.selectedOption === 'option1'}
                                                        onChange={this.onChangeOption} />
                    ระบุเวลา
                  </label>
                </div>
              </Col>
              <Col >
                <div className="radio">
                  <label style = {{marginLeft:"5px"}}>
                    <input type="radio" value="option2" checked={this.state.selectedOption === 'option2'}
                                                        onChange={this.onChangeOption} />
                    TBA
                  </label>
                </div>
              </Col>
            </Row>


            <DatePicker
              className = "react-datepickera react-datepickera__today-button react-datepickera__header"
              selected={this.state.time}
              onChange={this.onChangeTime}
              showTimeSelect
              showTimeSelectOnly
              disabled = {this.state.disableTime}
              timeIntervals={15}
              timeCaption="Time"
              placeholderText=""
              dateFormat="HH:mm"
              timeFormat="HH:mm"
            />

          </FormGroup>  
          
          <Button color="success" onClick = {this.onClickSubmit}>SUBMIT</Button>
        </Form>
      </div>    
    );
  }
  else{
    return (<div style = {{display:'flex',justifyContent:'center'}}>
      please login before add giveaway ... 
      
    </div>)
  }
}
}

const mapStateToProp = (state) =>{
  return({token:state.token})
}
export default connect (mapStateToProp) (AddGiveForm);