import React from 'react';
import PropTypes from 'prop-types';
import styles from './CustomCheckbox.module.scss';

const CustomCheckbox = ({isChecked,onClick}) =>{

  const handleChange = (e) =>{
    e.preventDefault();
    onClick();
  };

  return(
    <label className={styles.customCheckbox} onClick={handleChange}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={()=>{}}
      />
      <span className={`${styles.checkmark} checkmark`}></span>
      <span className={styles.textCheckmarkDesktop}>Full Time Only</span>         
      <span className={styles.textCheckmarkMobile}>Full Time</span>            
    </label>
  );
};

CustomCheckbox.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default CustomCheckbox;