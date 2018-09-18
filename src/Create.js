import React, { Component } from 'react';
import './style.css';

class Create extends Component{
    clickAdd =()=>{
        document.getElementById('add').style.display= 'none';
        document.getElementById('submit').style.display= 'inline-block';
        document.getElementById('value').style.display= 'inline-block';
    };
    clickCreate =()=>{
        if (document.getElementById('add').style.display === 'none' &&
            document.getElementById('submit').value === ''){
            document.getElementById('add').style.display= 'inline-block';
            document.getElementById('submit').style.display= 'none';
        }
    };
    render(){
        return(
            <form>
                <input id="add" type="button" value="New" 
                    onClick={this.clickAdd.bind(this)}/>
                <input id="value" style={{display: 'none'}} type="text"/>
                <input id="submit" style={{display: 'none'}} type="button" value="Create"
                    onClick={this.clickCreate.bind(this)} 
                    onClick={this.props.onClickAdd}/>
            </form>
        )
    }
}

export default Create;
