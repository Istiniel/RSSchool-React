import React from 'react';
import st from './ModalAnime.module.scss';
import useFetchAnimeById from '../../hooks/useFetchAnimeById';
import Spinner from './../Spinner/index';
import Portal from '../Portal';

type ModalAnimeProps = {
  closeModal: () => void;
  animeId: number;
};

const ModalAnime: React.FC<ModalAnimeProps> = ({ closeModal, animeId }) => {
  const { anime, loading } = useFetchAnimeById(animeId);

  return (
    <Portal>
      <div className={st.container} onClick={closeModal}>
        {loading && <Spinner />}
        {!loading && (
          <div className={st.modal} onClick={(e: React.MouseEvent) => e.stopPropagation()}>
            <button className={st.closeButton} onClick={closeModal}>
              +
            </button>
            <div className={st.thumbContainer}>
              <img src={anime?.images.jpg.large_image_url || ''} alt="thumb" className={st.thumb} />
            </div>
            <div className={st.infoBlock}>
              <h2 className={st.fullTitle}>{anime?.title}</h2>
              <h3 className={st.id}>{anime?.mal_id}</h3>
              <h3 className={st.score}>
                Score: <span>{anime?.score || '-'}</span>
              </h3>
              <h3 className={st.rank}>
                Rank: <span>{anime?.rank || '-'}</span>
              </h3>
              <h3 className={st.type}>
                Type: <span>{anime?.type || '-'}</span>
              </h3>
              <h3 className={st.season}>
                Season: <span>{anime?.season || '-'}</span>
              </h3>
              <h3 className={st.status}>
                Status: <span>{anime?.status || '-'}</span>
              </h3>
              <p className={st.synopsis}>{anime?.synopsis}</p>
            </div>
          </div>
        )}
      </div>
    </Portal>
  );
};

export default ModalAnime;
