import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {decode} from 'jsonwebtoken';

import Listbox from './Listbox';

class MyGiveawayList extends Component {
    componentDidMount(){
        
        const token = this.props.token
        const user = decode(token,'secret')
        const url = 'http://localhost:5000/giveaway/'+user.username
        console.log(url)
        axios.get(url).then((res)=>{
            console.log(res.data)
            this.setState({dataset:res.data})
        })

    }
    constructor() {
        super();
        this.state = {
            dataset : []
        };
    }

    render() {

        var dataset = this.state.dataset;

        if (dataset.length>0) {
            return(<div style={{display:'block',maxwidth:'80pc'}}>
                <ul style = {{padding :'0px'}}>{dataset.map((data)=> {return <Listbox data = {data}/>})}</ul>
                </div>);
        }

        else {
            return(<ul><h3 style = {{textAlign:"center"}}>Item not found!!</h3></ul>);
        }
        
    }
}

const mapStateToProp = (state) =>{
    return({token:state.token})
  }
export default connect (mapStateToProp) (MyGiveawayList);
