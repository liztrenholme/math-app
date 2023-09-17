import React, {useEffect, useState} from 'react';
import './tryAgainModal.css';
import PropTypes from 'prop-types';
// import { giphySelector } from './modules';

const TryAgainModal = (props) => {
  const [displayImg, setDisplayImg] = useState(true)
  console.log('displaying?', displayImg)
    useEffect(() => {
      const timer = setTimeout(() => {
        setDisplayImg(false)
        props.reset()
      }, 5000);
      return () => clearTimeout(timer);
    }, [props]);
    return displayImg ? (
      <div className="modal-container" onClick={props.reset}>
       <img src="https://media.giphy.com/media/YiKiqMTzrQZwmF4I5N/giphy.gif" alt="Try again!" />
      </div>
    ) : null
}

TryAgainModal.propTypes = {
  reset: PropTypes.func 
};
  

export default TryAgainModal;