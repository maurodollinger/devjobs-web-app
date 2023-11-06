import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import styles from './Detail.module.scss';
import Card from '../UI/Card/Card';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router';
import jsonData from '../../data/data.json';
import Button from '../UI/Button/Button';

const Detail = () => {
  const location = useLocation();
  const currentPath = location.pathname.split('/')[1];
  const { id } = useParams();
  const job = jsonData.find((j) => j.id === parseInt(id));
  
  return (
    <section id={styles.detail}>
      <div className={styles.container}>
        {job && (
          <Fragment>
            <Card className={styles.detailHeader}>
              <div className={styles.dh_image} style={{backgroundColor:job.logoBackground}}>
                <img src={`/${currentPath}${fixAssetPath(job.logo)}`} alt={job.company}></img>
              </div>
              <div className={styles.dh_info}>
                <div>
                  <h3>{job.company}</h3>
                  <p>{job.website}</p>
                </div>
                <div className='headerButton'>
                  <a target='_blank' href={job.website} rel="noreferrer">
                    <Button>Company Site</Button>
                  </a>                  
                </div>
              </div>
            </Card>
            <Card className={styles.detailCard}>
              <div>
                <div>
                  <p className={styles.p}>
                    {job.postedAt}
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                        <circle cx="2" cy="2" r="2" fill="#6E8098"/>
                      </svg>
                    </span>
                    {job.contract}
                  </p>
                  <h1>{job.position}</h1>
                  <h4>{job.location}</h4>
                </div>
                <div>
                  <a href={job.apply} target='_blank' rel="noreferrer">
                    <Button>Apply Now</Button>
                  </a>
                </div>
              </div>
              <p>{job.description}</p>
              <h3>Requirements</h3>
              <p>{job.requirements.content}</p>
              <ul className={styles.requirementsList}>
                {job.requirements.items.map((i,index)=>(
                  <li key={index}>{i}</li>
                ))}
              </ul>
              <h3>What You Wil Do</h3>
              <p>{job.role.content}</p>
              <ul className={styles.roleList}>
                {job.role.items.map((i,index)=>(
                  <li key={index}>{i}</li>
                ))}
              </ul>
            </Card>
            {ReactDOM.createPortal(<footer>
              <div className={styles.container}>
                <div>
                  <h3>{job.position}</h3>
                  <p>{job.company}</p>
                </div>
                <a href={job.apply} target='_blank' rel="noreferrer">
                  <Button>
                      Apply Now
                  </Button>
                </a>
              </div>
            </footer>,document.getElementById('root-footer'))}
            
          </Fragment>
        )}
      </div>
    </section>
  );
};

export default Detail;

function fixAssetPath(inputString){
  if (inputString && inputString.charAt(0) === '.') {
    return inputString.substring(1); 
  } else {
    return inputString; 
  }
}
  