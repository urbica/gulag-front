import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { select } from 'd3-selection';

import { height, chartData, yScale } from '../config';

import { changeCurrentYear } from '../../App/reducers/uiReducer';

// styled
import Container from './Container';

class PrisonersArea extends PureComponent {
  componentDidMount() {
    const prisonersArea = select(this.g);
    const deadG = prisonersArea
      .append('g');

    const noDataG = prisonersArea
      .append('g');

    const prisonersG = prisonersArea
      .append('g');

    const barWidth = Math.round(this.props.width / 42) - 2;

    // dead group
    this.deadRect = deadG
      .selectAll('rect')
      .data(chartData)
      .enter()
      .append('rect')
      .attr('y', d => yScale(d.dead))
      .attr('height', d => height - yScale(d.dead))
      .attr('x', (d) => {
        const date = new Date(d.year, 0, 1);
        return this.props.xScale(date) + 1;
      })
      .attr('width', barWidth);

    this.deadLine = deadG
      .selectAll('line')
      .data(chartData)
      .enter()
      .append('line')
      .attr('fill', 'none')
      .attr('y1', d => yScale(d.dead))
      .attr('y2', d => yScale(d.dead))
      .attr('x1', (d) => {
        const date = new Date(d.year, 0, 1);
        return this.props.xScale(date) + 1;
      })
      .attr('x2', (d) => {
        const date = new Date(d.year, 0, 1);

        if (d.dead === 0) {
          return this.props.xScale(date) + 1;
        }
        return this.props.xScale(date) + barWidth + 1;
      });

    // no data group
    this.noDataRect = noDataG
      .selectAll('rect')
      .data(chartData)
      .enter()
      .append('rect')
      .attr('y', yScale(250000))
      .attr('height', height - yScale(250000))
      .attr('fill', 'url(#Gradient)')
      .on('click', d => this.props.dispatch(changeCurrentYear(d.year)))
      .attr('x', (d) => {
        const date = new Date(d.year, 0, 1);
        return this.props.xScale(date) + 1;
      })
      .attr('width', (d) => {
        if (d.prisoners === 0) {
          return barWidth;
        }
        return 0;
      });

    // prisoners group
    this.prisonersRect = prisonersG
      .selectAll('rect')
      .data(chartData)
      .enter()
      .append('rect')
      .attr('y', d => yScale(d.prisoners))
      .attr('height', d => height - yScale(d.prisoners))
      .on('click', d => this.props.dispatch(changeCurrentYear(d.year)))
      .attr('x', (d) => {
        const date = new Date(d.year, 0, 1);
        return this.props.xScale(date) + 1;
      })
      .attr('width', barWidth);

    this.prisonersLine = prisonersG
      .selectAll('line')
      .data(chartData)
      .enter()
      .append('line')
      .attr('fill', 'none')
      .attr('y1', d => yScale(d.prisoners))
      .attr('y2', d => yScale(d.prisoners))
      .attr('x1', (d) => {
        const date = new Date(d.year, 0, 1);
        return this.props.xScale(date) + 1;
      })
      .attr('x2', (d) => {
        const date = new Date(d.year, 0, 1);

        if (d.prisoners === 0) {
          return this.props.xScale(date) + 1;
        }
        return this.props.xScale(date) + barWidth + 1;
      });
  }

  componentWillReceiveProps({ xScale, width }) {
    const barWidth = Math.round(width / 42) - 2;

    this.deadRect
      .attr('x', (d) => {
        const date = new Date(d.year, 0, 1);
        return xScale(date) + 1;
      })
      .attr('width', barWidth);

    this.deadLine
      .attr('x1', (d) => {
        const date = new Date(d.year, 0, 1);
        return xScale(date) + 1;
      })
      .attr('x2', (d) => {
        const date = new Date(d.year, 0, 1);

        if (d.dead === 0) {
          return xScale(date) + 1;
        }
        return xScale(date) + barWidth + 1;
      });

    this.noDataRect
      .attr('x', (d) => {
        const date = new Date(d.year, 0, 1);
        return xScale(date) + 1;
      })
      .attr('width', (d) => {
        if (d.prisoners === 0) {
          return barWidth;
        }
        return 0;
      });

    this.prisonersRect
      .attr('x', (d) => {
        const date = new Date(d.year, 0, 1);
        return xScale(date) + 1;
      })
      .attr('width', barWidth);

    this.prisonersLine
      .attr('x1', (d) => {
        const date = new Date(d.year, 0, 1);
        return xScale(date) + 1;
      })
      .attr('x2', (d) => {
        const date = new Date(d.year, 0, 1);

        if (d.prisoners === 0) {
          return xScale(date) + 1;
        }
        return xScale(date) + barWidth + 1;
      });
  }

  render() {
    return (
      <Container
        innerRef={(ref) => {
          this.g = ref;
        }}
        showAllYears={this.props.isShowAllPrisons}
      />
    );
  }
}

PrisonersArea.propTypes = {
  width: PropTypes.number.isRequired,
  xScale: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  isShowAllPrisons: PropTypes.bool.isRequired
};

export default connect(
  state => ({ isShowAllPrisons: state.getIn(['ui', 'isShowAllPrisons']) })
)(PrisonersArea);
