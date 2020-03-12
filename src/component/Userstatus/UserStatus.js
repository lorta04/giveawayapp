import React, {Component} from 'react';
import{connect} from 'react-redux';
import {decode} from 'jsonwebtoken';
import {Button,Row,Col,Container} from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
class UserStatus extends Component {
    constructor(props){
        super(props)
        this.handleLoggout = this.handleLoggout.bind(this)
        this.state = {token:this.props.token}
    }
    handleLoggout(e){
        localStorage.removeItem('token')
        window.location.reload(true)
    }
    render(){
        console.log(this.state.token)
        if(!this.state.token){
            return(<div style={{paddingLeft:"80px"}}>
            <Container>
                <Row>
                    <Col xl = {1.9} style={{marginRight:'10px', display: 'flex'}}>Welcome, Guest ... please login or<NavLink href="/register" style = {{padding : '0px', paddingLeft : '4px'}}> Register</NavLink></Col>
                    
                </Row>
            </Container>
             
            </div>);
        }else{
            const user = decode(this.state.token,'secret')
            console.log(user.username)
            return(<div style={{paddingLeft:"80px"}}>
                <Container>
                    <Row>
                        <Col xl = {1.9} style={{marginRight:'10px'}}>Welcome, {user.username}{'  '}</Col>
                        <Button size = "sm" onClick={this.handleLoggout}>Logout</Button>
                    </Row>
                </Container>
                 
                </div>);
        }
    
    }
}

const mapStateToProp = (state) =>{
    return({token:state.token})
}
const mapDispatchToProp = (dispatch)=>{
    return({
        signIn: (token)=>{
            dispatch({
                type: "SIGN_IN",
                payload: token
            })
        }
    })
}
export default connect (mapStateToProp,mapDispatchToProp) (UserStatus)