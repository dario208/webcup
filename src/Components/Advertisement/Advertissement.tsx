import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Advertissement() {
  const [active, setActive] = useState<boolean>(true);
  return (
    <>
    {
      active &&
      <div className='flex lg:flex-row flex-col justify-between 2xl:items-center lg:items-end items-center 2xl:pl-[188px] lg:pl-20 pl-6 pr-0 2xl:pt-0 lg:pt-10 pt-20 gap-20 bg-black-rgba backdrop-blur-3xl rounded-3xl border-2 border-[#3D3D3D] w-full h-auto relative'>
        <div className='py-2 cursor-pointer px-3.5 rounded-full bg-[#3D3D3D] absolute top-4 right-4'><FontAwesomeIcon icon={faXmark} style={{color: "#ffffff",}} onClick={() => setActive(false)}/></div>
        <div className='flex flex-col lg:items-start items-center gap-10 lg:py-10 2xl:py-0 max-lg:mr-6 lg:h-full'>
          <div className='flex flex-col lg:items-start items-center gap-2'>
            <h4 className='font-bold lg:text-base text-sm lg:text-left text-center leading-tight text-transparent bg-clip-text bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF] uppercase'>Institut International des Rêves</h4>
            <h2 className='font-bold lg:text-4xl text-3xl lg:text-left text-center leading-tight title_color_mode_white'>Consultez des professionnels</h2>
          </div>
          <p className='text-base lg:text-left text-center leading-7 text-gray-400 text_color_mode_white'>
            Si vous faites souvent des cauchemars ou si vous avez des rêves récurrents 
            qui vous dérangent, vous pouvez consulter un professionnel de la santé mentale.
              Les psychologues et les psychiatres sont des experts dans le domaine de la santé 
              mentale et peuvent vous aider à comprendre vos rêves et à les interpréter. 
          </p>
          <Link to="https://institutdepsychiatrie.org/" target='_blank'>
            <button className="lg:py-3 py-2 px-10 rounded-lg bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF] font-bold lg:text-lg text-base">
              Trouver un professionnel
            </button>
          </Link>
        </div>
        <img src='/images/pub.png' className="lg:w-1/2 w-full" alt="logo" />
      </div>
    }
    </>
  )
}

export default Advertissement