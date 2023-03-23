import React from 'react';
import st from './cards.module.scss';
import Card from '../Card';

// types
import { CardType } from '../Card';

type CardsType = { cards: CardType[] };

const Cards: React.FC<CardsType> = ({ cards }) => {
  return (
    <section className={st.cards}>
      {cards.map((card) => (
        <Card {...card} key={card.id} />
      ))}
    </section>
  );
};

export default Cards;
