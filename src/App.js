import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import Person  from './Person/Person'
import User from './Person/User'

class App extends React.Component{
  state={
    persons:[
      {name:'Shivam',age:23},      
    ],
    isUserComponentDisplay:false
  }
  SwitchStateHandler =(name)=>{
    //this.setState({persons:[{name:'ABC',age:23}]})
    alert('Hello '+name)
  }

  NameChangeHandler =(event)=>{
    this.setState({persons:[{name:event.target.value,age:23}]})
  }

  ShowHideUserComponent=()=>{
    const isShow=this.state.isUserComponentDisplay;
    this.setState({isUserComponentDisplay:!isShow});
  }

  //Render method calles everytime when state is changed
  render(){
    let usrcomponent=null;
    if(this.state.isUserComponentDisplay){
      usrcomponent=(
        <User />
      );
    }
    return (
      <div className="App">
        <h1>This is react app</h1>

        {/* { this.state.isUserComponentDisplay?
          <User /> : null
        } */}
        {usrcomponent}
        <br/>
      <button onClick={this.ShowHideUserComponent}>{this.state.isUserComponentDisplay?'Hide':'Show'}</button>

        {/* <input type="text" onChange={this.NameChangeHandler}/> */}
        {/* <Person changed={this.NameChangeHandler} name={this.state.persons[0].name} age={this.state.persons[0].age}><br/>This is children properties</Person> */}
        {/* <button onClick={this.SwitchStateHandler.bind(this,this.state.persons[0].name)}>Swith State</button> */}
        
      </div>
    )
  }
}

export default App;
