import React from 'react';
import st from './button.module.scss';

type ButtonType = {
  type: 'submit' | 'button' | 'reset' | undefined;
  color?: string;
  outlined?: boolean;
  content: string;
  callback?: () => void;
};

const Button: React.FC<ButtonType> = ({ type, color, outlined, content, callback }) => {
  let classes = '';
  color ? (classes += st[color] + ' ') : (classes += st.red + ' ');
  outlined && (classes += st.outlined + ' ');

  return (
    <button type={type} className={classes} name={type || 'submit'} onClick={callback}>
      {content}
    </button>
  );
};

export default Button;
