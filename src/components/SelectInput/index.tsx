import React from 'react';
import st from './select.module.scss';
import { FormValues } from '../Form';
import { UseFormRegister } from 'react-hook-form';

type SelectInputType = {
  register: UseFormRegister<FormValues>;
  error: string | undefined;
};

const SelectInput: React.FC<SelectInputType> = ({ register, error }) => {
  return (
    <div className={st.container}>
      <label className={st['input-label']}>
        Select contacts:
        <select
          className={st.input}
          defaultValue={''}
          data-testid="selectInput"
          {...register('contacts', {
            required: 'Choose contact format',
          })}
        >
          <option value="" disabled hidden>
            Select contact format
          </option>
          <option value="telegram">Telegram</option>
          <option value="whatsApp">WhatsApp</option>
          <option value="instagram">Instagram</option>
        </select>
        {error && (
          <p className={st['validation-message']} data-testid={'error-message'}>
            {error}
          </p>
        )}
      </label>
    </div>
  );
};

export default SelectInput;
