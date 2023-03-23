import React from 'react';
import st from './dateInput.module.scss';

type DateInputType = {
  name: string;
  refDate: React.RefObject<HTMLInputElement>;
  validationMessage: string;
};

class DateInput extends React.Component<DateInputType> {
  constructor(props: DateInputType) {
    super(props);
  }

  render() {
    return (
      <div className={st.container}>
        <label className={st['input-label']}>
          {this.props.name}:
          <input
            className={`${st.input} ${this.props.validationMessage && 'invalid'}`}
            name={this.props.name}
            type="date"
            placeholder="Enter visit day"
            ref={this.props.refDate}
          />
          {this.props.validationMessage && (
            <p className={st['validation-message']} data-testid="error-message">
              {this.props.validationMessage}
            </p>
          )}
        </label>
      </div>
    );
  }
}

export default DateInput;
