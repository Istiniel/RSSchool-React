import React from 'react';
import {
  validateCityName,
  validateDate,
  validateFile,
  validateTerms,
  validateSwitcher,
  validateSelect,
} from '../../validations/validations';
import { CardType } from '../Card';
import CheckBoxInput from '../CheckBoxInput';
import CityInput from '../CityInput/index';
import SelectInput from '../SelectInput';
import DateInput from './../DateInput/index';
import Switcher from './../Switcher/index';
import st from './form.module.scss';
import Button from '../Button';
import FileInput from './../FileInput/index';

type CardValidation = {
  cityValidation: string;
  dateValidation: string;
  selectValidation: string;
  checkboxValidation: string;
  switcherValidation: string;
  fileValidation: string;
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
      cityValidation: '',
      dateValidation: '',
      selectValidation: '',
      checkboxValidation: '',
      switcherValidation: '',
      fileValidation: '',
    };
  }

  handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    let validationError;
    validationError =
      validateCityName<typeof this.state>(
        this.cityInput.current!.value,
        this.setState.bind(this)
      ) || validationError;

    validationError =
      validateDate<typeof this.state>(this.dateInput.current!.value, this.setState.bind(this)) ||
      validationError;

    validationError =
      validateTerms<typeof this.state>(
        this.checkboxInput.current!.checked,
        this.setState.bind(this)
      ) || validationError;

    validationError =
      validateSelect<typeof this.state>(this.selectInput.current!, this.setState.bind(this)) ||
      validationError;

    validationError =
      validateFile<typeof this.state>(
        this.fileUploadInput.current!.value,
        this.setState.bind(this)
      ) || validationError;

    validationError =
      validateSwitcher<typeof this.state>(
        this.switcherInputFemale.current!.checked,
        this.switcherInputMale.current!.checked,
        this.setState.bind(this)
      ) || validationError;

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
  }

  handleReset() {
    for (const message in this.state) {
      this.setState((prevState) => ({ ...prevState, [message]: '' }));
    }
    return;
  }

  render() {
    return (
      <>
        <form
          onSubmit={this.handleSubmit.bind(this)}
          onReset={this.handleReset.bind(this)}
          className={st.form}
          ref={this.form}
        >
          <CityInput
            name="City"
            refCity={this.cityInput}
            validationMessage={this.state.cityValidation}
          />

          <DateInput
            name="Date"
            refDate={this.dateInput}
            validationMessage={this.state.dateValidation}
          />

          <SelectInput
            name="Select contacts"
            refSelect={this.selectInput}
            validationMessage={this.state.selectValidation}
          />

          <CheckBoxInput
            name="Terms"
            refCheck={this.checkboxInput}
            validationMessage={this.state.checkboxValidation}
          />

          <Switcher
            name="Female / Male"
            refMale={this.switcherInputMale}
            refFemale={this.switcherInputFemale}
            validationMessage={this.state.switcherValidation}
          />

          <FileInput
            name="Upload image"
            refFileUpload={this.fileUploadInput}
            validationMessage={this.state.fileValidation}
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
