import React, { Fragment } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import Home from './Components/Home/Home';
import Detail from './Components/Detail/Detail';
import Header from './Components/Header/Header';
import './scss/commons.scss';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='devjobs-web-app' element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path='detail' element={<Detail/>}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

function Layout(){
  return(
    <section id='container'>
      <Header></Header>
      <Outlet></Outlet>
    </section>
  );
}

export default App;
