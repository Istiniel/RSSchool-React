import React from 'react';
import st from './FormCards.module.scss';

// types
import FormCard, { FormCardType } from '../FormCard';

type CardsType = { cards: FormCardType[] };

const FormCards: React.FC<CardsType> = ({ cards }) => {
  return (
    <section className={st.cards}>
      {cards.map((card) => (
        <FormCard {...card} key={card.id} />
      ))}
    </section>
  );
};

export default FormCards;
