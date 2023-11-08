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
  const [allData,setAllData] = useState([]);
  const [filter,setFilter] = useState({fulltime:false});
  const [modalOpen, setModalOpen] = useState(false);
  
  useEffect(() => {
    const dbRef = ref(database);
    get(child(dbRef, '/'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setData(data);
          setAllData(data);
        } else {
          setData(jsonData);
          setAllData(jsonData);
        }
      })
      .catch((error) => {
        console.log(error);
        setData(jsonData);
        setAllData(jsonData);
      });
  }, []);

  const handleModal = () =>{
    setModalOpen((prev)=>!prev);
  };

  const filterJobs = (filter) =>{
    const isFullTime = filter.fulltime !== undefined ? filter.fulltime : false;

    const filteredJobs = data.filter(job=>{
      // filter by full time
      if(filter.fulltime && job.contract !== 'Full Time') return false;
      // filter by value // e.g Senior Software Engineer
      if (filter.value && !job.position.toLowerCase().includes(filter.value.toLowerCase()) && !job.company.toLowerCase().includes(filter.value.toLowerCase())) {
        return false;
      }    
      // filter by location
      if(filter.location && !job.location.toLowerCase().includes(filter.location.toLowerCase())) return false;
      return true;
    });
    if (filter.value || filter.location ||isFullTime) {
      setData(filteredJobs);
    } else {
      setData(allData);
    }
  };

  const filterSearch = (_filter) =>{
    setFilter(_filter);    
  };

  useEffect(()=>{
    filterJobs(filter);
  },[filter]);

  return(
    <section className={styles.Home}>
      <ContextProvider 
        handleModal={handleModal}
        filterSearch={filterSearch}
      >     
        <Filter _isChecked={filter.fulltime}></Filter>
        <JobsSection data={data}/>
        {(modalOpen) && <Modal isChecked={filter.fulltime} onClose={handleModal}></Modal>}
      </ContextProvider>
    </section>
  );
};

export default Home;