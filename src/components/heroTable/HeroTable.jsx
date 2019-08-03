import React from 'react';
import Hero from './Hero';
import {connect} from "react-redux";

const HeroTable = props => {
  const {heroList} = props
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
                {
                    heroList.map((objeto, indice) =>
                        <Hero key={indice} obj={objeto}/>
                    )
                }
            </tbody>
        </table>
    );
}
const mapStateToProps = state => ({
  heroList: state.Heros.list
})

export default connect(mapStateToProps,null)(HeroTable)