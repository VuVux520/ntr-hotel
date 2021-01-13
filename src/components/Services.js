import React, { Component } from 'react';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import LocalAirportIcon from '@material-ui/icons/LocalAirport';
import WifiIcon from '@material-ui/icons/Wifi';
import LocalLaundryServiceIcon from '@material-ui/icons/LocalLaundryService';
import Title from './Title';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import HotTubIcon from '@material-ui/icons/HotTub';
import PoolIcon from '@material-ui/icons/Pool';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
export default class Services extends Component {
  state = {
    services: [
      {
          icon: <FreeBreakfastIcon />,
          title: "Free Breakfast"
      },
      {
          icon: <WifiIcon />,
          title: "Free Wi-Fi In All Rooms!",
      },
      {
          icon: <LocalAirportIcon/>,
          title: "Airport Transfer",
      },
      {
          icon: <LocalLaundryServiceIcon />,
          title: "Daily Housekeeping",
      },
      {
          icon: <LocalBarIcon />,
          title: "Bar",
      },
      {
          icon: <HotTubIcon />,
          title: "Hot Tub",
      },
      {
          icon: <PoolIcon />,
          title: "Swimming Pool [Outdoor]",
      },
      {
          icon: <FitnessCenterIcon />,
          title: "Fitness Center",
      },
  ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
