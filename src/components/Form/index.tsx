import React from 'react';
import { validateForm, validationValues } from '../../validations/validations';
import { CardType } from '../Card';
import CheckBoxInput from '../CheckBoxInput';
import CityInput from '../CityInput/index';
import SelectInput from '../SelectInput';
import DateInput from './../DateInput/index';
import Switcher from './../Switcher/index';
import st from './form.module.scss';
import Button from '../Button';
import FileInput from './../FileInput/index';
import PopUp from '../PopUp';

export type CardValidation = {
  isPopUpActive: boolean;
  validation: {
    cityValidation: string;
    dateValidation: string;
    selectValidation: string;
    checkboxValidation: string;
    switcherValidation: string;
    fileValidation: string;
  };
};

type FormPropsType = {
  addCard: (card: CardType) => void;
};

class Form extends React.Component<FormPropsType, CardValidation> {
  private form = React.createRef<HTMLFormElement>();
  private cityInput = React.createRef<HTMLInputElement>();
  private dateInput = React.createRef<HTMLInputElement>();
  private selectInput = React.createRef<HTMLSelectElement>();
  private checkboxInput = React.createRef<HTMLInputElement>();
  private switcherInputFemale = React.createRef<HTMLInputElement>();
  private switcherInputMale = React.createRef<HTMLInputElement>();
  private fileUploadInput = React.createRef<HTMLInputElement>();

  constructor(props: FormPropsType) {
    super(props);

    this.state = {
      isPopUpActive: false,
      validation: {
        cityValidation: '',
        dateValidation: '',
        selectValidation: '',
        checkboxValidation: '',
        switcherValidation: '',
        fileValidation: '',
      },
    };
  }

  handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    const inputValues: validationValues = {
      cityName: this.cityInput.current!.value,
      date: this.dateInput.current!.value,
      termSigned: this.checkboxInput.current!.checked,
      select: this.selectInput.current!,
      male: this.switcherInputMale.current!.checked,
      female: this.switcherInputFemale.current!.checked,

      imageURL: this.fileUploadInput.current!.value,

      setError: this.setState.bind(this),
    };

    const validationError = validateForm(inputValues);

    if (validationError) {
      return;
    }

    const file = this.fileUploadInput.current!.files![0];
    const image = URL.createObjectURL(file);
    const gender = this.switcherInputFemale.current!.checked ? 'Mrs.' : 'Mr.';

    const newCard: CardType = {
      title: this.cityInput.current!.value,
      description: 'New Created Post Card',
      thumb: image,
      date: `${gender} ${this.dateInput.current!.value}`,
      contacts: this.selectInput.current!.value as 'telegram' | 'whatsApp' | 'instagram',
      id: 1,
    };

    this.props.addCard(newCard);
    this.form.current!.reset();
    this.handlePopUp();
  }

  handlePopUp() {
    this.setState((prevState) => ({
      ...prevState,
      isPopUpActive: !prevState.isPopUpActive,
    }));
  }

  handleReset() {
    for (const message in this.state.validation) {
      this.setState((prevState) => ({
        ...prevState,
        validation: { ...prevState.validation, [message]: '' },
      }));
    }

    return;
  }

  render() {
    return (
      <>
        <PopUp
          isActive={this.state.isPopUpActive}
          message={'created'}
          togglePopUp={this.handlePopUp.bind(this)}
        />

        <form
          onSubmit={this.handleSubmit.bind(this)}
          onReset={this.handleReset.bind(this)}
          className={st.form}
          ref={this.form}
        >
          <CityInput
            name="City"
            refCity={this.cityInput}
            validationMessage={this.state.validation.cityValidation}
          />

          <DateInput
            name="Date"
            refDate={this.dateInput}
            validationMessage={this.state.validation.dateValidation}
          />

          <SelectInput
            name="Select contacts"
            refSelect={this.selectInput}
            validationMessage={this.state.validation.selectValidation}
          />

          <CheckBoxInput
            name="Terms"
            refCheck={this.checkboxInput}
            validationMessage={this.state.validation.checkboxValidation}
          />

          <Switcher
            name="Female / Male"
            refMale={this.switcherInputMale}
            refFemale={this.switcherInputFemale}
            validationMessage={this.state.validation.switcherValidation}
          />

          <FileInput
            name="Upload image"
            refFileUpload={this.fileUploadInput}
            validationMessage={this.state.validation.fileValidation}
          />

          <div className={st.buttons}>
            <Button type={'submit'} color={'black'} content={'Create'} />
            <Button type={'reset'} color={'black'} content={'Reset'} />
          </div>
        </form>
      </>
    );
  }
}

export default Form;
