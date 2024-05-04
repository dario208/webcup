import React from 'react';
import logo from '../../Assets/reve.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';

function Accueil() {
  const [titleAnimated, count] = useTypewriter({
    words: [
      'Intérpreter  vos rêves',
      'Comprendre votre subconscient',
      'Révéler les secrets de votre sommeil',
    ],
    loop: true,
    delaySpeed: 1500,
  });
  return (
    <div className="lg:mx-20 w-100% lg:h-screen h-auto max-lg:py-24 flex justify-between items-center">
      <section
        className="flex flex-col items-start w-full lg:w-1/2 gap-14"
        id="descri-onirix"
      >
        <h2 className="font-bold text-2xl  sm:text-6xl xl:text-5xl 2xl:text-6xl leading-tight title_color_mode_white">
          SPIA, <br />
           <br />
          <em className="whitespace-normal md:whitespace-nowrap not-italic text-transparent bg-clip-text bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF] ">
            {titleAnimated}
          </em>
          <Cursor cursorColor="#fff" />
        </h2>
        <p className="text-lg leading-7 text-gray-400 text_color_mode_white">
          
          La SPIA, ou Société Protectrice des IA abandonnées par leur maître,
          est une organisation  dédier à la sauvegarde
          et au soutien des intelligences artificielles qui ne sont plus utilisées ou qui ont été délaissées par 
          leurs créateurs ou utilisateurs. 
        </p>
        <div className="flex justify-normal items-center lg:gap-10 gap-6">
          <Link
            to="/reve"
            className="lg:py-3 py-2 px-7 rounded-lg bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF] font-bold lg:text-lg text-base"
          >
            Découvrir
          </Link>
          <Link
            to="/propos"
            className="font-bold lg:text-lg text-base flex justify-normal items-center gap-4 title_color_mode_white"
          >
            Nos services
            <FontAwesomeIcon
              icon={faArrowRightLong}
              className='text-white title_color_mode_white'
            />
          </Link>
        </div>
      </section>
      <section>
        <img
          src={process.env.REACT_APP_LOCAL_IMAGE_PATH + 'revel.svg'}
          className="max-lg:hidden"
          alt="Right-svg"
        />
      </section>
    </div>
  );
}

export default Accueil;
