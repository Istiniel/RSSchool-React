import React from 'react';
import st from './checkBox.module.scss';

type CheckBoxInputType = {
  name: string;
  refCheck: React.RefObject<HTMLInputElement>;
  validationMessage: string;
};

class CheckBoxInput extends React.Component<CheckBoxInputType> {
  constructor(props: CheckBoxInputType) {
    super(props);
  }

  render() {
    return (
      <div className={st.container}>
        {this.props.name}:
        <label className={st['input-label']}>
          <input
            className={`${st.input} ${this.props.validationMessage && 'invalid'}`}
            name={this.props.name}
            type="checkbox"
            ref={this.props.refCheck}
          />
          <p className={st.terms}>{'I consent to my personal data'}</p>

          {this.props.validationMessage && (
            <p className={st['validation-message']} data-testid={'error-message'}>
              {this.props.validationMessage}
            </p>
          )}
        </label>
      </div>
    );
  }
}

export default CheckBoxInput;
