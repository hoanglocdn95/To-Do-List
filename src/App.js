import React, { Component } from 'react';
import List from './List';
import ListAll from './ListAll';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: [
        {key:1,value:'list-1'},
        {key:2,value:'list-2'}
      ]
    };
  };
  setList =()=>{
    
  };
  
  edit = () =>{

  };
  delete = () =>{

  };
  render() {
    let showList = this.state.list.map((key)=>{
      return(
        <List dataList={key.value} 
              onClickEdit={this.edit} 
              onClickDel={this.delete}/>
      );
    });
    return (
      <div>
        <div id='name-list'><center>TO DO LIST</center></div>
        <ListAll>
          <div>{showList}</div>
        </ListAll>
      </div>
     
    );
  }
}

export default App;
