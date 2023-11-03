import React , {useState} from 'react';
import styles from './Home.module.scss';
import Filter from '../Filter/Filter';
import { ContextProvider } from '../Context/context';
import Modal from '../Modal/Modal';
import JobsSection from '../JobsSection/JobsSection';

import jsonData from '../../data/data.json';

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
        <JobsSection data={jsonData}/>
        {(modalOpen) && <Modal onClose={handleModal}></Modal>}
      </ContextProvider>
    </section>
  );
};

export default Home;