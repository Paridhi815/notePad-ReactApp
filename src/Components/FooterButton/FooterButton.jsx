import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { goBack } from '../../Redux/Actions';
import './FooterButton.css';

const FooterButton = props => (
  <div >
    <button className="footer-button" onClick={() => props.goBack()}>{props.buttonText} </button>
  </div>
);
const mapDispatchToProps = dispatch => ({
  goBack: () => dispatch(goBack()),
});
FooterButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  goBack: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(FooterButton);
