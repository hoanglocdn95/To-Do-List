import React, { Component } from 'react';
import List from './List';
import ListAll from './ListAll';
import Create from './Create';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);
    this.add = this.add.bind(this);
    this.state = {
      list: [
        {key:1,value:'list-1'},
        {key:2,value:'list-2'},
        {key:3,value:'list-3'}
      ]
    };
  };
  edit =()=>{
    
  };
  
  add = () =>{
    var a = document.getElementById('value').value;
    const arr = this.state.list;
    const arr2=[{key: arr[arr.length-1].key +1, value: a }];
    const arr3 = arr.concat(arr2);
    this.setState({
      list: arr3
    });
    console.log(this.state.list);
  };
  delete = (index) =>{
    const arr = this.state.list;
    arr.splice(index-1,1);
    this.setState({
      list: arr
    });
  };
  render() {
    let showList = this.state.list.map((list)=>{
      return(
        <List dataList={list.value} 
              onClickEdit={this.edit} 
              onClickDel={this.delete}/>
      );
    });
    return (
      <div>
        <div id='name-list'><center>TO DO LIST</center></div>
        <Create onClickAdd={this.add}/>
        <ListAll>
          <div>{showList}</div>
        </ListAll>
      </div>
    );
  }
}

export default App;
