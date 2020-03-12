import React , {useState} from 'react';
import './Toolbar.css'
import {Link} from 'react-router-dom'
import LoginModal from '../Modal/LoginModal'
import StatusModal from '../Modal/StatusModal'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import {connect} from 'react-redux'
import { tsPropertySignature } from '@babel/types';
import {verify} from 'jsonwebtoken';
import { domainToASCII } from 'url';

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
                <li><Link to ='/contact'><button className = "btn btn-link"> Contact </button></Link></li>
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
        return <div >
            <StatusModal />
        </div>
          ; // Show User profile and giveawayMenu
    }
};

const mapStateToProp = (state) =>{
    return({token:state.token})
}
export default connect (mapStateToProp) (toolbar);