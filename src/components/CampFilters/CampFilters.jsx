import React from 'react';
import PropTypes from 'prop-types';

// icon
import arrow from './arrow.svg';

// styled
import Container from './Container';
import Top from './Top';
import Title from './Title';
import BackButton from './BackButton';
import Filter from './Filter';
import FilterTop from './FilterTop';
import FilterTitle from './FilterTitle';
import Switcher from './Switcher';
import Description from './Description';

const CampFilters = (props) => {
  const {
    types, isCampFiltersOpen, closeCampFilters, campTypeFilters, toggleFilter
  } = props;

  return (
    <Container
      mountOnEnter
      isCampFiltersOpen={isCampFiltersOpen}
      in={isCampFiltersOpen}
      timeout={400}
    >
      <Top>
        <Title>Отображение лагерей на карте</Title>
        <BackButton onClick={closeCampFilters}>
          <img src={arrow} alt='close' />
        </BackButton>
      </Top>
      {types.map((type) => {
        const typeId = type.get('id').toString();
        const isActive = campTypeFilters.get(typeId);

        return (
          <Filter
            key={type.get('id')}
            onClick={toggleFilter.bind(null, typeId)}
          >
            <FilterTop>
              <FilterTitle isActive={isActive}>
                {type.get('name')}
              </FilterTitle>
              <Switcher
                typeId={type.get('id')}
                isActive={isActive}
              />
            </FilterTop>
            <Description isActive={isActive}>
              Вид пенитенциарного учреждения. Под различными названиями и формами собственности
              существуют практически во всём мире.
            </Description>
          </Filter>
        );
      })}
    </Container>
  );
};

CampFilters.propTypes = {
  types: PropTypes.object.isRequired,
  isCampFiltersOpen: PropTypes.bool.isRequired,
  closeCampFilters: PropTypes.func.isRequired,
  campTypeFilters: PropTypes.object.isRequired,
  toggleFilter: PropTypes.func.isRequired
};

export default CampFilters;
