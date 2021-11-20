import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '../Card';
import './Modal.scss';

import { AppContext } from '../../App';

export const Modal = () => {

  const [good, setGood] = useState(null);
  const { goods } = useContext(AppContext);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    const good = goods.find(good => good.id === +id);
    setGood(good)
  }, [id])

  return (
    <div className="modal">
      <Card modal={true} {...good} />
    </div>
  )
}