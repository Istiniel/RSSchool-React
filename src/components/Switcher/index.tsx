import React from 'react';
import st from './switcher.module.scss';

type SwitcherType = {
  name: string;
  refFemale: React.RefObject<HTMLInputElement>;
  refMale: React.RefObject<HTMLInputElement>;
  validationMessage: string;
};

class Switcher extends React.Component<SwitcherType> {
  constructor(props: SwitcherType) {
    super(props);
  }

  render() {
    return (
      <div className={st.container}>
        <h3 className={st.header}>{'Choose gender'}</h3>
        <div className={st['radio-container']}>
          <label className={st['input-label']}>
            Female
            <input
              className={st.switcher}
              type="radio"
              ref={this.props.refFemale}
              name={'switcher'}
            />
            {this.props.validationMessage && (
              <p className={st['validation-message']}>{this.props.validationMessage}</p>
            )}
          </label>
          <label className={st['input-label']}>
            Male
            <input
              className={st.switcher}
              type="radio"
              ref={this.props.refMale}
              name={'switcher'}
            />
          </label>
        </div>
      </div>
    );
  }
}

export default Switcher;
