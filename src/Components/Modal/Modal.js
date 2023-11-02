/* eslint-disable react/prop-types */
import React, { Fragment, useContext, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import Context from '../Context/context';
import Card from '../UI/Card/Card';
import styles from './Modal.module.scss';
import CustomCheckbox from '../UI/CustomCheckbox/CustomCheckbox';

const Overlay = (props) =>{
  const [inputValue, setInputValue] = useState('');
  const [labelVisible, setLabelVisible] = useState(true);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    setLabelVisible(newValue === ''); 
  };

  const handleFocus = () => {
    setLabelVisible(false);
  };

  const handleBlur = () => {
    setLabelVisible(inputValue === '');   
  };

  const search = () =>{
    props.closeModal();
  };

  return (
    <div className={`${styles.modal} ${props.className}`}  >
      <div className={styles.backdrop} onClick={props.closeModal}></div>
      <Card  className={styles.modalContent}>
        <div>
          <span></span>
          <input type='text' 
            value={inputValue}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}></input>
          <label style={{ opacity: labelVisible ? .5 : 0 }}>Filter by Location...</label>
        </div>
        <div>
          <CustomCheckbox/>
          <button onClick={search}>Search</button>
        </div>
      </Card>
    </div>);
};

const Modal = () =>{
  const [fadeIn,setFadeIn] = useState(false);
  const {handleModal} = useContext(Context);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <Fragment>
      {ReactDOM.createPortal(<Overlay className={fadeIn ? styles.fadeIn : ''} closeModal={()=>handleModal()}/>,document.getElementById('root-overlay'))}
    </Fragment>);
};

export default Modal;