import React, { Component } from 'react'
import Shop from "../Images/Shop.png"
import Store from "../Images/Store.png"

export default class ThirdPage extends Component {

  constructor(){
    super()
    this.state={
      first:false,
      sec:false

    }
  }

  changeHandler=(e)=>{
    let inputField=e.target.name

    this.setState({
      [inputField]:e.target.checked
  })
}

checkStates=()=>{
    let first=this.state.first
    let sec=this.state.second
    
    if((first!==false) || (sec!==false) ){
        return true
    }
    return false
}

  render() {
    
    return (
      <div>

        <div className="flex mt-16 pl-0 border-solid ">
          <div className='ml-0'>
            <p className='text-gray-400 mr-6'>Step3/3</p>
            <p className='decoration-black font-bold text-2xl'>Checkbox</p>
          </div>
        </div>

        <div className='flex justify-between'>

          <div className='border-solid border-4 border-indigo-600'>
            <img src={Shop} />

          </div>

          <div className='border-solid border-4 border-indigo-600'>
            <img src={Store} />
          </div>

        </div>

        <div>
            <div className='mt-6 flex space-x-4'>
                <input name="first" type="checkbox" />
                <label>I want to add this option</label>
            </div>

            <div className='flex space-x-4'>
                <input name="second" type="checkbox" />
                <label>Let me click on this checkbox and choose some cool stuf</label>
            </div>
        </div>

        <button onClick={()=>{this.checkStates()===true?this.props.onChange(true):this.props.onChange(false)}} className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500 h-[42px] mt-8 mb-8 mr-12 py-4 px-4 flex items-center font-bold text-0.5xl rounded-[10px] text-white">Next Step</button>

      </div>
      
    )
  }
}
