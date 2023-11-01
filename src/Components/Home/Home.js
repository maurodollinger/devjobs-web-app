import React from 'react';
import styles from './Home.module.scss';
import Filter from '../Filter/Filter';

const Home = () =>{
  return(
    <section className={styles.Home}>
      <Filter></Filter>
      <h1>Esta</h1>
      <h2>es</h2>
      <h3>una</h3>
      <h4>prueba</h4>
      <p>de color</p>
    </section>
  );
};

export default Home;