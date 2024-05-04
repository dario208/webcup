import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function CardPenatibus() {
  return (
    <div className="w-full flex justify-between items-center lg:px-28 lg:py-16">
      <div className="flex max-2xl:flex-col justify-between items-center lg:p-20 p-10 gap-20 bg-black-rgba backdrop-blur-3xl rounded-3xl w-full">
        <div className="flex flex-col 2xl:items-start items-center gap-10">
          <div className="flex flex-col 2xl:items-start items-center gap-2">
            <h4 className="font-bold lg:text-base text-sm 2xl:text-left text-center leading-tight text-transparent bg-clip-text bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF] uppercase">
              IIR
            </h4>
            <h2 className="font-bold lg:text-4xl text-3xl 2xl:text-left text-center leading-tight">
              INSTITUT INTERNATIONAL DES RÊVES
            </h2>
          </div>
          <p className="2xl:text-left text-center leading-7 text-gray-400">
            L&apos;Institut International des Rêves (IRR) est une organisation à
            but non lucratif qui a pour mission de promouvoir la recherche sur
            les rêves et de fournir des informations sur le rêve et la santé
            mentale. L’IRR est une organisation internationale qui a été fondée
            en 2019 par un groupe de chercheurs et de professionnels de la santé
            mentale.
          </p>
          <a
            href="#iir_services"
            className="font-bold lg:text-lg text-base flex justify-normal items-center gap-4"
          >
            Voir plus
            <FontAwesomeIcon
              icon={faArrowRightLong}
              style={{ color: '#ffffff' }}
            />
          </a>
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

export default CardPenatibus;
