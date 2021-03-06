import React , {useState} from 'react';
import './Toolbar.css'
import LoginModal from '../Modal/LoginModal'
import StatusModal from '../Modal/StatusModal'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import {connect} from 'react-redux'

class Toolbox extends React.Component {
    constructor(props){
        super(props)
        this.state = {token:undefined}
    }
    componentDidMount() {
                
    }
    componentDidUpdate() {

    }
     MenuBar =  props => {
        console.log(props)
        if(props.aa===undefined) {
            return <li>
                <LoginModal />
            </li>
        }
        else {
            return <div className = "card border-warning">
                <div className = "MenuBar">
                <li style = {{fontSize:'10pt'}}>Name : xxx</li>
                <StatusModal />
            </div>
            </div>
              ; // Show User profile and giveawayMenu
        }
    };
    
    render(){
        return (
            <header className="toolbar">
                <nav className="toolbar__navigation">
                    <div>
                        <DrawerToggleButton click={this.props.drawerClickHandler} />
                    </div>
                    <div className="toolbar__logo"><a href="/">GIVEAWAY</a></div>
                    <div className= "spacer" />
                    <div className="toolbar_navigation-items">
                        <ul>
                            <li><button className = "btn btn-link"> Contact </button></li>
                            <li>
                                 {this.MenuBar()}
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            
            
            )
    }
}

const mapStateToProp = (state) =>{
    return({token:state.token})
}
export default connect (mapStateToProp) (Toolbox);
