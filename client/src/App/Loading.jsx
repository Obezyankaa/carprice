import { red } from '@mui/material/colors';
import { ThreeCircles } from 'react-loader-spinner';
// import React from 'react';
// import ReactLoading from 'react-loading';

const Loading = () => (
  <div style={{
    height: '100vh', margin: '0', display: 'grid', placeItems: 'center',
  }}
  >
    <ThreeCircles
      height="100"
      width="100"
      color="#4fa94d"
      wrapperStyle={{}}
      wrapperClass=""
      visible
      ariaLabel="three-circles-rotating"
      outerCircleColor=""
      innerCircleColor=""
      middleCircleColor=""
    />
  </div>
);
export default Loading;
