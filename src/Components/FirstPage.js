import React, { Component } from 'react'


export default class FirstPage extends Component {

    constructor(){
        super()
        this.state={
            first:"",
            last:"",
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
        let first=this.state.first
        let last=this.state.last
        let dob=this.state.dob
        let address=this.state.address
        let email=this.state.email

        
        if(dob!=="" && first!=="" && last!=="" && address!=="" && email!==""){
            return true
        }
        console.log("!!!",first)
        if(first===""){
        
            document.getElementById("first-name").style.border="2px solid red"
            document.getElementById("first-name").placeholder="First Name"
        }

        if(last===""){
            document.getElementById("last-name").style.border="2px solid red"
            document.getElementById("last-name").placeholder="Last Name"
        }

        if(dob===""){
            document.getElementById("dob").style.border="2px solid red"
            document.getElementById("dob").placeholder="DOB"
        }

        if(address===""){
            document.getElementById("address").style.border="2px solid red"
            document.getElementById("address").placeholder="Address"
        }

        if(email===""){
            document.getElementById("email").style.border="2px solid red"
            document.getElementById("email").placeholder="Email"
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
                <input id="first-name" name="first" type="text" className='border-solid border-4 from-cyan-500 to-blue-500' onChange={(e)=>this.changeHandler(e)} required/>
            </div>

            <div>
                <p className='text-black-400 font-bold'>Last Name</p>
                <input id="last-name" name="last" type="text" className='border-solid border-4 from-cyan-500 to-blue-500' onChange={(e)=>this.changeHandler(e)} required/>
            </div>
        </div>

        <div className='flex justify-between'>
            <div>
                <p className='text-black-400 font-bold'>Date of Birth</p>
                <input id="dob" name="dob" type="date" className='dob border-solid border-4 from-cyan-500 to-blue-500' onChange={(e)=>this.changeHandler(e)} required/>
            </div>

            <div>
                <p className='text-black-400 font-bold ml-6'>Email</p>
                <input id="email" name="email" type="email" className='ml-6 border-solid border-4 from-cyan-500 to-blue-500' onChange={(e)=>this.changeHandler(e)} required/>
            </div>
        </div>

        <div >
            <p className='text-black-400 font-bold'>Address</p>
            <input id="address" name="address" type="text" className='w-full border-solid border-4 from-cyan-500 to-blue-500' onChange={(e)=>this.changeHandler(e)} required/>
        </div>
        
        <div className='w-full flex justify-end'>
            <button onClick={()=>{this.checkStates()===true?this.props.onChange(true):this.props.onChange(false)}} className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500 h-[42px]  mb-8 mr-12 py-4 px-4 flex items-center font-bold text-0.5xl rounded-[10px] text-white">Next</button>
        </div>
        
      </div>
    )
  }
}
