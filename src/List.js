import React, { Component } from 'react';
import './style.css';

class List extends Component{
    render(){
        return(
            <div className='list'>
                <div className='input-list'>{this.props.dataList}</div>
                <button className='button' onClick={this.props.onClickEdit}>edit</button>
                <button className='button' onClick={this.props.onClickDel}>delete</button>
            </div>
        )
    }
}

export default List;
