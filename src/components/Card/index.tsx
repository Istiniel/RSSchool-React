import React, { useState } from 'react';
import st from './card.module.scss';
import { Anime } from './../../API/API';
import ModalAnime from './../ModalAnime/index';

const Card: React.FC<Anime> = (anime) => {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);

  return (
    <>
      <div
        className={st.container}
        onClick={() => {
          setIsModalActive(true);
        }}
      >
        <img
          className={st.card__image}
          src={anime.images.jpg.image_url || ''}
          alt={`${anime.title}_thumb`}
        ></img>
        <h2 className={st.card__title}>{anime.title?.split(' ').slice(0, 2).join(' ') + '...'}</h2>
        <p className={st.card__description}>
          {anime.synopsis ? anime.synopsis?.split(' ').slice(0, 15).join(' ') + '...' : ''}
        </p>
        <div className={st.card__contacts}>
          <div className={st.card__links}>
            <h3 className={st.card__airing}>{anime.status}</h3>
          </div>
          <h3 className={st.card__score}>{anime.score || '-'}</h3>
        </div>
      </div>
      {isModalActive && (
        <ModalAnime
          animeId={anime.mal_id}
          closeModal={() => {
            setIsModalActive(false);
          }}
        />
      )}
    </>
  );
};

export default Card;
