// import Image from 'next/image';
// import SvgFilters from '../layouts/SvgFilters';
import React from 'react';

export default function ServiceCard({
  domId = 'Card',
  image,
  title = 'Title',
  children = 'Description',
}: any) {
  return (
    // <div id={domId}>
    // {/* <SvgFilters domId={domId} filterId={`${domId}Filter`} /> */}
    <main className="font-gotham-medium p-9 rounded-xl bg-[#20202097] cursor-pointer w-full sm:w-[432px] flex flex-col items-center justify-center gap-10 card">
      <img
        src={process.env.REACT_APP_LOCAL_IMAGE_PATH + image}
        alt="Card_image"
      />
      <div className="flex gap-10 xl:gap-20 text-white font-gotham-medium xl:text-2xl sm:text-base xl:font-medium ">
        {title}
      </div>
      <span className="font-gotham-light text-lg font-normal text-description-white text-center">
        {children}
      </span>
    </main>
    // </div>
  );
}
