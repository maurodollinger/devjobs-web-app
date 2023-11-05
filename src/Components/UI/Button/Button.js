import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = (props) =>{
  return(
    <button className={styles.button}>
      {props.children}
    </button>);
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;