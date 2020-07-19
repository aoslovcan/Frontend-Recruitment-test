import React, { Component } from 'react';
import { animations, easings } from 'react-animation';
import { formValidate } from '../Actions/FormValidation';
import { SendData } from '../Actions/SendData';

import './ContactUs.css'


const style = {
    animation: `pop-in ${easings.easeOutExpo} 1200ms forwards`
}
class ContactUs extends Component {

    constructor(props) {

        super(props)

        this.state = {
            email: '',
            message: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeHandler = x => {
        this.setState({
            [x.target.name]: x.target.value
        })
    }


    handleSubmit(e) {
        e.preventDefault();
        const data = this.state;
        const isValid = formValidate(data);

        if (isValid) {
            SendData(data);
        }

    }


    render() {

        const { email, message } = this.state;
        return (
            <div className="contact">

                <div className="col-6 offset-3" id="content">
                    <form style={style} onSubmit={this.handleSubmit}>
                        <h3>Contact Us</h3>
                        <div className="form-group row" >
                            <label className="col-sm-2 col-form-label" htmlFor="email">e-mail:</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" name="email" id="email"
                                    value={email}
                                    onChange={this.changeHandler}
                                />
                                <span id="emailError" style={{ color: 'red' }}></span>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-form-label col-sm-2" htmlFor="message">Message:</label>
                            <div className="col-sm-10">
                                <textarea className="form-control" id="w3review" name="message" rows="3"
                                    onChange={this.changeHandler}
                                    value={message}></textarea>
                                <span id="messageError" style={{ color: 'red' }}></span>
                            </div>

                        </div>

                        <button type="submit" className="button ">send</button>


                    </form>
                </div>
            </div>
        )
    }
}

export default ContactUs;