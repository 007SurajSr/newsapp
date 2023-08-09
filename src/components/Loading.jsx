import React, { Component } from 'react'
import Spinner from './Spinner.gif'
export class Loading extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className="my-3" src={Spinner} alt="Spinner" />
      </div>
    )
  }
}

export default Loading
