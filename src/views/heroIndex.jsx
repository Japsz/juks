import React, {useState} from 'react';
import '../assets/css/style.css';
import HeroTable from '../components/heroTable/HeroTable';
import HeroForm from "./heroForm";
import {NavLink} from "react-router-dom";

const HeroIndex = () => {
    return (
            <div className={'container'}>
              <h2>Fellowship of the Ring <NavLink to={'/hero/add'}>Add</NavLink></h2>
              <HeroTable />
            </div>
    );
};

export default HeroIndex;
