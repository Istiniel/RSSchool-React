import React from 'react';
import st from './switcher.module.scss';
import { FormValues } from '../Form';
import { UseFormRegister } from 'react-hook-form';

type SwitcherType = {
  register: UseFormRegister<FormValues>;
  error: string | undefined;
};
const Switcher: React.FC<SwitcherType> = ({ register, error }) => {
  return (
    <div className={st.container}>
      <h3 className={st.header}>{'Choose gender'}</h3>
      <div className={st['radio-container']}>
        <label className={st['input-label']}>
          Female
          <input
            className={st.switcher}
            type="radio"
            {...register('gender', {
              required: 'Please, make a choise',
            })}
            value="female"
          />
          {error && <p className={st['validation-message']}>{'Please, make a choise'}</p>}
        </label>
        <label className={st['input-label']}>
          Male
          <input className={st.switcher} type="radio" {...register('gender')} value="male" />
        </label>
      </div>
    </div>
  );
};

export default Switcher;
