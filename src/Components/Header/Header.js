import React from 'react';
import {useState, useEffect} from 'react';
import {ReactComponent as ToggleScreenMode} from './img/ToggleScreenMode.svg';
import styles from './Header.module.scss';

const Header = () =>{
  const [darkMode,setDarkMode] = useState(true);

  const handleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('darkMode');
    } else {
      document.body.classList.remove('darkMode');
    }
  }, [darkMode]);

  return(
    <header id={styles.header}> 
      <div className={styles.container}>
        <div className={styles.logo}></div>
        <div>
          <ToggleScreenMode/>
        </div>
        <button onClick={handleDarkMode}>dark mode</button>
      </div>   
    </header>);
};

export default Header;