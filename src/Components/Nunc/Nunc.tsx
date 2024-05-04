import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { PropsMode } from '../../Type/Type';

function Nunc() {
  return (
    <div className="w-full flex justify-between items-center lg:px-28 lg:py-16">
      <div className="flex max-2xl:flex-col justify-between items-center lg:p-20 p-10 gap-20 bg-black-rgba backdrop-blur-3xl rounded-3xl w-full">
        <div className="flex flex-col 2xl:items-start items-center gap-10">
          <div className="flex flex-col 2xl:items-start items-center gap-2">
            <h4 className="font-bold lg:text-base text-sm 2xl:text-left text-center leading-tight text-transparent bg-clip-text bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF] uppercase">
              Institut International des Rêves
            </h4>
            <h2 className="font-bold lg:text-4xl text-3xl 2xl:text-left text-center leading-tight title_color_mode_white">Onyrix </h2>
          </div>
          <div className="flex flex-col items-start gap-3.5">
            <p className="2xl:text-left text-center text-base leading-7 text-gray-400 text_color_mode_white">
              Une intelligence artificielle sophistiquée qui a été développée
              par l&apos;Institut International des Rêves pour interpréter les
              rêves de manière experte et approfondie. Cette IA utilise des
              algorithmes de pointe pour analyser les symboles, les émotions et
              les expériences vécues dans les rêves afin de fournir des
              interprétations claires et précises.
            </p>
            <p className="2xl:text-left text-center text-base leading-7 text-gray-400 text_color_mode_white">
              {' '}
              Elle peut aider les utilisateurs à mieux comprendre leur
              subconscient et à explorer des aspects cachés de leur
              personnalité. Avec Onyrix, vous pouvez découvrir des
              significations cachées dans vos rêves et ainsi mieux comprendre
              votre vie et vos relations.
            </p>
          </div>
          <Link
            to="/reve "
            className="font-bold lg:text-lg text-base flex justify-normal items-center gap-4 title_color_mode_white"
          >
            Interpréter votre rêve
            <FontAwesomeIcon
              icon={faArrowRightLong}
              className='text-white title_color_mode_white'
            />
          </Link>
        </div>
        <img
          src={process.env.REACT_APP_LOCAL_IMAGE_PATH + 'img2.svg'}
          className="xl:w-1/2  2xl:w-[648px] max-xl:hidden"
          alt="Right-svg"
        />
      </div>
    </div>
  );
}

export default Nunc;
