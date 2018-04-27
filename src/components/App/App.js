/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import './globalStyles';

import Preloader from '../Preloader/Preloader';
import Map from '../Map';
import Menu from '../Menu/Menu';
import Chart from '../Chart';
import Aside from '../Aside';
import CampFilters from '../CampFilters';
import Search from '../Search';
import Chronology from '../Chronology';
import About from '../About';
import CampCard from '../CampCard';

const App = () => {
  document.title = 'Карта истории ГУЛАГа';

  return (
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
        <Route
          path='/camp:id'
          render={props => <CampCard key={props.match.params.id} {...props} />}
        />
      </Switch>
    </Fragment>
  );
};

export default App;
