import React from 'react';
import './correctModal.css';
import PropTypes from 'prop-types';
import { giphySelector } from './modules';

const CorrectModal = (props) => {
    console.log(props.display)
    return (
      <div className="modal-container" onClick={props.reset}>
       <img src={giphySelector()} alt="yay!" />
      </div>
    );
}

CorrectModal.propTypes = {
  color: PropTypes.string,
  handleColorChange: PropTypes.func,
  mode: PropTypes.string
};
  

export default CorrectModal;