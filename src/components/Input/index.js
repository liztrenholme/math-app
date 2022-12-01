import React, { Component } from 'react';
import './input.css';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { answer, handleChangeInput, disabled } = this.props;
    return (
      <div className="input">
        <input 
        disabled={disabled}
        type="text"
        value={answer} 
          onChange={(e) => handleChangeInput(e)}
          pattern="^[0-9]*$" />
      </div>
    );
  }
}

Input.propTypes = {
  color: PropTypes.string,
  handleColorChange: PropTypes.func,
  mode: PropTypes.string
};
  

export default Input;