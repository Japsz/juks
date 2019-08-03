import React from 'react';
import {connect} from "react-redux";
import './styles.css'
import {NavLink, Switch, Route} from "react-router-dom";
import Single from "./Single";



const Index = (props) => {
  console.log(props)
  console.log(props.path)
  const {locationList} = props
  return (
    <div className='container'>
      <h2>Locations of the Realm <NavLink to={'/add/location'}>Add</NavLink></h2>
      <ul>
        {
          locationList.map((item,idx) => {
            return(<li key={idx} id={idx}><NavLink activeClassName='selected' to={`${props.match.path}/${item.name}`}>{item.name}</NavLink></li>)
          })
        }
      </ul>
      <div className="location-thumbnail">
        <Switch>
          <Route exact path={'/location/:name'} component={Single}/>
          <Route render={() => <div className='none'>Selecciona Algún Lugar</div>}/>
        </Switch>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  locationList: state.Locations.list
})

export default connect(mapStateToProps,null)(Index);