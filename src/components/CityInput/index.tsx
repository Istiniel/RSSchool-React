import React from 'react';
import st from './cityInput.module.scss';
import { UseFormRegister } from 'react-hook-form';
import { FormValues } from '../Form';

type CityInputType = {
  register: UseFormRegister<FormValues>;
  error: string | undefined;
};

const CityInput: React.FC<CityInputType> = ({ register, error }) => {
  return (
    <div className={st.container}>
      <label className={st['input-label']}>
        City:
        <input
          className={`${st.input} ${error && 'invalid'}`}
          type="text"
          placeholder="Enter city name"
          data-testid="input-city"
          {...register('city', {
            required: 'Enter city name',
            pattern: {
              value: /^[A-ZА-Я]/,
              message: 'City name should start from uppercase',
            },
          })}
        />
        {error && <p className={st['validation-message']}>{error}</p>}
      </label>
    </div>
  );
};

export default CityInput;
