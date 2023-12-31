/* eslint-disable react/prop-types */
import React from 'react';
//import styles from './Card.module.scss';
import './Card.scss';

const Card = (props) =>{
  return <div className={`card ${(props.className) ? props.className : ''}`} >
    {props.children}
  </div>;
};

export default Card;