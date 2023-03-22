import React from 'react';

import st from './location.module.scss';

export type LocationType = {
  location: string;
};

const Location: React.FC<LocationType> = ({ location }) => {
  return <h2 className={st.location}>{location}</h2>;
};

export default Location;
