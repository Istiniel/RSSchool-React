import React from 'react';
import st from './cards.module.scss';
import response from '../../API/response.json';
import Card from '../Card';

// types
import { CardType } from '../Card';

const Cards = () => {
  const cards: CardType[] = response;

  return (
    <section className={st.cards}>
      {cards.map((card) => (
        <Card {...card} key={card.id} />
      ))}
    </section>
  );
};

export default Cards;
