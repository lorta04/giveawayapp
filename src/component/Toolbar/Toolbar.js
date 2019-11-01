import React , {useState} from 'react';
import './Toolbar.css'
import LoginModal from '../Modal/LoginModal'
import StatusModal from '../Modal/StatusModal'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import {connect} from 'react-redux'
import { tsPropertySignature } from '@babel/types';
import {verify} from 'jsonwebtoken';

const toolbar = props =>  {  
    console.log(props)
    return(

<header className="toolbar">
    <nav className="toolbar__navigation">
        <div>
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><a href="/">GIVEAWAY</a></div>
        <div className= "spacer" />
        <div className="toolbar_navigation-items">
            <ul>
                <li><button className = "btn btn-link"> Contact </button></li>
                <li>
                     <MenuBar token = {props.token} />
                </li>
            </ul>
        </div>
    </nav>
</header>


)};
const MenuBar =  props => {
    console.log(props)
    if(props.token==null) {
        return <li>
            <LoginModal />
        </li>
    }
    else {
        let decode = verify(props.token,'secret')
        console.log(decode)
        return <div className = "card text-white bg-danger">
            <div className = "MenuBar">
            <li style = {{fontSize:'10pt'}}>{decode.username}</li>
            <StatusModal />
        </div>
        </div>
          ; // Show User profile and giveawayMenu
    }
};

const mapStateToProp = (state) =>{
    return({token:state.token})
}
export default connect (mapStateToProp) (toolbar);