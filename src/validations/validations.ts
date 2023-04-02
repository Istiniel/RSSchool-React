import { CardValidation } from '../components/Form';

function validateCityName<T extends CardValidation>(
  cityName: string,
  setError: React.Dispatch<React.SetStateAction<T>>
): boolean {
  let error = '';

  if (cityName.length < 3) {
    error = 'At least 3 chars';
  }

  if (cityName.match(/[0-9]/) !== null) {
    error = 'wrong City name';
  }

  if (!/^[A-ZА-Я]/.test(cityName)) {
    error = 'City name should start from uppercase';
  }

  setError((prevState) => ({
    ...prevState,
    validation: { ...prevState.validation, cityValidation: error },
  }));

  return error ? true : false;
}

function validateTerms<T extends CardValidation>(
  consent: boolean,
  setError: React.Dispatch<React.SetStateAction<T>>
): boolean {
  let error = '';
  if (!consent) {
    error = 'Please, accept agreement';
  }

  setError((prevState) => ({
    ...prevState,
    validation: { ...prevState.validation, checkboxValidation: error },
  }));

  return error ? true : false;
}

function validateSelect<T extends CardValidation>(
  select: HTMLSelectElement,
  setError: React.Dispatch<React.SetStateAction<T>>
): boolean {
  let error = '';

  const options = Array.from(select.options);

  if (options[0].selected) {
    error = 'Choose contact format';
  }

  setError((prevState) => ({
    ...prevState,
    validation: { ...prevState.validation, selectValidation: error },
  }));

  return error ? true : false;
}

function validateSwitcher<T extends CardValidation>(
  male: boolean,
  female: boolean,
  setError: React.Dispatch<React.SetStateAction<T>>
): boolean {
  let error = '';

  if (!male && !female) {
    error = 'Please, make a choise';
  }

  setError((prevState) => ({
    ...prevState,
    validation: { ...prevState.validation, switcherValidation: error },
  }));

  return error ? true : false;
}

function validateFile<T extends CardValidation>(
  fileURL: string,
  setError: React.Dispatch<React.SetStateAction<T>>
): boolean {
  let error = '';
  if (fileURL.length === 0) {
    error = 'Please, upload card image';
  }

  setError((prevState) => ({
    ...prevState,
    validation: { ...prevState.validation, fileValidation: error },
  }));

  return error ? true : false;
}

function validateDate<T extends CardValidation>(
  date: string,
  setError: React.Dispatch<React.SetStateAction<T>>
): boolean {
  let error = '';

  if (date.length === 0) {
    error = 'Empty input';
  }

  const test = date.match(/[0-9]{4}/);
  if (test !== null && +test![0] < 2020) {
    error = 'not earlier than 2020';
  }

  setError((prevState) => ({
    ...prevState,
    validation: { ...prevState.validation, dateValidation: error },
  }));

  return error ? true : false;
}

export type validationValues = {
  cityName: string;
  date: string;
  termSigned: boolean;
  select: HTMLSelectElement;
  male: boolean;
  female: boolean;
  imageURL: string;
  setError: React.Dispatch<React.SetStateAction<CardValidation>>;
};

function validateForm(inputsValues: validationValues): boolean {
  const { cityName, date, termSigned, select, female, male, imageURL, setError } = inputsValues;

  let validationError = false;

  validationError = validateCityName(cityName, setError) || validationError;
  validationError = validateDate(date, setError) || validationError;
  validationError = validateTerms(termSigned, setError) || validationError;
  validationError = validateSelect(select, setError) || validationError;
  validationError = validateFile(imageURL, setError) || validationError;
  validationError = validateSwitcher(female, male, setError) || validationError;

  return validationError;
}

export { validateForm };
