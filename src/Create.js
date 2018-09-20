import React, { Component } from 'react';
import './style.css';

class Create extends Component{
    constructor(props){
        super(props);
        this.state = {
          add: 'inline-block',
          submit: 'none',
          value: 'none'
        };
    };
    checkDisplay =()=>{
        if(this.state.add === 'inline-block'){
            this.setState({
                add: 'none',
                submit: 'inline-block',
                value: 'inline-block'
            });
        } else{
            this.setState({
                add: 'inline-block',
                submit: 'none',
                value: 'none'
            });
        }
    };
    render(){
        return(
            <form>
                <input id="add" type="button" value="New" style={{display: this.state.add}}
                    onClick={this.checkDisplay}/>
                <input id="value" style={{display: this.state.value}} type="text"/>
                <input id="submit" style={{display: this.state.submit}} type="button" value="Create"
                    onClick={this.checkDisplay}
                    onClick={this.props.onClickAdd}/>
            </form>
        )
    }
}

export default Create;
