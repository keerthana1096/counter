import React from 'react'
import './counter.css'
class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state={
            counter:1
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        },()=>console.log(this.state.counter))
    }
    handleSub=()=>{
        let count=parseInt(this.state.counter,10)
        if(count ==1){
            alert('cannot subtract min limit reached')
        }
        else{
        this.setState({
           counter:count-1
        },()=>console.log(this.state.counter))
    }
    }
    handleAdd=()=>{
        let count=parseInt(this.state.counter,10)
        if(count ==1000){
            alert('cannot add more max limit reached')
        }
        else{
        this.setState({
           counter:count+1
        },()=>console.log(this.state.counter))
    }
    }
    render(){
        return(<div>
            <center>
             <button  className="sub" onClick={()=>this.handleSub()}>-</button><input className="textbox"type="number" name="counter" value={this.state.counter} onChange={(value)=>{this.handleChange(value)}}/><button  className="add" onClick={()=>this.handleAdd()}>+</button>
                </center>
        </div>)
    }
}
export default Counter