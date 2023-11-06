import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = (props) =>{

  const handleClick = (e) =>{
    e.preventDefault();
    props.onClick();
  };

  return(
    <button className={styles.button} onClick={handleClick}>
      {props.children}
    </button>);
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
};

export default Button;