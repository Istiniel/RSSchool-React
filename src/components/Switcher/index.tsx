import React from 'react';
import st from './switcher.module.scss';

type SwitcherType = {
  name: string;
  refSwitcher: React.RefObject<HTMLInputElement>;
  onChange: () => void;
};

class Switcher extends React.Component<SwitcherType> {
  constructor(props: SwitcherType) {
    super(props);
  }

  render() {
    return (
      <div className={st.container}>
        <h3 className={st['input-label']}>
          {this.props.refSwitcher?.current?.checked ? 'Male' : 'Female'}
        </h3>
        <label className={st['switch']}>
          <input
            type="checkbox"
            ref={this.props.refSwitcher}
            onChange={this.props.onChange}
            defaultChecked={false}
          />
          <span className={`${st.slider} ${st.round}`}></span>
        </label>
      </div>
    );
  }
}

export default Switcher;
