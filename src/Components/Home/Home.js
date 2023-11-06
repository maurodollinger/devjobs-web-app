import React , {useState, useEffect} from 'react';
import styles from './Home.module.scss';
import Filter from '../Filter/Filter';
import { ContextProvider } from '../Context/context';
import Modal from '../Modal/Modal';
import JobsSection from '../JobsSection/JobsSection';

import jsonData from '../../data/data.json';
import { database } from '../../firebaseConfig';
import {ref,child,get} from 'firebase/database';

const Home = () =>{
  const [data,setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const dbRef = ref(database);
    get(child(dbRef, '/'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setData(data);
        } else {
          setData(jsonData);
        }
      })
      .catch((error) => {
        console.log(error);
        setData(jsonData);
      });
  }, []);

  const handleModal = () =>{
    setModalOpen((prev)=>!prev);
  };

  const handleFilter = (filter)=>{
    filterJobs(filter);
  };

  const filterJobs = (filter) =>{
    const filteredJobs = jsonData.filter(job=>{
      // filter by full time
      if(filter.fullTime && job.contract !== 'Full Time') return false;
      // filter by value // e.g Senior Software Engineer
      if (filter.value && !job.position.toLowerCase().includes(filter.value.toLowerCase()) && !job.company.toLowerCase().includes(filter.value.toLowerCase())) {
        return false;
      }    
      // filter by location
      if(filter.location && !job.location.toLowerCase().includes(filter.location.toLowerCase())) return false;
      return true;
    });
    setData(filteredJobs);
  };

  return(
    <section className={styles.Home}>
      <ContextProvider 
        handleModal={handleModal}>     
        <Filter handleFilter={handleFilter}></Filter>
        <JobsSection data={data}/>
        {(modalOpen) && <Modal onClose={handleModal}></Modal>}
      </ContextProvider>
    </section>
  );
};

export default Home;