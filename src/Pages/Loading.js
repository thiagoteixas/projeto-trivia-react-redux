import React from 'react';
import ReactLoading from 'react-loading';
import './loading.css';

const Loading = () => (
  <div className="loading-page">
    <ReactLoading
      type="spin"
      color="white"
      height="50px"
      width="50px"
    />
  </div>
);

export default Loading;

/*
React Loading
https://github.com/fakiolinho/react-loading
*/
