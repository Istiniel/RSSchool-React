import React from 'react';
import st from './fileInput.module.scss';
import { FormValues } from '../Form';
import { UseFormRegister } from 'react-hook-form';

type FileInputType = {
  register: UseFormRegister<FormValues>;
  error: string | undefined;
};

const FileInput: React.FC<FileInputType> = ({ register, error }) => {
  return (
    <div className={st.container}>
      <label className={st['input-label']}>
        Upload image:
        <input
          className={st.input}
          type="file"
          accept="image/png, image/jpeg"
          data-testid="input-file"
          {...register('image', {
            validate: {
              notEmpty: (value) => value.length > 0 || 'Please, upload card image',
              imgType: (value) =>
                (value.length > 0 && value[0].type.startsWith('image')) ||
                'Please, upload image file',
            },
          })}
        />
        {error && <p className={st['validation-message']}>{error}</p>}
      </label>
    </div>
  );
};

export default FileInput;
