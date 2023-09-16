import React, {useEffect, useState} from 'react';
import './correctModal.css';
import PropTypes from 'prop-types';
import { giphySelector } from './modules';

const CorrectModal = (props) => {
  const [displayImg, setDisplayImg] = useState(true)
    useEffect(() => {
      const timer = setTimeout(() => {
        setDisplayImg(false)
        props.reset()
      }, 5000);
      return () => clearTimeout(timer);
    }, [props]);
    return displayImg ? (
      <div className="modal-container" onClick={props.reset}>
       <img src={giphySelector()} alt="yay!" />
      </div>
    ) : null
}

CorrectModal.propTypes = {
  reset: PropTypes.func 
};
  

export default CorrectModal;