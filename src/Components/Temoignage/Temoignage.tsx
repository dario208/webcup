import React from 'react';
import TemoignageCard from './TemoignageCard';
import Separateur from '../Separateur';

export default function Temoignage() {
  return (
    // <div className="w-full h-auto flex flex-col justify-center items-center">
    <>
      <div className="w-full  flex flex-col items-center gap-14 mt-4">
        <div className="w-full flex flex-col items-center gap-3 ">
          <h4 className="font-bold lg:text-base text-sm text-center leading-tight text-gray-400 uppercase text-transparent bg-clip-text bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF]">
            Onirix
          </h4>
          <h2 className="font-bold lg:text-6xl text-4xl text-center leading-tight title_color_mode_white">
            Témoignages
          </h2>
        </div>
        <div
          className="grid grid-cols-1 xl:grid-cols-3 xl:gap-10 gap-6 py-12 "
          id="cards"
        >
          <TemoignageCard
            name={'Rivo Lalaina RAJAONARIVONY'}
            poste={'Developpeur Backend'}
            image={'user2.png'}
          >
           J&apos;ai été totalement époustouflé par l&apos;exactitude des interprétations de mes rêves grâce à Onyrix!
          </TemoignageCard>
          <TemoignageCard
            name={'Miora RAZAIARIMANANA'}
            poste={'Developpeur Frontend'}
            image={'joelle.png'}
          >
            Onyrix m&apos;a aidé à mieux comprendre les messages de mon subconscient à travers mes rêves.
          </TemoignageCard>
          <TemoignageCard
            name={'Toky NASANDRATRA'}
            poste={'Ingenieur Agronome'}
            image={'user3.png'}
          >
            Je suis tellement reconnaissant pour Onyrix, cela m&apos;a permis d&apos;explorer des aspects profonds de ma psyché.
          </TemoignageCard>
        </div>
      </div>
      <div className="w-full max-xl:hidden flex justify-center items-center gap-2">
        <div className="w-10 h-1 bg-white rounded bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF]"></div>
        <div className="w-1 h-1 bg-white rounded bg-[#C2C2C2]"></div>
        <div className="w-1 h-1 bg-white rounded bg-[#C2C2C2]"></div>
        <div className="w-1 h-1 bg-white rounded bg-[#C2C2C2]"></div>
      </div>
    </>

    // </div>
  );
}
