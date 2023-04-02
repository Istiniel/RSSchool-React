import React from 'react';
import st from './checkBox.module.scss';
import { FormValues } from '../Form';
import { UseFormRegister } from 'react-hook-form';

type CheckBoxInputType = {
  register: UseFormRegister<FormValues>;
  error: string | undefined;
};

const CheckBoxInput: React.FC<CheckBoxInputType> = ({ register, error }) => {
  return (
    <div className={st.container}>
      Terms:
      <label className={st['input-label']} data-testid="termsCheckBox">
        <input
          className={`${st.input} ${error && 'invalid'}`}
          type="checkbox"
          {...register('terms', {
            required: 'Please, accept agreement',
          })}
        />
        <p className={st.terms}>{'I consent to my personal data'}</p>

        {error && (
          <p className={st['validation-message']} data-testid={'error-message'}>
            {error}
          </p>
        )}
      </label>
    </div>
  );
};

export default CheckBoxInput;
