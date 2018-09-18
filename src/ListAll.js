import React, { Component } from 'react';
import './style.css';

class ListAll extends Component{
    render(){
        return(
            <div id='list-all'>
                {this.props.children}
            </div>
        )
    }
}

export default ListAll;
