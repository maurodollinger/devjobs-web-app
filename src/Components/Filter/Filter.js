import React, { useContext, useState, useEffect} from 'react';
import Card from '../UI/Card/Card';
import styles from './Filter.module.scss';
import Context from '../Context/context';
import CustomCheckbox from '../UI/CustomCheckbox/CustomCheckbox';
import Button from '../UI/Button/Button';
import PropTypes from 'prop-types';

const Filter = ({_isChecked}) => {
  const [inputTextValue, setInputTextValue] = useState('');
  const [labelTextVisible, setLabelTextVisible] = useState(true);
  const [inputLocationValue, setInputLocationValue] = useState('');
  const [labelLocationVisible, setLabelLocationVisible] = useState(true);

  const [isFullTimeChecked, setIsFullTimeChecked] = useState(_isChecked);

  const {handleModal, filterSearch} = useContext(Context); 

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    if(e.target.id === 'inputText'){
      setInputTextValue(newValue);
      setLabelTextVisible(newValue === '');
    }
    else if(e.target.id === 'inputLocation'){
      setInputLocationValue(newValue);
      setLabelLocationVisible(newValue === '');
    }    
  };

  const handleFocus = (e) => {
    if(e.target.id === 'inputText'){
      setLabelTextVisible(false);
    }
    else if(e.target.id === 'inputLocation'){
      setLabelLocationVisible(false);
    }
  };

  const handleBlur = (e) => {
    if(e.target.id === 'inputText'){
      setLabelTextVisible(inputTextValue === '');
    }
    else if(e.target.id === 'inputLocation'){
      setLabelLocationVisible(inputLocationValue === '');
    }
   
  };

  const handleCheckboxChange = () => {
    setIsFullTimeChecked((prevState)=>{    
      return !prevState;
    });
  };

  const handleSearch = () =>{
    sendFilter();
  };

  const sendFilter = ()=>{
    filterSearch({value:inputTextValue,location:inputLocationValue,fulltime:isFullTimeChecked});
  };

  useEffect(()=>{
    let timer; 
    const delayedFilter = () =>{
      timer = setTimeout(()=>{
        sendFilter();
      },500);
    };
    clearTimeout(timer);
    delayedFilter();
    return ()=>{
      clearTimeout(timer);
    };
  },[inputTextValue,inputLocationValue,isFullTimeChecked]);

  useEffect(()=>{
    setIsFullTimeChecked(_isChecked);
  },[_isChecked]);

  return (
    <section id={styles.filter}>
      <Card>
        <form>
          <div className={styles.leftInput}>
            <span className={styles.searchIcon}></span>
            <input
              id="inputText"
              type='text'
              value={inputTextValue}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}></input>
            <label htmlFor="inputText"
              style={{ opacity: labelTextVisible ? .5 : 0 }}>
              <span className={styles.labelTextMobile}>
                Filter by title...
              </span>
              <span className={styles.labelTextDesktop}>
                Filter by title, companies, expertise…
              </span>
            </label>
          </div>
          <div className={styles.rightInputs}>
            <div>
              <span className={styles.geoIcon}></span>
              <input 
                id="inputLocation"
                type='text'
                value={inputLocationValue}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}></input>
              <label htmlFor="inputLocation"
                style={{ opacity: labelLocationVisible ? .5 : 0 }}>
                Filter by location
              </label>
            </div>
            <div>
              <CustomCheckbox isChecked={isFullTimeChecked} onClick={handleCheckboxChange}/>
              <Button onClick={handleSearch}>Search</Button>
            </div>
          </div>
          <div className={styles.filterSearchMobile}>
            <span onClick={()=>handleModal()} className={`${styles.filterIcon} filterIconMobile`}>
              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z" fill="#6E8098" fillRule="nonzero"/></svg>
            </span>
            <Button  onClick={handleSearch}>
              <span className={styles.filterSearchIcon}></span>
            </Button>
          </div>
        </form>
      </Card>
    </section>);
};

Filter.propTypes = {
  _isChecked: PropTypes.bool.isRequired
};

export default Filter;