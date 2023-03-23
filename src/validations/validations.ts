function validateCityName<T>(
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

  if (!/^[A-Z]/.test(cityName)) {
    error = 'City name should start from uppercase';
  }

  setError((prevState) => ({ ...prevState, cityValidation: error }));

  return error ? true : false;
}

function validateDate<T>(date: string, setError: React.Dispatch<React.SetStateAction<T>>): boolean {
  let error = '';

  if (date.length === 0) {
    error = 'Empty input';
  }

  const test = date.match(/[0-9]{4}/);
  if (test !== null && +test![0] < 2020) {
    error = 'not earlier than 2020';
  }

  setError((prevState) => ({ ...prevState, dateValidation: error }));

  return error ? true : false;
}

function validateTerms<T>(
  consent: boolean,
  setError: React.Dispatch<React.SetStateAction<T>>
): boolean {
  let error = '';
  if (!consent) {
    error = 'Please, accept agreement';
  }

  setError((prevState) => ({
    ...prevState,
    checkboxValidation: error,
  }));

  return error ? true : false;
}

function validateFile<T>(
  fileURL: string,
  setError: React.Dispatch<React.SetStateAction<T>>
): boolean {
  let error = '';
  if (fileURL.length === 0) {
    error = 'Please, upload card image';
  }

  setError((prevState) => ({
    ...prevState,
    fileValidation: error,
  }));

  return error ? true : false;
}

export { validateCityName, validateDate, validateTerms, validateFile };
