import React, { useState } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { CardType } from '../Card';
import CityInput from './../CityInput/index';
import DateInput from '../DateInput';
import PopUp from '../PopUp';

import st from './form.module.scss';
import Button from '../Button';
import SelectInput from '../SelectInput';
import CheckBoxInput from '../CheckBoxInput';
import Switcher from '../Switcher';
import FileInput from '../FileInput';

export interface FormValues {
  city: string;
  date: string;
  contacts: 'telegram' | 'whatsApp' | 'instagram';
  terms: boolean;
  gender: string;
  male: boolean;
  female: boolean;
  image: FileList;
}

type FormPropsType = {
  addCard: (card: CardType) => void;
  callback?: () => void;
};

const AddCardForm: React.FC<FormPropsType> = ({ addCard, callback }) => {
  const [isPopActive, setIsPopActive] = useState<boolean>(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    clearErrors,
  } = useForm<FormValues>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    callback && callback();

    const file = data.image[0];
    const image = URL.createObjectURL(file);

    const newCard: CardType = {
      title: data.city,
      description: 'New Created Post Card',
      thumb: image,
      date: `${data.gender === 'female' ? 'Mrs.' : 'Mr.'} ${data.date}`,
      contacts: data.contacts,
      id: Math.random() * 823,
    };

    addCard(newCard);
    reset();
    setIsPopActive(true);
  };

  const onError: SubmitErrorHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <>
      <PopUp
        isActive={isPopActive}
        message={'created'}
        togglePopUp={() => setIsPopActive(!isPopActive)}
      />
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        onReset={() => clearErrors()}
        className={st.form}
      >
        <CityInput register={register} error={errors.city?.message} />
        <DateInput register={register} error={errors.date?.message} />
        <SelectInput register={register} error={errors.contacts?.message} />
        <CheckBoxInput register={register} error={errors.terms?.message} />
        <Switcher register={register} error={errors.gender?.message} />
        <FileInput register={register} error={errors.image?.message} />

        <div className={st.buttons}>
          <Button type={'submit'} color={'black'} content={'Create'} />
          <Button type={'button'} color={'black'} content={'Reset'} callback={() => reset()} />
        </div>
      </form>
    </>
  );
};

export default AddCardForm;
