import React from 'react';
import st from './select.module.scss';

type SelectInputType = {
  name: string;
  refSelect: React.RefObject<HTMLSelectElement>;
  validationMessage: string;
};

class SelectInput extends React.Component<SelectInputType> {
  constructor(props: SelectInputType) {
    super(props);
  }

  render() {
    return (
      <div className={st.container}>
        <label className={st['input-label']}>
          {this.props.name}:
          <select
            name="contacts"
            ref={this.props.refSelect}
            className={st.input}
            defaultValue={'default'}
          >
            <option value="default" disabled>
              Select contact format
            </option>
            <option value="telegram">Telegram</option>
            <option value="whatsApp">WhatsApp</option>
            <option value="instagram">Instagram</option>
          </select>
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

export default SelectInput;
