import React from 'react';
import {connect} from "react-redux";
import {set} from "../../store/Locations/action";


const Single = props => {
  const {selected} = props
  if (selected === {} || props.match.params.name !== selected.name) {
      props.setSelected(props.match.params.name)
  }
  return (
    <div className='thumbnail'>
      <img src={selected.img} alt="Imagen"/>
      <ul>
        <li><strong>Rey: </strong>{selected.ruler}</li>
        <li><strong>Reino: </strong>{selected.kingdom}</li>
      </ul>
    </div>
  );
};
const mapStateToProps = state => ({
  selected: state.Locations.selected
})
const mapDispatchToProps = dispatch => ({
  setSelected: payload => dispatch(set(payload))
})
export default connect(mapStateToProps,mapDispatchToProps)(Single);