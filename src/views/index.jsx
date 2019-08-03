import React from 'react';
import '../assets/css/style.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Heros from "./heroIndex";
import HeroForm from "./heroForm";
import LocationForm from "./locationForm";
import Header from "../components/common/Header";
import Locations from "../components/location";

const Index = () => {
  return (
    <div className='index'>
      <Header/>
      <Route exact path={'/hero'} component={Heros} />
      <Route exact path={'/hero/add'} component={HeroForm} />
      <Route path={'/location'} component={Locations}/>
      <Route exact path={'/add/location'} component={LocationForm}/>
    </div>
  );
};

export default Index;