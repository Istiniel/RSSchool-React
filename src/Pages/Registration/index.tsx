import React, { useState } from 'react';
import { CardType } from '../../components/Card';
import Form from '../../components/Form';
import st from './registration.module.scss';
import Cards from './../../components/Cards/index';

const Registration = () => {
  const [cards, setCards] = useState<CardType[]>([]);

  function addCard(newCard: CardType) {
    setCards((prevState) => [...prevState, newCard]);
  }

  return (
    <div className={st['registration-section']}>
      <div className={'wrapper'}>
        <div className={st.container}>
          <Form addCard={(card: CardType) => addCard(card)}></Form>
        </div>
        <Cards cards={cards} />
      </div>
    </div>
  );
};

export default Registration;
