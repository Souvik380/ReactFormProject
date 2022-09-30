import React, { Component } from 'react'


export default class FirstPage extends Component {

    constructor(){
        super()
        this.state={
            firstName:"",
            lastName:"",
            dob:"",
            email:"",
            address:""
        }
    }

    changeHandler=(e)=>{
        let inputField=e.target.name
        this.setState({
            [inputField]:e.target.value
        })
    }

    checkStates=()=>{
        let first=this.state.firstName
        let last=this.state.last
        let dob=this.state.dob
        let address=this.state.address
        let email=this.state.email

        if(last!=="" && address!=="" && email!==""){
            return true
        }
        return false
    }

  render() {
    
    return (
      <div className='flex flex-col space-y-8'>
        
        <div className="flex mt-16 pl-0 border-solid ">
            <div className='ml-0'>
                <p className='text-gray-400 mr-6'>Step1/3</p>
                <p className='decoration-black font-bold text-2xl'>Sign UP</p>
            </div>
        </div>

        <div className='flex justify-between'>
            <div>
                <p className='text-black-400 font-bold'>First Name</p>
                <input name="first" type="text" className='border-solid border-4 from-cyan-500 to-blue-500' onKeyUp={(e)=>this.changeHandler(e)} required/>
            </div>

            <div>
                <p className='text-black-400 font-bold'>Last Name</p>
                <input name="last" type="text" className='border-solid border-4 from-cyan-500 to-blue-500' onKeyUp={(e)=>this.changeHandler(e)} required/>
            </div>
        </div>

        <div className='flex justify-between'>
            <div>
                <p className='text-black-400 font-bold'>Date of Birth</p>
                <input name="dob" type="date" className='border-solid border-4 from-cyan-500 to-blue-500' onKeyUp={(e)=>this.changeHandler(e)} required/>
            </div>

            <div>
                <p className='text-black-400 font-bold ml-6'>Email</p>
                <input name="email" type="email" className='ml-6 border-solid border-4 from-cyan-500 to-blue-500' onKeyUp={(e)=>this.changeHandler(e)} required/>
            </div>
        </div>

        <div >
            <p className='text-black-400 font-bold'>Address</p>
            <input name="address" type="text" className='w-full border-solid border-4 from-cyan-500 to-blue-500' onKeyUp={(e)=>this.changeHandler(e)} required/>
        </div>
        
        <button onClick={()=>{this.checkStates()===true?this.props.onChange(true):this.props.onChange(false)}} className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500 h-[42px] mt-8 mb-8 mr-12 py-4 px-4 flex items-center font-bold text-0.5xl rounded-[10px] text-white">Next Step</button>
      </div>
    )
  }
}
