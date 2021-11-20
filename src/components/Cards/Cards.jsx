import React, { useContext } from 'react';
import { AppContext } from '../../App';
import { Card } from '../Card'
import './Cards.scss';

export const Cards = () => {

  const {goods} = useContext(AppContext)

  return (
    <ul className="cards">
      {
        goods.map(good => (
          <React.Fragment key={good.id}>
            <Card {...good} />
          </React.Fragment>
        ))
      }
    </ul>
  )
}
