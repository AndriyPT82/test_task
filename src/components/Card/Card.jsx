import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Form } from '../Form';
import './Card.scss';

export const Card = ({ id, name, category, price, modal = false }) => {

  return (
    <li
      className={classNames(
        'card',
        { 'card--modal': !!modal })}
    >
      {
        !!modal && <Link to='/' className="card__closer"> ⤬ </Link>
      }
      {
        !id ? <>
          <h2>Not found</h2>
          <Link to='/' className="button"> CLOSE </Link>
        </> : <>
          <div className="card__category">{category}</div>
          <div className="card__name">{name}</div>
          <div className={classNames(
            'card__order',
            { 'card__order--modal': !!modal })}
          >
            <span className="card__price">{price.toFixed(2)}</span>
            {!!modal
              ? <Form />
              : <Link to={`goods/${id}`} className="button card__button">
                Buy
              </Link>
            }
          </div>
        </>
      }
    </li >
  )
}
