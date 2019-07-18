import React, {Component} from 'react';
import '../../assets/css/Hero.css';

class Hero extends Component{
    render () {
        const {name, age, weapon, race} = this.props.obj;
        return(
            <tr className={'character-row'}>
                <td>{name}</td>
                <td>{race}</td>
                <td>{age}</td>
                <td>{weapon}</td>
            </tr>

        );
    }
}

export default Hero;