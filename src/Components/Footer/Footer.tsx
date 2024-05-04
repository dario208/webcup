import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { PropsMode } from '../../Type/Type'

function Footer(props: PropsMode) {
  const logo = props.modeWhite === '' ? 'logo.svg' : 'logo_gray.svg';
  return (
    <div className='w-full flex justify-between items-center lg:px-28 py-16'>
      <div className='flex xl:flex-row flex-col xl:justify-between gap-20 items-center w-full'>
        <div className='max-lg:w-full flex flex-col xl:items-start items-center gap-10 w-96'>
          <div className='flex justify-normal items-center gap-3.5'>
            <img
            src={process.env.REACT_APP_LOCAL_IMAGE_PATH + logo}
            className=""
            alt="Right-svg"
            />
            <h2 className='text-xl font-bold title_color_mode_white'>Onirix</h2>
          </div>
          <p className='text-base  xl:text-left text-center leading-7 text-gray-400 text_color_mode_white'>Nous aidons à décrypter votre subconscient pour mieux comprendre votre vie éveillée..</p>
          <div className='w-full flex xl:justify-normal justify-center lg:items-start items-center gap-3.5'>
            <img
            src={process.env.REACT_APP_LOCAL_IMAGE_PATH + 'icon11.svg'}
            className="backdrop-blur-3xl rounded-lg"
            alt="Right-svg"
            />
            <img
            src={process.env.REACT_APP_LOCAL_IMAGE_PATH + 'icon12.svg'}
            className="backdrop-blur-3xl rounded-lg"
            alt="Right-svg"
            />
            <img
            src={process.env.REACT_APP_LOCAL_IMAGE_PATH + 'icon13.svg'}
            className="backdrop-blur-3xl rounded-lg"
            alt="Right-svg"
            />
            <img
            src={process.env.REACT_APP_LOCAL_IMAGE_PATH + 'icon14.svg'}
            className="backdrop-blur-3xl rounded-lg"
            alt="Right-svg"
            />
          </div>
        </div>
        <div className='xl:w-1/2 w-full flex max-lg:flex-col xl:justify-end lg:justify-between justify-center lg:items-start items-center gap-20'>
          <div className='flex flex-col lg:items-start items-center gap-10 w-auto'>
            <h4 className='font-bold text-xl lg:text-left text-center leading-tight title_color_mode_white'>IRR</h4>
            <ul className='flex flex-col lg:items-start items-center gap-1.5 text_color_mode_white'>
              <li>
                <a className="text-base">VF 100 Ankorahotra</a>
              </li>
              <li>
                <a className="text-base">Antananarivo</a>
              </li>
              <li>
                <a className="text-base">Madagascar</a>
              </li>
              <li>
                <a className="text-base">101</a>
              </li>
            </ul>
          </div>
          <div className='flex flex-col lg:items-start items-center gap-10 w-auto'>
            <h4 className='font-bold text-xl lg:text-left text-center leading-tight title_color_mode_white'>Nos services</h4>
            <ul className='flex flex-col lg:items-start items-center gap-1.5 text_color_mode_white'>
              <li>
                <a className="text-base">Onirix</a>
              </li>
              <li>
                <a className="text-base">Orientation</a>
              </li>
              <li>
                <a className="text-base">Coaching</a>
              </li>
            </ul>
          </div>
          <div className='flex flex-col lg:items-start items-center gap-10 w-auto'>
            <h4 className='font-bold text-xl lg:text-left text-center leading-tight title_color_mode_white'>Nous contacter</h4>
            <ul className='flex flex-col items-start gap-1.5 text_color_mode_white'>
              <li>
                <div className='text-base flex justify-normal items-center gap-4'><FontAwesomeIcon icon={faEnvelope} className='text-white title_color_mode_white' />contact@irr.ong</div>
              </li>
              <li>
                <div className='text-base flex justify-normal items-center gap-4'><FontAwesomeIcon icon={faPhone} className='text-white title_color_mode_white' />irr.eu</div>
              </li>
              <li>
                <div className='text-base flex justify-normal items-center gap-4'><FontAwesomeIcon icon={faLocationDot} className='text-white title_color_mode_white' />Madagascar</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer