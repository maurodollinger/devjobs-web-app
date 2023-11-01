import React, { useState } from 'react';
import Card from '../UI/Card/Card';
import styles from './Filter.module.scss';

const Filter = () => {
  const [inputTextValue, setInputTextValue] = useState('');
  const [labelTextVisible, setLabelTextVisible] = useState(true);
  const [inputLocationValue, setInputLocationValue] = useState('');
  const [labelLocationVisible, setLabelLocationVisible] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

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
                Filter by title, companies, expertise…
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
              <label className={styles.customCheckbox}>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <span className={`${styles.checkmark} checkmark`}></span>
                <span className={styles.textCheckmarkDesktop}>Full Time Only</span>         
                <span className={styles.textCheckmarkMobile}>Full Time</span>            
              </label>
              <button>Search</button>
            </div>
          </div>

        </form>
      </Card>
    </section>);
};

export default Filter;