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
    this.save = this.save.bind(this);
    this.state = {
      list: [
        {key:1,value:'list-1'},
        {key:2,value:'list-2'},
        {key:3,value:'list-3'}
      ]
    };
  };
  edit =(id)=>{
    let arrDiv = document.getElementsByClassName('input-list');
    let arrInput = document.getElementsByClassName('input-edit');
    let arrSave = document.getElementsByClassName('button-save');
    arrInput[id].style.display = 'inline-block'; 
    arrDiv[id].style.display ='none';
    arrSave[id].style.display = 'inline-block';
  };
  save =(id)=>{
    const arr = this.state.list;
    const arr2 = {
                    key: id+1, 
                    value: document.getElementsByClassName('input-edit')[id].value
                  }; 
    arr[id] = arr2;
    this.setState({
      list: arr
    });
      console.log('sau '+this.state.list[id].key);
      
      let arrDiv = document.getElementsByClassName('input-list');
      let arrInput = document.getElementsByClassName('input-edit');
      let arrSave = document.getElementsByClassName('button-save');
      arrInput[id].style.display = 'none'; 
      arrDiv[id].style.display ='inline-block';
      arrSave[id].style.display = 'none';
  }
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
    let showList = this.state.list.map((list, index)=>{
      return(
        <List dataList={list.value} 
              onClickEdit={this.edit} 
              onClickDel={this.delete}
              onClickSave={this.save}
              indexList={index}
        />
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
