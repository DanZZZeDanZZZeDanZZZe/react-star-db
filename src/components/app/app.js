import React, {useState, useEffect} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

const App = () => {
  const [state, setstate] = useState({
    planetVisible: <RandomPlanet/>
  });
  const [selectedPerson, setSelectedPerson] = useState(5)

  const clickHandler = () => {
    let value = null
    const {planetVisible} = state
    if (planetVisible === null) {
      value = <RandomPlanet/>
    }
    setstate({
      planetVisible: value
    })
  } 
  useEffect(() => {
    console.log(state)
  }, [state]);

  const onPersonSelected = (id) => {
    setSelectedPerson(id)
  }

  return (
    <div>
      <Header />
      {state.planetVisible}
      <button 
        type="button" 
        onClick={()=>{
          clickHandler()
          console.log(state)
        }}
        className="btn toggle-planet-button"
      >Toggle random planet</button>

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={onPersonSelected}/>
        </div>
        <div className="col-md-6">
          <PersonDetails personId={selectedPerson}/>
        </div>
      </div>
    </div>
  );
};

export default App;