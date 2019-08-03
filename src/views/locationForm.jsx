import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {add} from "../store/Locations/action";
import '../assets/css/style.css';

const LocationForm = (props) => {
    const [form, setForm] = useState({name:'', ruler:0, kingdom:'', img:''});
    const [redirect,setRedirect] = useState(false)
    const handleOnChange = ({target}) => {
        setForm({
            ...form,
            [target.name]: target.value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addLocation(form)
        setRedirect(true)
    };
    if (redirect) {
        return <Redirect to={'/location'}/>
    }
    return (
      <div className={'container'}>
          <h2>Add a Location</h2>
          <form onSubmit={handleSubmit}>
              <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" name={'name'} onChange={handleOnChange} value={form.name} minLength={1} className="form-control" required/>
              </div>
              <div className="form-group">
                  <label htmlFor="age">Rey</label>
                  <input type="text" name={'ruler'} onChange={handleOnChange} value={form.ruler} className="form-control" required/>
              </div>
              <div className="form-group">
                  <label htmlFor="reino">Reino</label>
                  <input type="text" name={'kingdom'} onChange={handleOnChange} value={form.kingdom} className="form-control" required/>
              </div>
              <div className="form-group">
                  <label htmlFor="img">Imagen</label>
                  <input type="text" name={'img'} onChange={handleOnChange} value={form.img} minLength={1} className="form-control" required/>
              </div>
              <div className="float-right">
                  <button type={'button'} className="btn btn-default" onClick={() => window.history.back()}>Atrás</button>
                  <button type={'submit'} className="btn btn-success">Añadir</button>
              </div>
          </form>
      </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addLocation: payload => dispatch(add(payload))
})

export default connect(null,mapDispatchToProps)(LocationForm);