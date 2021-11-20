import React, { useEffect, useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import './App.scss';
import { Cards } from './components/Cards';
import { Modal } from './components/Modal';


export const AppContext = React.createContext(null);

function App() {
  const [goods, setGoods] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch('https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e')
      .then(response => response.json())
      .then((json) => {
        const result = json.map((obj, index) => ({ ...obj, 'id': index + 1 }))
        setGoods(result)
      })
  }, []);

  const getCheapest = () => {
    const goodId = goods.sort((a, b) => a.price - b.price)[0].id
    history.push(`/goods/${goodId}`)
  };

  if (!goods.length) {
    return <h1>Loading...</h1>
  };

  return (
    <AppContext.Provider value={{ goods }}>
      <div className="App">
        <Route path='/' component={Cards} />
        <Route path={'/goods/:id'} component={Modal} />
        <button
          className="button button--cheapest"
          name='cheapest'
          onClick={getCheapest}
        >
          Buy cheapest
        </button>
      </div>
    </AppContext.Provider>
  );
}

export default App;