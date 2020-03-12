import React from 'react';
import './SideDrawer.css';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const sideDrawer = props => {
    
        let drawerClasses = 'side-drawer';
        if (props.show){
            drawerClasses = 'side-drawer open';
        }
    return (<nav className= {drawerClasses}>
        <ul>
            <li style={{paddingRight:'50px'}}>
            <FormGroup>
            <Label >Search</Label>
            <Input  placeholder="Type something" />
          </FormGroup>

            </li>
            <li><a href="/">#Postcard</a></li>
            <li><a href="/">#Sticker</a></li>
            <li><a href="/">#Polaroid</a></li>
            <li><a href="/">#Cupsleeve</a></li>
          
            
        </ul>
    </nav>);

};

export default sideDrawer