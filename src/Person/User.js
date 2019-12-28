import React from 'react'

class User extends React.Component{
    state={
        name:"",
        userinput:[]
    }

    onTextChangeHandler=(event)=>{
        this.setState({name:event.target.value});
    }

    onSubmitClickHandler=(event)=>{
        alert('Hello '+this.state.name);
    }

    onItemsAddedHandler=()=>{   
        if(this.state.name!=null && this.state.name!=='') {
            this.setState({
                userinput:[...this.state.userinput,{name:this.state.name}]
            })
        }
    }

    deleteItemHandler=(index)=>{
        const allitems=[...this.state.userinput];
        allitems.splice(index,1);
        this.setState({
            userinput: allitems
        })
    }

    render(){        
        const items=this.state.userinput.map((each_input,index)=>{
            return <p onClick={this.deleteItemHandler.bind(this,index)} key={index}>{each_input.name}</p>
        })
        return(
            <div>
                <p>You have entered {this.state.name}</p>
                <input type="text" onChange={this.onTextChangeHandler}/>
                <h4>Items added:-----</h4><br/>
                {items}
                <button onClick={this.onSubmitClickHandler}>Submit</button>
                <button onClick={this.onItemsAddedHandler}>Add Items</button>

            </div>
        );
    }
}

export default User;