import React from 'react';
import st from './dateInput.module.scss';
import { UseFormRegister } from 'react-hook-form';
import { FormValues } from '../Form';

type DateInputType = {
  register: UseFormRegister<FormValues>;
  error: string | undefined;
};

const DateInput: React.FC<DateInputType> = ({ register, error }) => {
  return (
    <div className={st.container}>
      <label className={st['input-label']}>
        Date:
        <input
          className={`${st.input} ${error && 'invalid'}`}
          type="date"
          placeholder="Enter visit day"
          data-testid="dateInput"
          {...register('date', {
            required: 'Enter visit day',
          })}
        />
        {error && <p className={st['validation-message']}>{error}</p>}
      </label>
    </div>
  );
};

export default DateInput;
