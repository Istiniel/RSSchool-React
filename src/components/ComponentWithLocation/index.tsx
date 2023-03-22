import React from 'react';
import { useLocation } from 'react-router-dom';

export interface WithRouterProps {
  location: string;
}

const ComponentWithLocation = <Props extends WithRouterProps>(
  Component: React.ComponentType<Props>
) => {
  const { pathname } = useLocation();
  const location = pathname == '/' ? 'Home Page' : pathname.slice(1);

  return (props: Omit<Props, keyof WithRouterProps>) => {
    return <Component {...(props as Props)} location={location} />;
  };
};

export default ComponentWithLocation;
