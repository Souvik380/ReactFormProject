import React, { Component } from 'react'

export default class SecondPage extends Component {

    constructor(){
        super()
        this.state={
            message:"",
            first:false,
            second:false
        }
    }

    changeHandler=(e)=>{
        let inputField=e.target.name

        if(inputField==="message"){
            this.setState({
                [inputField]:e.target.value
            })
        }else{
            this.setState({
                [inputField]:e.target.checked
            })
        } 
    }

    checkStates=()=>{

        let first=this.state.first
        let sec=this.state.second
        let message=this.state.message

        if((first!==false && message!=="") || (sec!==false && message!=="") ){
            return true
        }

        if(message===""){
            document.getElementById("message").style.border="2px solid red"
            document.getElementById("message").placeholder="Please write something"
        }

        if(first===false && sec===false){
            document.getElementById("first").style.outline="2px solid red"
            document.getElementById("second").style.outline="2px solid red"
        }

        return false
    }

  render() {
    return (
        <div className='h-full'>
            
            <div className="flex mt-16 pl-0 border-solid ">
                <div className='ml-0'>
                    <p className='text-gray-400 mr-6'>Step2/3</p>
                    <p className='decoration-black font-bold text-2xl'>Message</p>
                </div>
            </div>

            <div className='mt-9'>
                <p>Message</p>
                <textarea id="message" name="message" className="focus:outline-none border-solid border-2 border-sky-600 rounded w-full h-[20vh]" onKeyUp={(e)=>this.changeHandler(e)} />
            </div>

            <div className='flex space-x-8'>

            <div>
                <input id="first" name="first" type="checkbox" className=' border-2 rounded-full' onChange={(e)=>this.changeHandler(e)} />
                <label>The number one choice</label>
            </div>

            <div>
                <input id="second" name="second" type="checkbox" onChange={(e)=>this.changeHandler(e)} />
                <label>The number two choice</label>
            </div>
        </div>

        <div className='w-full flex justify-end mt-6'>
            <button onClick={()=>{this.checkStates()===true?this.props.onChange(true):this.props.onChange(false)}} className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500 h-[42px]  mb-8 mr-12 py-4 px-4 flex items-center font-bold text-0.5xl rounded-[10px] text-white">Next</button>
        </div>

      </div>
    )
  }
}
