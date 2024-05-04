import React from 'react';

function Interdum() {
  return (
    <div
      className="w-full flex flex-col items-center xl:px-32 py-16 gap-28"
      id="iir_services"
    >
      <div className="flex flex-col items-center gap-2">
        <h4 className="font-bold lg:text-base text-sm text-center leading-tight text-gray-400 uppercase text-transparent bg-clip-text bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF]">
          Institut International des Rêves
        </h4>
        <h2 className="font-bold lg:text-6xl text-4xl leading-none text-center">
          Nos services
        </h2>
      </div>
      <div className="flex flex-col items-center gap-10 ">
        <div
          className="w-full grid grid-cols-1 xl:grid-cols-3 xl:gap-10 gap-6"
          id="cards"
        >
          <div className="flex flex-col items-center gap-10 bg-black-rgba rounded-lg p-16 card">
            <img
              src={process.env.REACT_APP_LOCAL_IMAGE_PATH + 'developmentweb.svg'}
              className=""
              alt="Right-svg"
            />
            <div className="flex flex-col items-center gap-3.5">
              <h4 className="font-bold text-base text-center leading-tight">
                Recherche et developpement
              </h4>
              <p className="text-base text-center leading-7 text-gray-400">
                Des technologies innovantes pour améliorer l&apos; la
                compréhension du subconscient.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-10 bg-black-rgba rounded-lg p-16 card">
            <img
              src={process.env.REACT_APP_LOCAL_IMAGE_PATH + 'internet.svg'}
              className=""
              alt="Right-svg"
            />
            <div className="flex flex-col items-center gap-3.5">
              <h4 className="font-bold text-base text-center leading-tight">
                Formation et éducation
              </h4>
              <p className="text-base text-center leading-7 text-gray-400">
                Des programmes de formation et d&apos;éducation pour aider les
                professionnels de la santé mentale.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-10 bg-black-rgba rounded-lg p-16 card">
            <img
              src={process.env.REACT_APP_LOCAL_IMAGE_PATH + 'graphic.svg'}
              className=""
              alt="Right-svg"
            />
            <div className="flex flex-col items-center gap-3.5">
              <h4 className="font-bold text-base text-center leading-tight">
                Consultation individuelle
              </h4>
              <p className="text-base text-center leading-7 text-gray-400">
                des consultations individuelles pour aider les personnes à
                interpréter leurs rêves.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full max-xl:hidden flex justify-center items-center gap-2">
          <div className="w-10 h-1 bg-white rounded bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF]"></div>
          <div className="w-1 h-1 bg-white rounded bg-[#C2C2C2]"></div>
          <div className="w-1 h-1 bg-white rounded bg-[#C2C2C2]"></div>
          <div className="w-1 h-1 bg-white rounded bg-[#C2C2C2]"></div>
        </div>
      </div>
    </div>
  );
}

export default Interdum;
