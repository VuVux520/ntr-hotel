import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";
import {
    Form,
    Input,
    DatePicker
  } from 'antd';
import {Modal} from "antd" 
  const { RangePicker } = DatePicker;


export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg,
      isVisible: false
    };
  }
  static contextType = RoomContext;

  // componentDidMount() {
  //   console.log(this.props);
  // }
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3> no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;
    const [main, ...defaultImages] = images;
    console.log(defaultImages);

    return (
      <React.Fragment>
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div style={
            {display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px"}
          }>
          <button className="button-booking" onClick={()=>this.setState({
          isVisible: true
        })}>Book this one</button>
          </div>
          
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                max capacity :
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras </h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
        
        <Modal
                    title="MAKE A RESERVATION"
                    centered
                    visible={this.state.isVisible}
                    onCancel={()=>this.setState({isVisible: false})}
                    onOk={()=>this.setState({...this.state, isVisible: false})}
                    okText="Book this room"
                    > 
    <Form
    labelCol={{ span: 4}}
    wrapperCol={{ span: 18 }}
    layout="horizontal">
    <Form.Item label="Name: ">
          <Input id="name" />
        </Form.Item>
        <Form.Item label="Phone: ">
          <Input id="phone" />
        </Form.Item>
        <Form.Item label="Email: ">
          <Input id="email" />
        </Form.Item>
        <Form.Item label="Date: ">
        <RangePicker/>
        </Form.Item>
        </Form>
          </Modal>
    </React.Fragment>
    );
  }
}
