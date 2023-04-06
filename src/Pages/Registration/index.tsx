import React, { useState } from 'react';
import Form from '../../components/Form';
import st from './registration.module.scss';
import { FormCardType } from '../../components/FormCard';
import FormCards from '../../components/FormCards';

const Registration = () => {
  const [cards, setCards] = useState<FormCardType[]>([]);

  function addCard(newCard: FormCardType) {
    setCards((prevState) => [...prevState, newCard]);
  }

  return (
    <div className={st['registration-section']}>
      <div className={'wrapper'}>
        <div className={st.container}>
          <Form addCard={(card: FormCardType) => addCard(card)}></Form>
        </div>
        <FormCards cards={cards} />
      </div>
    </div>
  );
};

export default Registration;
