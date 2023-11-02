import React,{useState}from 'react';
import styles from './CustomCheckbox.module.scss';

const CustomCheckbox = () =>{
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return(
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
  );
};

export default CustomCheckbox;