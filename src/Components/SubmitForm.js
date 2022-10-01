import React, { Component } from 'react'

export default class SubmitForm extends Component {
  render() {
    return (
      <div className='flex flex-col justify-between border-solid items-center h-[32rem]'>
        <h1 className='font-bold text-4xl'>Your Form have been submitted!</h1>
        <h2 className='font-bold text-blue-600 text-6xl'>Thanks!!</h2>
        <button onClick={()=>this.props.onChange(true)} className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500 h-[42px] mt-8 mb-8 mr-12 py-4 px-4 flex items-center font-bold text-0.5xl rounded-[10px] text-white">Next Step</button>
      </div>
    )
  }
}
