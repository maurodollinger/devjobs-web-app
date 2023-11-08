/* eslint-disable react/prop-types */
import React, { Fragment, useContext, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import Context from '../Context/context';
import Card from '../UI/Card/Card';
import styles from './Modal.module.scss';
import CustomCheckbox from '../UI/CustomCheckbox/CustomCheckbox';
import PropTypes from 'prop-types';

const Overlay = (props) =>{
  const [inputValue, setInputValue] = useState('');
  const [labelVisible, setLabelVisible] = useState(true);
  const [isFullTimeChecked, setIsFullTimeChecked] = useState(props.isChecked);

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
    props.onClickSearch({location:inputValue,fulltime:isFullTimeChecked});
    props.closeModal();
  };

  const handleCheckboxChange = () => {
    setIsFullTimeChecked((prevState)=>{    
      return !prevState;
    });
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
          <CustomCheckbox isChecked={isFullTimeChecked} onClick={handleCheckboxChange}/>
          <button onClick={search}>Search</button>
        </div>
      </Card>
    </div>);
};

const Modal = (props) =>{
  const [fadeIn,setFadeIn] = useState(false);
  const {handleModal, filterSearch} = useContext(Context);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <Fragment>
      {ReactDOM.createPortal(<Overlay className={fadeIn ? styles.fadeIn : ''} isChecked={props.isChecked} onClickSearch={filterSearch} closeModal={()=>handleModal()}/>,document.getElementById('root-overlay'))}
    </Fragment>);
};

Modal.propTypes = {
  isChecked: PropTypes.bool.isRequired,
};

export default Modal;