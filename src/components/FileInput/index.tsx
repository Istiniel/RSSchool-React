import React from 'react';
import st from './fileInput.module.scss';

type FileInputType = {
  name: string;
  refFileUpload: React.RefObject<HTMLInputElement>;
  validationMessage: string;
};

class FileInput extends React.Component<FileInputType> {
  constructor(props: FileInputType) {
    super(props);
  }

  render() {
    return (
      <div className={st.container}>
        <label className={st['input-label']}>
          {this.props.name}:
          <input
            className={st.input}
            name={this.props.name}
            type="file"
            ref={this.props.refFileUpload}
            accept="image/png, image/jpeg"
            data-testid="input-file"
          />
          {this.props.validationMessage && (
            <p className={st['validation-message']}>{this.props.validationMessage}</p>
          )}
        </label>
      </div>
    );
  }
}

export default FileInput;
