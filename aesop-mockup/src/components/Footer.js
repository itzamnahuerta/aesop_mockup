import React, { Component } from 'react';

// !done by christopher potti//////////////////
//!=========================================

class Footer extends React.Component {
    constructor(){
        super();
        this.state = {
          email:'',
          formComplete: false
        }
     }

     onEmailChange=(event) =>{
        this.setState({
          email: event.target.value
        })
      }

      
    render() {
        return (
            <div className="child footer">
                {/* <h1>hello this is the footer component</h1> */}
                <form className="footer1">
                    <label>I would like to receive communications about Aesop products, services, stores,events and matters of cultural interest.</label>
                    <input className="input" type='email' 
                    placeholder='Email address' 
                    value= {this.state.email}
                    onChange = {this.onEmailChange}
                    ></input>
                </form>
                <div className="footer2">

                <h4>Contact Us</h4>
                <ul>
                    <li>
                         <a src='https://nintendo.com' target='new'> Contact Us</a>
                    </li>
                    <li>
                         <a src='https://nintendo.com' target='new'> FAQs</a>
                    </li>
                    <li>
                         <a src='https://nintendo.com' target='new'> Delivery and Returns</a>
                    </li>
                    <li>
                         <a src='https://nintendo.com' target='new'> Track your order</a>
                    </li>
                    <li>
                         <a src='https://nintendo.com' target='new'> Check Gift Card balance</a>
                    </li>
                    <li>
                         <a src='https://nintendo.com' target='new'> Terms and conditions</a>
                    </li>
                    <li>
                         <a src='https://nintendo.com' target='new'> Accessibility</a>
                    </li>
                </ul>
                    </div>
                    <div className="footer3">
                          <h4>About</h4>
                <ul>
                    <li>
                         <a src='https://nintendo.com' target='new'> Our story</a>
                    </li>
                    <li>
                         <a src='https://nintendo.com' target='new'> Careers</a>
                    </li>
                    <li>
                         <a src='https://nintendo.com' target='new'> Press</a>
                    </li>
                    <li>
                         <a src='https://nintendo.com' target='new'> Corporate gifts</a>
                    </li>
                    <li>
                         <a src='https://nintendo.com' target='new'> Facial appointments</a>
                    </li>

                </ul>
                    </div>
               <div className="footer4">
                      <h4>Social</h4>
                <ul>
                    <li>
                         <a src='' target='new'> Instagram</a>
                    </li>
                    <li>
                         <a src='' target='new'> Twitter</a>
                    </li>
                    <li>
                         <a src='' target='new'> Linkedin</a>
                    </li>
                    
                </ul>
               </div>


              
            </div>
        );
    }
}

export default Footer;