import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Dream from './Pages/Dream';
import React from 'react';
import Propos from './Pages/Propos';
import Details from './Pages/Details';
import { PropsMode } from './Type/Type';
import Aibooks from './Pages/Aibooks';

const Main = (props: PropsMode) => {
  return (
    <Routes>
      <Route path="/" element={<Home modeWhite={props.modeWhite} />} />
      <Route path="/ai-books" element={<Aibooks modeWhite={props.modeWhite}/>} />
      <Route path="/reve" element={<Dream modeWhite={props.modeWhite}/>} />
      <Route path="/propos" element={<Propos modeWhite={props.modeWhite}/>} />
      <Route path="/details/:id/:name" element={<Details modeWhite={props.modeWhite}/>} />
    </Routes>
  );
};
export default Main;
