import React from 'react';
import { CardType } from '../../components/Card';
import Form from '../../components/Form';
import st from './registration.module.scss';
import Cards from './../../components/Cards/index';

export default class Registration extends React.Component<
  Record<string, never>,
  { cards: CardType[] }
> {
  constructor() {
    super({});

    this.state = { cards: [] };
  }

  addCard(newCard: CardType) {
    this.setState((prevState) => ({ ...prevState, cards: [...prevState.cards, newCard] }));
  }

  render() {
    return (
      <div className={st['registration-section']}>
        <div className={'wrapper'}>
          <div className={st.container}>
            <Form addCard={(card: CardType) => this.addCard(card)}></Form>
          </div>
          <Cards cards={this.state.cards} />
        </div>
      </div>
    );
  }
}
