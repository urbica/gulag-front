import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import About from './About';

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  pushToRoot: () => dispatch(push('/'))
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
