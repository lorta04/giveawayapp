import React, {Component} from 'react';
//import React {Component} from 'react';
import logo from './logo.svg';
import Toolbar from './component/Toolbar/Toolbar.js';
import SideDrawer from './component/SideDrawer/SideDrawer';
import Backdrop from './component/Backdrop/Backdrop';
import sideDrawer from './component/SideDrawer/SideDrawer';
import backdrop from './component/Backdrop/Backdrop';
import { Button } from 'reactstrap';
import './Contact.css'
import Picshow from "./picshow";
import Roomcard from "./CardRoom"
import Slide from './Slide'
import {banner_find} from './Banner_find'
import {member} from './member'
import { Jumbotron } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import ModalB from './component/Modal/Modal2'

class Room extends Component{
  constructor(props){
    super(props);
  }

 state = {
    roomdata:banner_find,
    sideDrawerOpen: false
  };
  
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
   this.setState({sideDrawerOpen: false});
};

  render(){
          
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    //const img1 = './img/nubanner.jpg'
  console.log(this.state.roomdata)
  return (
    
    <div style={{height: '100%'}}>
      <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
      <SideDrawer show={this.state.sideDrawerOpen} />
      {backdrop}
      
      <main>
        <div className = 'memberlist' >
        <h2>About Us</h2>
        <div>
        <Jumbotron>
        <h1 className="display-3">Welcome To GIVEAWAY</h1>
        <p className="lead">เว็บไซต์ GIVEAWAY ได้สร้างขึ้นในปี 2019 โดยเว็บไซต์นี้ถูกสร้างจากความตั้งใจและความชอบส่วนตัวของทางทีมงานผู้จัดทำโดยไม่แสวงหากำไร ขอบคุณผู้ใช้งานทุกคนที่คอยใช้งานและสนับสนุนเว็บไซต์ของเราเป็นอย่างยื่งและทางทีมงานพัฒนาขอสัญญาว่าจะพัฒนาเว็บไซต์นี้ให้ดีขึ้นไปเรื่อยๆ
        </p>
        <hr className="my-2" />
        <p>หากต้องการขอห้องเพิ่มกรุณาส่ง Request ผ่านลิงก์ด้านล่างนี้</p>
        <p className="lead">
          <NavLink href = '/requestroom' style = {{padding:'0px', marginTop:'10px',fontSize:'30px'}}>Request Room</NavLink>
        </p>
      </Jumbotron>
        </div>
        <h2>Member</h2>
        <ul>
        { member.map((person) =>{
            return (
            <div  style={{display:'flex'}}>
                <div style={{width:'15%'}}><img style={{height:'200px'}} src={person.memberimg} ></img></div>
                <div style={{display:'',width:'40%' ,marginTop:'60px'}}>
                Name : {person.name} 
                <br/>
                Email : {person.email} 
                </div>
            </div>
            )
           }
           )
           }
        </ul>
       
        </div>
        
       
      </main>
      
    </div>
  
  );
  }
}


export default Room;
