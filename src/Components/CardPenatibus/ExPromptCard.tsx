import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { PropsMode } from '../../Type/Type';

function ExPromptCard() {
  return (
    // <div className="w-full flex justify-between items-center px-28 py-16">
    <div className="flex max-lg:flex-col justify-between items-center px-11 lg:mx-20 lg:my-36 my-10 py-10 bg-black-rgba backdrop-blur-3xl rounded-3xl gap-10">
      {/* <img src="images/img2.png" className="w-1/2" alt="logo" /> */}
      <div className="bg-[#18182F] rounded-xl px-3 h-48  flex items-center justify-center lg:w-3/4 w-full text-gray-500">
        <div>
          J’ai vu un <span className="text-gray-200">chien danser</span>{' '}
          lentement à la <span className="text-gray-200">plage</span>. <br />{' '}
          Puis <span className="text-gray-200">l’eau</span> s’est rapprochée et
          nous avons <br /> commencé à nous{' '}
          <span className="text-gray-200">noyer</span>.
        </div>
      </div>
      <div className="flex flex-col lg:items-start items-center gap-10 ">
        <div className="flex flex-col lg:items-start items-center gap-2">
          <h4 className="font-bold lg:text-base text-sm lg:text-left text-center leading-tight text-transparent bg-clip-text bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF] uppercase">
            Onirix
          </h4>
          <h2 className="font-bold lg:text-4xl text-3xl lg:text-left text-center leading-tight title_color_mode_white">
            Décrivez-nos vos rêves
          </h2>
        </div>
        <div className="lg:text-left text-center text-base leading-7 text-gray-400 text_color_mode_white">
          Décryptez vos rêves en toute confidentialité avec Onyrix.
          Soumettez-nous la description de votre rêve et nous vous offrons une
          interprétation personnalisée grâce à notre intelligence artificielle
          sophistiquée. Et tout ça en quelques clics !
        </div>
        <Link
          to="/reve"
          className="font-bold lg:text-lg text-base flex justify-normal items-center gap-4 title_color_mode_white"
        >
          Découvrir Onirix
          <FontAwesomeIcon
            icon={faArrowRightLong}
            className='text-white title_color_mode_white'
          />
        </Link>
      </div>
    </div>
    // </div>
  );
}

export default ExPromptCard;
