import React,{useContext} from "react";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Bottom from "./components/Bottom";
import Navbar from "./components/Navbar";
import BookingPage from "./pages/BookingPage"
import { Switch, Route, Router } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import UserProvider, {UserContext} from "./UserProvider";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import PasswordReset from "./pages/ResetPass";
import ProfilePage from "./pages/ProfilePage";


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/booking-page" component={BookingPage} />
        <Route exact path="/servicepage" component={ContactUs}/>
        <Route exact path="/LoginPage" component={LoginPage}/>
        <Route exact path="/SignUp" component={SignUp}/>
        <Route exact path="/PassWordReset" component={PasswordReset}/>
        <Route component={Error} />
        <ProfilePage/>
      </Switch>
      <Bottom/>
    </>
  );
}

export default App;
