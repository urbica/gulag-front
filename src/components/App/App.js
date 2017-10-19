import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Map from '../Map/Map';
import Chart from '../Chart/Chart';

import PrisonCard from '../Cards/PrisonCard/PrisonCard';
import PeriodCard from '../Cards/PeriodCard/PeriodCard';
import SearchCard from '../Cards/SearchCard/SearchCard';
import AboutCard from '../Cards/AboutCard/AboutCard';

const App = () => ([
  <Header key='Header' />,
  <Map key='Map' />,
  <Chart key='Chart' />,
  <Switch key='Switch'>
    <Route path='/prison:id' component={PrisonCard} />
    <Route path='/period:id' component={PeriodCard} />
    <Route path='/search' component={SearchCard} />
    <Route path='/about' component={AboutCard} />
  </Switch>
]);

export default App;
