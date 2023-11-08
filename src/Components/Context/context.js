/* eslint-disable react/prop-types */
import React, {useState} from 'react';

const Context = React.createContext({
  handleModal:()=>{},
  filterSearch:()=>{}
});

export const ContextProvider = (props) => {
  const [filterObject, setFilterObject] = useState({value:'',location:'',fulltime:false});

  return (
    <Context.Provider
      value={{
        handleModal:props.handleModal,
        filterSearch:props.filterSearch,
        filterObject,
        setFilterObject
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export default Context;
