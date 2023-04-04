import React from 'react';
import st from './cards.module.scss';
import Card from '../Card';

// types
import { Anime } from './../../API/API';

type CardsType = { cards: Anime[] };

const Cards: React.FC<CardsType> = ({ cards }) => {
  return (
    <section className={st.cards}>
      {cards.map((card) => (
        <Card {...card} key={card.mal_id} />
      ))}
    </section>
  );
};

export default Cards;
