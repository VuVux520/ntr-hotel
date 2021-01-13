import Hero from "../components/Hero";
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import FeaturedRooms from '../components/FeaturedRooms';
import React, { Component } from 'react'

export default class Navbar extends Component{
render (){
    return (
        <React.Fragment>
            <Hero>
                <Banner
                title="Book a Room">
                    <Link to ="/rooms/" className="btn-primary">Our rooms</Link>
                </Banner>
            </Hero>
            <FeaturedRooms/>
        </React.Fragment>
    )
}
}