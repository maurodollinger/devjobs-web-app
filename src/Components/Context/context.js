/* eslint-disable react/prop-types */
import React from 'react';

const Context = React.createContext({
  handleModal:()=>{}
});

export const ContextProvider = (props) => {
  return (
    <Context.Provider
      value={{
        handleModal:props.handleModal
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export default Context;
