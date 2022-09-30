import React, { Component } from 'react'

export default class ThirdPageHead extends Component {
    render() {
        return (
          <div>
            <div className="head  flex space-x-8 #5b21b6">
                <p className='text-gray-400 font-bold'><span className="text-black-400">✔</span>Sign Up</p>
                <p className='text-gray-400 font-bold'>2 Message</p>
                <p><span className='text-white-200 bg-[#0ea5e9] ml-0 px-4 py-2 rounded-lg text-zinc-50'>3</span> CheckBox</p>
            </div>
          </div>
        )
      }

}
