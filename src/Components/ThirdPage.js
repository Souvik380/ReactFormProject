import React, { Component } from 'react'
import Shop from "../Images/Shop.png"
import Store from "../Images/Store.png"

export default class ThirdPage extends Component {

  constructor(){
    super()
    this.state={
      first:false,
      second:false,
      firstDiv:false,
      secDiv:false
    }
  }

  changeHandler=(e)=>{
    let inputField=e.target.name

    if(inputField==="first" || inputField==="second"){
      this.setState({
        [inputField]:e.target.checked
      })
    }else{
      console.log("kawa-")
      console.log(e)
      this.setState({
        [inputField]:true
      })

    }
}

// changeStates=(state)=>{
//   this.setState({
    
//   })
// }

checkStates=()=>{
    let first=this.state.first
    let sec=this.state.second
    let firstDiv=this.state.firstDiv
    let secDiv=this.state.secDiv
    
console.log(firstDiv+" "+secDiv)
    if((first===true && (firstDiv===true || secDiv===true) ) || (sec===true && (firstDiv===true || secDiv===true) ) ){
        return true
    }

    if(firstDiv===false){  
      document.getElementById("first").style.border='2px solid red'
    }

    if(secDiv===false){
      document.getElementById("second").style.border='2px solid red'
    }

    if(first===false){
      document.getElementById("first-input").style.outline='solid blue'
    }

    if(sec===false){
      // document.getElementById("sec-input").style.='none'
      document.getElementById("sec-input").style.outline=" solid red"

    }
    return false
}

  FirstDivChange=()=>{
    document.getElementById("first").style.border="2px solid green"
    document.getElementById("second").style.border="none"
    this.setState({
      firstDiv:true
    })
  }

  SecDivChange=()=>{
    document.getElementById("first").style.border="none"
    document.getElementById("second").style.border="2px solid green"

    this.setState({
      secDiv:true
    })
  }

  render() {
    
    return (
      <div>

        <div className="flex mt-16 pl-0 border-solid object-top">
          <div className='ml-0'>
            <p className='text-gray-400 mr-6'>Step3/3</p>
            <p className='decoration-black font-bold text-2xl'>Checkbox</p>
          </div>
        </div>

        <div className='flex justify-between'>

          <div onClick={()=>this.FirstDivChange()} id="first" className='firstDiv'>
            <img  src={Shop} />

          </div>

          <div onClick={()=>this.SecDivChange()} id="second" className='secDiv'>
            <img  src={Store} />
          </div>

        </div>

        <div className=''>
            <div className='mt-6 flex space-x-4'>
                <input id="first-input" name="first" type="checkbox" onChange={(e)=>this.changeHandler(e)}/>
                <label>I want to add this option</label>
            </div>

            <div className='flex space-x-4'>
                <input id="sec-input" name="second" type="checkbox" onChange={(e)=>this.changeHandler(e)}/>
                <label>Let me click on this checkbox and choose some cool stuf</label>
            </div>
        </div>

        <div className='absolute top-[410px] left-[600px]'>
          <button onClick={()=>{this.checkStates()===true?this.props.onChange(true):this.props.onChange(false)}} className="absolute h-14 bg-gradient-to-r from-cyan-500 to-blue-500 h-[42px] p-4 flex items-center font-bold  rounded-[10px] text-white">Next</button>
        </div>
   
      </div>
      
    )
  }
}
