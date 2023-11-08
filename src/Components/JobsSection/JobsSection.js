import React, { Fragment,useState } from 'react';
import PropTypes from 'prop-types';
import styles from './JobsSection.module.scss';
import Card from '../UI/Card/Card';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import Button from '../UI/Button/Button';

export const JobCard = ({job}) =>{
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Link to={`${fixURLPath(currentPath)}/detail/${job.id}`}>
      <Card  className={styles.jobCard}>
        <div className={styles.jobLogo} style={{backgroundColor:job.logoBackground}}>
          <img src={`${currentPath}${fixAssetPath(job.logo)}`} alt={job.company}></img>
        </div>
        <div className={styles.info}>
          <p className={styles.p}>
            {job.postedAt}
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                <circle cx="2" cy="2" r="2" fill="#6E8098"/>
              </svg>
            </span>
            {job.contract}
          </p>
          
          <h3>{job.position}</h3>
          <p className={styles.p}>{job.company}</p>
        </div>      
        <h4 className={styles.location}>{job.location}</h4>
      </Card>
    </Link>
  );
};

const JobsSection =({data})=>{
  const [visibleData,setVisibleData] = useState(12);

  const handleVisibleData = () =>{
    setVisibleData(prevState=>prevState+12);
  };
  return(
    <Fragment>
      <section id={styles.jobs}>
        <div className={styles.container}>
          {data.slice(0,visibleData).map((job,index)=><JobCard job={job} key={index}/>)}        
        </div>      
           
      </section>
      
      <div className={styles.loadMore}>
        {visibleData < data.length && (
          <Button onClick={handleVisibleData}>Load More</Button>
        )}
      </div> 
      
      
    </Fragment>);
};

JobsSection.propTypes = {
  data: PropTypes.array.isRequired,
};

JobCard.propTypes = {
  job: PropTypes.object.isRequired,
};

export default JobsSection;

function fixAssetPath(inputString){
  if (inputString && inputString.charAt(0) === '.') {
    return inputString.substring(1); 
  } else {
    return inputString; 
  }
}

function fixURLPath(inputString){

  if (inputString && inputString.charAt(inputString.length-1) === '/') {
    return inputString.slice(0,inputString.length-1); 
  } else {
    return inputString; 
  }
}