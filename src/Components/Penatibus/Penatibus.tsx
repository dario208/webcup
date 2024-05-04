import React from 'react'

function Penatibus() {
  return (
    <div className='w-full flex flex-col items-center lg:px-32 py-16 gap-28'>
      <div className='flex flex-col items-center gap-2'>
        <h4 className='font-bold lg:text-base text-sm text-center leading-tight text-transparent bg-clip-text bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF] uppercase'>Institut International des Rêves</h4>
        <h2 className='font-bold lg:text-6xl text-4xl text-center leading-none text-center title_color_mode_white'>Les avantages</h2>
      </div>
      <div className='flex flex-col items-center gap-10 w-full'>
        <div className='w-full flex max-xl:flex-wrap justify-between items-center xl:items-start gap-10'>
          <div className='flex lg:flex-row flex-col justify-normal lg:items-start items-center p-10 gap-10 w-full'>
            <img
              src={process.env.REACT_APP_LOCAL_IMAGE_PATH + 'icon1.svg'}
              className="backdrop-blur-3xl rounded-lg"
              alt="Right-svg"
            />
            <div className='flex flex-col lg:items-start items-center gap-3.5'>
              <h4 className='font-bold text-base max-lg:text-center leading-tight title_color_mode_white'>Qualité de service</h4>
              <p className='text-base max-lg:text-center leading-7 text-gray-400 text_color_mode_white'>Onyrix : une IA avancée pour une analyse de rêve de qualité supérieure.</p>
            </div>
          </div>
          <div className='flex lg:flex-row flex-col justify-normal lg:items-start items-center p-10 gap-10 w-full'>
            <img
              src={process.env.REACT_APP_LOCAL_IMAGE_PATH + 'icon2.svg'}
              className="backdrop-blur-3xl rounded-lg"
              alt="Right-svg"
            />
            <div className='flex flex-col lg:items-start items-center gap-3.5'>
              <h4 className='font-bold text-base max-lg:text-center leading-tight title_color_mode_white'>Algorithme sophitisqué</h4>
              <p className='text-base max-lg:text-center leading-7 text-gray-400 text_color_mode_white'>Une intelligence artificielle sophistiquée qui utilise un algorithme avancé pour fournir une analyse approfondie et précise de vos rêves, vous aidant ainsi à mieux comprendre votre subconscient. </p>
            </div>
          </div>
        </div>
        <div className='w-full flex max-xl:flex-wrap justify-between items-center xl:items-start gap-10'>
          <div className='flex lg:flex-row flex-col justify-normal lg:items-start items-center p-10 gap-10 w-full'>
            <img
              src={process.env.REACT_APP_LOCAL_IMAGE_PATH + 'icon3.svg'}
              className="backdrop-blur-3xl rounded-lg"
              alt="Right-svg"
            />
            <div className='flex flex-col lg:items-start items-center gap-3.5'>
              <h4 className='font-bold text-base max-lg:text-center leading-tight title_color_mode_white'>Réponse personnalisé</h4>
              <p className='text-base max-lg:text-center leading-7 text-gray-400 text_color_mode_white'>Onyrix offre un suivi personnalisé de vos rêves, avec la possibilité de consulter vos analyses précédentes à tout moment.</p>
            </div>
          </div>
          <div className='flex lg:flex-row flex-col justify-normal lg:items-start items-center p-10 gap-10 w-full'>
            <img
              src={process.env.REACT_APP_LOCAL_IMAGE_PATH + 'icon4.svg'}
              className="backdrop-blur-3xl rounded-lg"
              alt="Right-svg"
            />
            <div className='flex flex-col lg:items-start items-center gap-3.5'>
              <h4 className='font-bold text-base max-lg:text-center leading-tight title_color_mode_white'>Bien être</h4>
              <p className='text-base max-lg:text-center leading-7 text-gray-400 text_color_mode_white'>analyse approfondie de vos rêves par Onyrix vous aide à mieux comprendre votre subconscient et à améliorer votre bien-être mental.</p>
            </div>
          </div>
        </div>
        <div className='w-full flex max-xl:flex-wrap justify-between items-center xl:items-start gap-10'>
          <div className='flex lg:flex-row flex-col justify-normal lg:items-start items-center p-10 gap-10 w-full'>
            <img
              src={process.env.REACT_APP_LOCAL_IMAGE_PATH + 'icon5.svg'}
              className="backdrop-blur-3xl rounded-lg"
              alt="Right-svg"
            />
            <div className='flex flex-col lg:items-start items-center gap-3.5'>
              <h4 className='font-bold text-base max-lg:text-center leading-tight title_color_mode_white'>Disponibilité 24h/24, 7j/7</h4>
              <p className='text-base max-lg:text-center leading-7 text-gray-400 text_color_mode_white'>Vous pouvez accéder à Onyrix à tout moment, de n&apos;importe où dans le monde, pour interpréter vos rêves et bénéficier de ses services d&apos;analyse.</p>
            </div>
          </div>
          <div className='flex lg:flex-row flex-col justify-normal lg:items-start items-center p-10 gap-10 w-full'>
            <img
              src={process.env.REACT_APP_LOCAL_IMAGE_PATH + 'icon6.svg'}
              className="backdrop-blur-3xl rounded-lg"
              alt="Right-svg"
            />
            <div className='flex flex-col lg:items-start items-center gap-3.5 '>
              <h4 className='font-bold text-base max-lg:text-center leading-tight title_color_mode_white'>Confidentialité garantie</h4>
              <p className='text-base max-lg:text-center leading-7 text-gray-400 text_color_mode_white'>Vos données sont protégées par des mesures de sécurité avancées et Onyrix s&apos;engage à respecter votre vie privée.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Penatibus