import React from 'react';
import st from './cityInput.module.scss';

type CityInputType = {
  name: string;
  refCity: React.RefObject<HTMLInputElement>;
  validationMessage: string;
};

class CityInput extends React.Component<CityInputType> {
  constructor(props: CityInputType) {
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
            type="text"
            placeholder="Enter city name"
            ref={this.props.refCity}
            data-testid="input-city"
          />
          {this.props.validationMessage && (
            <p className={st['validation-message']}>{this.props.validationMessage}</p>
          )}
        </label>
      </div>
    );
  }
}

export default CityInput;
