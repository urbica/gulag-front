import createImmutableSelector from 'create-immutable-selector';
import { connect } from 'react-redux';

// selectors
import {
  campTypeFiltersSelector,
  currentYearSelector,
  isDataLoadingSelector,
  isDemoPlaySelector,
  isShowAllPrisonsSelector
} from '../App/reducers/uiReducer';
import { localeSelector } from '../App/reducers/intlReducer';

// actions
import {
  toggleAllPrisons,
  changeCurrentYear,
  toggleDemo
} from '../App/reducers/uiActions';

import Chart from './Chart';

const mapStateToProps = createImmutableSelector(
  campTypeFiltersSelector,
  isDataLoadingSelector,
  currentYearSelector,
  isDemoPlaySelector,
  isShowAllPrisonsSelector,
  localeSelector,
  (
    campTypeFilters,
    isDataLoading,
    currentYear,
    isDemoPlay,
    isShowAllPrisons,
    locale
  ) => {
    /**
     *  chart is visible only when ITL filter is on,
     *  rest filters is off and data is loaded
     */
    // TODO move isChartVisible to ui selectors
    const isChartVisible =
      campTypeFilters.get('1') &&
      !campTypeFilters.get('2') &&
      !campTypeFilters.get('3') &&
      !campTypeFilters.get('4') &&
      !campTypeFilters.get('5') &&
      !campTypeFilters.get('6') &&
      !isDataLoading;

    return {
      currentYear,
      isDemoPlay,
      isShowAll: isShowAllPrisons,
      isDataLoading,
      isChartVisible,
      lang: locale
    };
  }
);

const mapDispatchToProps = { toggleAllPrisons, changeCurrentYear, toggleDemo };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chart);
