import React from 'react';
import st from './card.module.scss';
import { default as InstIcon } from '../../assets/icon__inst.svg';
import { default as WhatsAppIcon } from '../../assets/icon__whatsapp.svg';
import { default as Telegram } from '../../assets/icon__tg.svg';

export type CardType = {
  title: string;
  description: string;
  thumb: string;
  id: number;
};

const Card: React.FC<CardType> = ({ title, description, thumb }) => {
  return (
    <div className={st.container}>
      <img className={st.card__image} src={thumb} alt={`${title}_thumb`}></img>
      <h2 className={st.card__title}>{title}</h2>
      <p className={st.card__description}>{description}</p>
      <div className={st.card__contacts}>
        <div className={st.card__links}>
          <a href={thumb} target="_blank" rel="noreferrer" className={st.card__link}>
            <img src={InstIcon} alt="inst__icon" />
          </a>
          <a href={thumb} target="_blank" rel="noreferrer" className={st.card__link}>
            <img src={WhatsAppIcon} alt="whatsapp__icon" />
          </a>
          <a href={thumb} target="_blank" rel="noreferrer" className={st.card__link}>
            <img src={Telegram} alt="tg__icon" />
          </a>
        </div>
        <h3 className={st.card__time}>24 /7</h3>
      </div>
    </div>
  );
};

export default Card;
