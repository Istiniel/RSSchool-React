import React from 'react';
import Form from '../../components/Form';
import st from './registration.module.scss';
import FormCards from '../../components/FormCards';
import { useAppSelector } from '../../redux/hooks';
import { selectFormCards } from '../../redux/features/anime/anime';

const Registration = () => {
  const formCards = useAppSelector(selectFormCards);

  return (
    <div className={st['registration-section']}>
      <div className={'wrapper'}>
        <div className={st.container}>
          <Form />
        </div>
        <FormCards cards={formCards} />
      </div>
    </div>
  );
};

export default Registration;
