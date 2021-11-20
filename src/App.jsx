import React, { useEffect, useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import './App.scss';
import { Cards } from './components/Cards';
import { Modal } from './components/Modal';

const dataFromServer = [
  {
    "name": "orange Juice",
    "category": "Drinks",
    "price": 14.99,
    "id": 1
  },
  {
    "name": "Apples",
    "category": "fruits",
    "price": 4.99,
    "id": 2
  },
  {
    "name": "Tomatos",
    "category": "vegetables",
    "price": 6.39,
    "id": 3
  },
  {
    "name": "Coffee",
    "category": "Drinks",
    "price": 3.15,
    "id": 4
  },
  {
    "name": "Sweet Paper",
    "category": "Vegetables",
    "price": 12.15,
    "id": 5
  },
  {
    "name": "Grapes",
    "category": "FRUITS",
    "price": 20.49,
    "id": 6
  },
  {
    "name": "Pears",
    "category": "Fruits",
    "price": 1.35,
    "id": 7
  },
  {
    "name": "Team",
    "category": "Drinks",
    "price": 0.4,
    "id": 8
  }
]

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
    // setGoods(dataFromServer)
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