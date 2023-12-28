import React from 'react';
import myLoading from '../assets/loading.gif'; // Use relative path to the asset
import './LoadingGif.css'

const LoadingGif = () => {
  return (
    <div>
      <img className='gif' src={myLoading} alt="" />
    </div>
  );
};

export default LoadingGif;
