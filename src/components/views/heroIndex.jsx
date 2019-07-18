import React, {useState} from 'react';
import '../../assets/css/style.css';
import HeroTable from '../heroTable/HeroTable';
import jiros from '../../assets/js/heroes';
import store from '../../store/store';

const HeroIndex = () => {
    const [array, setArray] = useState(jiros);
    const [form, setForm] = useState({name:'', age:0, race:'Orc', weapon:'', hasRing: false, isDead: false});
    const {Provider} = store;

    const handleOnChange = ({target}) => {
        setForm({
            ...form,
            [target.name]: target.value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        let newArray = array;
        newArray.unshift(form);
        setArray(newArray);
        setForm({name:'', age:0, race:'Orc', weapon:'', isDead: false, hasRing: false});
    };
    return (
        <div className="index">
            <h2>Fellowship of the Ring</h2>
            <div className={'container'}>
                <Provider value={array}>
                    <HeroTable />
                </Provider>
            </div>
            <h2>Add a Hero</h2>
            <div className={'container'}>
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
                        <select name="race" id="raceSelect" onChange={handleOnChange} value={form.race} className="form-control" required>
                            <option value="Orc" defaultValue>Orc</option>
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
                        <button type={'submit'} className="btn btn-success">Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default HeroIndex;
