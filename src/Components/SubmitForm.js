import React, { Component } from 'react'

export default class SubmitForm extends Component {
  render() {
    return (
      <div>
        <h1>Your Form have been submitted!</h1>
        <button onClick={()=>this.props.onChange(true)} className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500 h-[42px] mt-8 mb-8 mr-12 py-4 px-4 flex items-center font-bold text-0.5xl rounded-[10px] text-white">Next Step</button>
      </div>
    )
  }
}
