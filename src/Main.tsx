import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Topics from './Pages/Topics';
import Dream from './Pages/Dream';
import React from 'react';
import Propos from './Pages/Propos';
import Details from './Pages/Details';
import { PropsMode } from './Type/Type';

const Main = (props: PropsMode) => {
  return (
    <Routes>
      <Route path="/" element={<Home modeWhite={props.modeWhite} />} />
      <Route path="/topics" element={<Topics modeWhite={props.modeWhite}/>} />
      <Route path="/reve" element={<Dream modeWhite={props.modeWhite}/>} />
      <Route path="/propos" element={<Propos modeWhite={props.modeWhite}/>} />
      <Route path="/details/:id/:name" element={<Details modeWhite={props.modeWhite}/>} />
    </Routes>
  );
};
export default Main;
