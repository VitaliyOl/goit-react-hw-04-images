import React from 'react';
import { ButtonMore } from './Button.styled';
import PropTypes from 'prop-types';

export function LoadMore({ children, onClick }) {
  return (
    <ButtonMore type="button" onClick={onClick}>
      {children}
    </ButtonMore>
  );
}

LoadMore.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func.isRequired,
};
