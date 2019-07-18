import React from 'react';
import Hero from './Hero';
import store from '../../store/store';
const {Consumer} = store;

const HeroTable = () => {
    return (
        <table className={'characters-table'}>
            <thead>
            <tr className={'character-row'}>
                <th>Name</th>
                <th>Race</th>
                <th>Age</th>
                <th>Weapon</th>
            </tr>
            </thead>
            <tbody>
            <Consumer>
                {
                    value => value.map((objeto, indice) =>
                        <Hero key={indice} obj={objeto}/>
                    )
                }
            </Consumer>
            </tbody>
        </table>
    );
}

export default HeroTable