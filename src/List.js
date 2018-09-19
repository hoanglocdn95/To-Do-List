import React, { Component } from 'react';
import './style.css';

class List extends Component{
    render(){
        return(
            <div className='list'>
                <div className='input-list'>{this.props.dataList}</div>
                <input className='input-edit' style={{display: 'none'}}/>
                <button className='button' onClick={()=>this.props.onClickEdit(this.props.indexList)}>edit</button>
                <button className='button' onClick={()=>this.props.onClickDel(this.props.indexList)}
                    >delete</button>
                <button className='button-save' style={{display: 'none'}} 
                    onClick={()=>this.props.onClickSave(this.props.indexList)}>save</button>
            </div>
        )
    }
}

export default List;
