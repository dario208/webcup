import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { PropsMode, ThemesCategoryData } from '../Type/Type';
import { getThemesCategorie } from '../Query/ThemeCategory.query';
import Advertissement from '../Components/Advertisement/Advertissement';
import Footer from '../Components/Footer/Footer';

export default function Details(props: PropsMode) {
  const { id, name } = useParams();
  const [themeCategory, setThemeCategory] = useState<null | ThemesCategoryData>(null);
  const handleThemeCategory = async () => {
    if (id) {
      const theme = await getThemesCategorie('fr', id);
      setThemeCategory(theme);
    }
  }

  useEffect(() => {
    handleThemeCategory();
  }, [id])
  
  return (
    <div className="w-full h-auto flex flex-col items-center gap-20 p-20">
      <Advertissement />
      <div className="w-full h-screen flex justify-center items-center gap-20">
        <div className='w-auto'>
          <img src={`/images/T${name}.png`} className="w-[400px] h-[400px]" alt="logo" />
        </div>
        <div className="flex flex-col items-start sm:w-full lg:w-1/2 gap-14">
          <div className='flex justify-normal items-center gap-6'>
            <h4 className='font-bold text-2xl leading-tight text-white'>{themeCategory?.name}</h4>
            <button className='py-1.5 px-8 rounded-full border-2 border-gray-400 font-bold text-lg text-gray-400'>{themeCategory?.expand.category.name}
            </button>
          </div>
          <div className="flex flex-col items-start gap-6">
            <div className='flex justify-normal items-center gap-2'>
              <img src='/images/idea.png' className="" alt="logo" />
              <h4 className='font-bold text-base leading-tight text-white'>Signification possible </h4>
            </div>
            <p className='text-lg leading-7 text-gray-400'>
            {themeCategory?.meaning}
            </p>
          </div>
          <div className="flex flex-col items-start gap-6 p-10 bg-white  rounded-xl">
            <div className='flex justify-normal items-center gap-2'>
              <img src='/images/attrape_reve.png' className="w-[40px] h-[40px]" alt="logo" />
              <h4 className='font-bold text-base leading-tight text-black'>Ce que vous pourrez faire </h4>
            </div>
            <p className='text-lg leading-7 text-gray-400'>{themeCategory?.direction}</p>
          </div>
        </div>
      </div>
      <Footer modeWhite={props.modeWhite}/>
    </div>
  )
}
