import "./Form.css";

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text"placeholder="Type your Name here"></input>
            <label>Email</label>
            <input type="email" placeholder="Type your Email here"></input>
            <label>Subject</label>
            <input type="text"placeholder="Type your Subject here"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type your Message here"/>
            <button className="btn">Submit</button>

        </form>
    </div>
  )
}

export default Form