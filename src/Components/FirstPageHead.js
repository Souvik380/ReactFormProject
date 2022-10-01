import React, { Component } from 'react'

export default class FirstPageHead extends Component {
  render() {
    return (
      <div>

        <div className="head  mt-8 flex space-x-8 #5b21b6">
            <p><span className='text-white-200 bg-[#0ea5e9] ml-0 px-4 py-2 rounded-lg text-zinc-50'>1</span> Sign Up</p>
            <p className='text-gray-400 font-bold'><span className="text-black-400">2</span> Message</p>
            <p className='text-gray-400 font-bold'>3 CheckBox</p>
        </div>


      </div>
    )
  }
}
