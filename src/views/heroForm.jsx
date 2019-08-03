import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {add} from "../store/Heros/action";
import '../assets/css/style.css';

const HeroForm = (props) => {
    const [form, setForm] = useState({name:'', age:0, race:'', weapon:''});
    const [redirect,setRedirect] = useState(false)
    const handleOnChange = ({target}) => {
        setForm({
            ...form,
            [target.name]: target.value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addHero(form)
        setRedirect(true)
    };
    if (redirect) {
        return <Redirect to={'/hero'}/>
    }
    return (
      <div className={'container'}>
          <h2>Add a Hero</h2>
          <form onSubmit={handleSubmit}>
              <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" name={'name'} onChange={handleOnChange} value={form.name} minLength={1} className="form-control" required/>
              </div>
              <div className="form-group">
                  <label htmlFor="age">Age</label>
                  <input type="number" name={'age'} onChange={handleOnChange} min={0} value={form.age} className="form-control" required/>
              </div>
              <div className="form-group">
                  <label htmlFor="race">Race</label>
                  <select name="race" id="raceSelect" onChange={handleOnChange} className="form-control" required>
                      <option value="Orc">Orc</option>
                      <option value="Human">Human</option>
                      <option value="Hobbit">Hobbit</option>
                      <option value="Maia">Maia</option>
                      <option value="Elf">Elf</option>
                      <option value="Dwarf">Dwarf</option>
                  </select>
              </div>
              <div className="form-group">
                  <label htmlFor="weapon">Weapon</label>
                  <input type="text" name={'weapon'} onChange={handleOnChange} value={form.weapon} minLength={1} className="form-control" required/>
              </div>
              <div className="float-right">
                  <button type={'button'} className="btn btn-default"><Link to={'/'}>Go back</Link></button>
                  <button type={'submit'} className="btn btn-success">Add</button>
              </div>
          </form>
      </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addHero: payload => dispatch(add(payload))
})

export default connect(null,mapDispatchToProps)(HeroForm);