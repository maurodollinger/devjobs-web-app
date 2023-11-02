import React , {useState} from 'react';
import styles from './Home.module.scss';
import Filter from '../Filter/Filter';
import { ContextProvider } from '../Context/context';
import Modal from '../Modal/Modal';

const Home = () =>{
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () =>{
    setModalOpen((prev)=>!prev);
  };
  return(
    <section className={styles.Home}>
      <ContextProvider 
        handleModal={handleModal}>     
        <Filter></Filter>
        <h1>Esta</h1>
        <h2>es</h2>
        <h3>una</h3>
        <h4>prueba</h4>
        <p>de color</p>
        {(modalOpen) && <Modal onClose={handleModal}></Modal>}
      </ContextProvider>
    </section>
  );
};

export default Home;