import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import './globalStyles';

import Map from '../Map/Map';
import Menu from '../Menu/Menu';
import Chart from '../Chart/Chart';
import Aside from '../Aside/Aside';
import CampFilters from '../CampFilters/CampFilters';
import SearchCard from '../Cards/SearchCard/SearchCard';
import PeriodCard from '../Cards/PeriodCard/PeriodCard';
import AboutCard from '../Cards/AboutCard/AboutCard';
import PrisonCard from '../Cards/PrisonCard/PrisonCard';
import Preloader from '../Preloader/Preloader';

const App = () => (
  <Fragment>
    <Preloader />
    <Map />
    <Menu />
    <Chart />
    <Aside />
    <CampFilters />
    <Switch>
      <Route path='/search' component={SearchCard} />
      <Route path='/chronology' component={PeriodCard} />
      <Route path='/about' component={AboutCard} />
      <Route path='/prison:id' component={PrisonCard} />
    </Switch>
  </Fragment>
);

export default App;
