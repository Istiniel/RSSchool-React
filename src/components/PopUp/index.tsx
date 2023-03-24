import React, { Component } from 'react';
import st from './popUp.module.scss';

export type PopUpType = {
  isActive: boolean;
  message: string;
  togglePopUp: () => void;
};

export default class PopUp extends Component<PopUpType> {
  constructor(props: PopUpType) {
    super(props);
  }

  render() {
    return (
      <>
        {this.props.isActive && (
          <div className={st['pop-up']} onAnimationEnd={this.props.togglePopUp}>
            {this.props.message}
          </div>
        )}
      </>
    );
  }
}
