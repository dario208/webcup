import ServiceCard from './ServiceCard';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import DetailsCard from './DetailsCard';

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Recherche et développement ",
      image: "developmentweb.png",
      description: "Recherche et au développement de technologies innovantes pour améliorer l'analyse des rêves et la compréhension du subconscient.",
    },
    {
      id: 2,
      title: 'Internet of things',
      image: 'internet.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 3,
      title: 'Graphic design / Rendering',
      image: 'graphic.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 4,
      title: 'Mobile development',
      image: 'mobile.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 5,
      title: 'Machine Learning',
      image: 'machine.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 6,
      title: 'Gaming',
      image: 'videogame.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  const details = [
    {
      id: 1,
      subtitle: 'Lorem ipsum',
      title: 'Lorem ipsum dolor sit',
      description:
        'We are mainly focused on tech that matters and evolving. Webelieve that machine learning is the future of the world and we are the future of the tech industry.',
      image: 'img3.png',
    },
    // {
    //   id: 2,
    //   subtitle: 'Lorem ipsum',
    //   title: 'Lorem ipsum dolor sit',
    //   description:
    //     'We are mainly focused on tech that matters and evolving. Webelieve that machine learning is the future of the world and we are the future of the tech industry.',
    //   image: 'img4.png',
    // },
    // {
    //   id: 3,
    //   subtitle: 'Lorem ipsum',
    //   title: 'Lorem ipsum dolor sit',
    //   description:
    //     'We are mainly focused on tech that matters and evolving. Webelieve that machine learning is the future of the world and we are the future of the tech industry.',
    //   image: 'img5.png',
    // },
  ];
  return (
    <div className="w-full flex flex-col items-center py-16 gap-28">
      <div className="flex flex-col items-center gap-2">
        <h4 className="font-bold text-base leading-tight text-transparent bg-clip-text bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF]">
          Lorem ipsum
        </h4>
        <h2 className="font-bold text-6xl leading-none text-center w-3/4">
          Vestibulum penatibus sed blandit aliquam
        </h2>
      </div>

      {/* Cards */}
      <div
        className="w-full flex items-center flex-wrap justify-center gap-14 py-12 "
        id="cards"
      >
        {services.map(({ id, title, image, description }) => (
          <ServiceCard image={image} title={title} key={id} domId={id}>
            {description}
          </ServiceCard>
        ))}
      </div>

      {/* 2e section */}
      <div className="w-full flex flex-col items-center divide-y-4 divide-slate-300/25">
        {/* <div className="flex sm:flex-col lg:flex-row justify-between items-center w-full gap-20 py-12 ">
          <img
            src="images/img3.png"
            className="sm:w-full lg:w-1/2"
            alt="logo"
          />
          <div className="flex flex-col items-start gap-10">
            <div className="flex flex-col items-start gap-2">
              <h4 className="font-bold text-base leading-tight text-transparent bg-clip-text bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF] uppercase">
                Lorem ipsum
              </h4>
              <h2 className="font-bold text-4xl leading-tight">
                Lorem ipsum dolor sit
              </h2>
            </div>
            <p className="text-base leading-7 text-gray-400">
              We are mainly focused on tech that matters and evolving. We
              believe that machine learning is the future of the world and we
              are the future of the tech industry.
            </p>
            <button className="font-bold text-lg flex justify-normal items-center gap-4">
              Lorem ipsum dolor set
              <FontAwesomeIcon
                icon={faArrowRightLong}
                style={{ color: '#ffffff' }}
              />
            </button>
          </div>
        </div> */}
        {details.map(({ id, subtitle, title, description, image }) => (
          <DetailsCard
            subtitle={subtitle}
            title={title}
            image={image}
            key={id}
            id={id}
            buttonTitle="Lorem ipsum dolor sor"
          >
            {description}
          </DetailsCard>
        ))}
        {/* <div className="flex justify-between items-center w-full gap-20  py-12   ">
          <div className="flex flex-col items-start gap-10">
            <div className="flex flex-col items-start gap-2">
              <h4 className="font-bold text-base leading-tight text-transparent bg-clip-text bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF] uppercase">
                Lorem ipsum
              </h4>
              <h2 className="font-bold text-4xl leading-tight">
                Lorem ipsum dolor sit
              </h2>
            </div>
            <p className="text-base leading-7 text-gray-400">
              We are mainly focused on tech that matters and evolving. We
              believe that machine learning is the future of the world and we
              are the future of the tech industry.
            </p>
            <button className="font-bold text-lg flex justify-normal items-center gap-4">
              Lorem ipsum dolor set
              <FontAwesomeIcon
                icon={faArrowRightLong}
                style={{ color: '#ffffff' }}
              />
            </button>
          </div>
          <img src="images/img4.png" className="w-1/2" alt="logo" />
        </div>
        <div className="flex justify-between items-center w-full gap-20 py-12">
          <img src="images/img5.png" className="w-1/2" alt="logo" />
          <div className="flex flex-col items-start gap-10">
            <div className="flex flex-col items-start gap-2">
              <h4 className="font-bold text-base leading-tight text-transparent bg-clip-text bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF] uppercase">
                Lorem ipsum
              </h4>
              <h2 className="font-bold text-4xl leading-tight">
                Lorem ipsum dolor sit
              </h2>
            </div>
            <p className="text-base leading-7 text-gray-400">
              We are mainly focused on tech that matters and evolving. We
              believe that machine learning is the future of the world and we
              are the future of the tech industry.
            </p>
            <button className="font-bold text-lg flex justify-normal items-center gap-4">
              Lorem ipsum dolor set
              <FontAwesomeIcon
                icon={faArrowRightLong}
                style={{ color: '#ffffff' }}
              />
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
