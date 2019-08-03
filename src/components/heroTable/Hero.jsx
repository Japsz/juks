import React from 'react';
import '../../assets/css/Hero.css';

const Hero = props => {
  const {name, age, weapon, race} = props.obj;
  return(
    <tr className={'character-row'}>
      <td>{name}</td>
      <td>{race}</td>
      <td>{age}</td>
      <td>{weapon}</td>
    </tr>
  );
}

export default Hero;