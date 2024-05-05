import React from 'react';
import { PropsMode } from '../../Type/Type';

function Partenaire(props: PropsMode) {
  const images = props.modeWhite === '' ? {
    microsoft: 'microsoft.svg',
    google: 'google.svg',
    amazon: 'amazon.svg',
    linkedin: 'linkedin.svg',
    apple: 'apple.svg'
  } : {
    microsoft: 'microsoft_gray.svg',
    google: 'google_gray.svg',
    amazon: 'amazon_gray.svg',
    linkedin: 'linkedin_gray.svg',
    apple: 'apple_gray.svg'
  };
  return (
    <div className="w-full flex justify-center flex-wrap gap-12 items-center my-16">
      <img
        src={process.env.REACT_APP_LOCAL_IMAGE_PATH + images.microsoft}
        className="lg:w-auto w-20"
        alt="Right-svg"
      />
      <img
        src={process.env.REACT_APP_LOCAL_IMAGE_PATH + images.google}
        className="lg:w-auto w-20"
        alt="Right-svg"
      />
      <img
        src={process.env.REACT_APP_LOCAL_IMAGE_PATH + images.amazon}
        className="lg:w-auto w-20"
        alt="Right-svg"
      />
      <img
        src={process.env.REACT_APP_LOCAL_IMAGE_PATH + images.linkedin}
        className="lg:w-auto w-20"
        alt="Right-svg"
      />
      <img
        src={process.env.REACT_APP_LOCAL_IMAGE_PATH + images.apple}
        className="lg:w-auto w-20"
        alt="Right-svg"
      />
    </div>
  );
}

export default Partenaire;
