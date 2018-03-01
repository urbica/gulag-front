import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import './globalStyles';

import Preloader from '../Preloader/Preloader';
import Map from '../Map/Map';
import Menu from '../Menu/Menu';
import Chart from '../Chart/Chart';
import Aside from '../Aside';
import CampFilters from '../CampFilters';
import Search from '../Search';
import Chronology from '../Chronology';
import About from '../About';
import PrisonCard from '../Cards/PrisonCard/PrisonCard';

const App = () => (
  <Fragment>
    <Preloader />
    <Map />
    <Menu />
    <Chart />
    <Aside />
    <CampFilters />
    <Switch>
      <Route path='/search' component={Search} />
      <Route path='/chronology' component={Chronology} />
      <Route path='/about' component={About} />
      <Route path='/prison:id' component={PrisonCard} />
    </Switch>
  </Fragment>
);

export default App;
