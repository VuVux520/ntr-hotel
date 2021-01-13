import React, { Component } from 'react'
import Banner from '../components/Banner'
import Hero from "../components/Hero";
import { Link } from 'react-router-dom';

export default class SingleRoom extends Component {
    render (){
        return (
            <React.Fragment>
            <Hero>
                <Banner
                    title = "Contact Us"
                >
                    <Link to ="/" className="btn-primary">
                        Return Home
                    </Link>
                </Banner>
            </Hero>
            <div className="container-contact-us">
            <form className="form" id="form-1">
                <h3 className="heading">CONTACT US</h3>
                <div className="note-container">
                    <h4 className="heading-note">We will get back to you personally.</h4>
                    <h4 className="heading-note">Customer Service Language : English, VietNamese</h4>
                    <h4 className="heading-note">We will contact you as soon as posible.</h4>
                </div>
               <div className="content-container">
                    <div className="contactus-form-1 contactus-form">
                        <label className="form-full-name">
                        Full name
                        </label>
                        <br/>
                    <input
                        id="fullname"
                        type="text"
                    />
                </div>

                <div className="contactus-form-2 contactus-form">
                <label className="form-email">
                        Email
                </label>
                <br/>
                <input
                    id="email"
                    type="email"
                />
                </div>

                <div className="contactus-form-3 contactus-form">
                <label className="form-label">
                        Subject
                </label>
                <br/>
                <input
                    id="subject"
                    type="text"
                    placeholder="Please state your problem"
                />
                </div>
                <div className="contactus-form-4 contactus-form">
                <label className="form-message">
                        Message
                </label>
                <br/>
                <input
                    id="subject"
                    type="text"
                    placeholder="Message"
                />
                </div>
               </div>
               <button className="form-submit">Send</button>
            </form>
        </div>  
        </React.Fragment>
    )
    }
}
