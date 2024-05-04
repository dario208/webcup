import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { PropsMode, ThemesData } from '../Type/Type';
import { getThemes } from '../Query/Theme.query';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Advertissement from '../Components/Advertisement/Advertissement';

function Topics(props: PropsMode) {
  const bw = useRef(null as any);
  const inp = useRef(null as any);

  const handleInputAnimation = () => {
    bw.current.style.transform = 'rotate(-2deg)';
    inp.current.style.transform = 'rotate(2deg)';
    //transition

    // bw.current.style.border = '2px solid #1E50FF';
  };
  const handleInputAnimationOut = () => {
    bw.current.style.transform = 'rotate(0deg)';
    inp.current.style.transform = 'rotate(0deg)';
    // bw.current.style.border = '2px solid #1E50FF';
  };
  const handleChange = (e: any) => {
    setSearch(e.target.value);
    if (e.target.value === '') {
      handleThemes();
    }

    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const [themesList, setThemesList] = useState<null | ThemesData>(null);
  const handleThemes = async () => {
    const themes = await getThemes('fr');
    setThemesList(themes);
  };
  useEffect(() => {
    handleThemes();
  }, []);

  const [search, setSearch] = useState<string | null>();
  function scrolltoId(id: any) {
    const access = document.getElementById(id);
    access?.scrollIntoView({ behavior: 'smooth' });
  }

  const handleSearch = () => {
    if (search && themesList) {
      console.log('search :', search);
      const resultSeach = themesList.items.filter((items) =>
        items.name.toLowerCase().includes(search)
      );
      if (resultSeach.length > 0) {
        console.log('resultSeach :', resultSeach);
        setThemesList({ ...themesList, items: resultSeach });
      }
    }

    scrolltoId('cards');
  };

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center">
      <div className="lg:w-[868px] w-full h-auto my-48 flex flex-col place-content-center items-center gap-14 relative">
        <div className="w-full flex flex-col items-center gap-7 z-10">
          <h4 className="font-bold lg:text-base text-sm lg:text-left text-center leading-tight text-transparent bg-clip-text bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF] uppercase">
            Pour vous
          </h4>
          <h2 className="font-bold lg:text-6xl text-4xl lg:text-left text-center leading-tight">Thème </h2>
        </div>
        <div className="w-full flex-none order-1 grow-0 relative z-10">
          <div
            className="w-[868px] h-[64px] max-lg:hidden rounded-[34px] border-2 border-white box-border "
            ref={bw}
          ></div>
          <div
            className="w-full h-auto flex items-center gap-6 bg-white rounded-[40px] border-2 py-1 pr-1 pl-10 absolute top-0 left-0"
            ref={inp}
          >
            <input
              className="placeholder:text-base placeholder:text-slate-400 w-full bg-transparent outline-none text-base text-black"
              placeholder="Faites une recherche"
              name="myInput"
              onFocus={() => handleInputAnimation()}
              onBlur={() => handleInputAnimationOut()}
              onKeyDown={(event) => handleChange(event)}
            />
            <button
              className="py-3 px-7 rounded-[34px] bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF] font-bold text-lg"
              onClick={() => handleSearch()}
            >
              Rechercher
            </button>
          </div>
        </div>
        <img
          src={process.env.REACT_APP_LOCAL_IMAGE_PATH + 'bg_theme.svg'}
          className="absolute inset-x-0 bottom-52 w-full h-auto max-xl:hidden"
          alt="Right-svg"
        />
      </div>
      <Advertissement/>
      <div className="w-full h-auto flex flex-col justify-center items-center gap-28 py-20">
        <div className="w-full flex justify-between items-center">
          <div className="w-full flex lg:flex-row flex-col justify-between items-start gap-20">
            <div className="lg:w-2/5 w-full flex flex-col lg:items-strart items-center lg:gap-20 gap-6">
              <div className="w-full flex flex-col lg:items-start items-center gap-2">
                <h4 className="font-bold lg:text-base text-sm lg:text-left text-center leading-tight text-transparent bg-clip-text bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF] uppercase">
                  Thème
                </h4>
                <h2 className="font-bold lg:text-5xl text-3xl lg:text-left text-center leading-tight w-full">
                  Découvrez ce que signifie certains symboles dans vos rêves
                </h2>
              </div>
              <p className="lg:text-base text-sm lg:text-left text-center leading-7 text-gray-400">
                Rappeler-vous , les rêves sont des messages de votre
                subconscient
              </p>
            </div>
            <div className="w-full h-auto flex flex-col items-strart gap-10">
              <div className="w-full h-auto rounded-[40px] relative">
                <img
                  src="images/img11.png"
                  className="w-full rounded-[40px] lg:h-[558px] h-[380px]"
                  alt="logo"
                />
                <div className="w-full h-full rounded-[40px] absolute left-0 top-0 lg:pl-20 lg:pt-20 md:pl-10 md:pt-10 lg:pr-10 lg:pb-10 p-6 flex justify-between items-start">
                  <img
                    src={process.env.REACT_APP_LOCAL_IMAGE_PATH + 'blood.svg'}
                    className="max-md:hidden"
                    alt="Right-svg"
                  />
                  <div className="md:w-[380px] w-full h-full flex flex-col justify-between items-strart">
                    <div className="w-full flex flex-col items-start gap-2">
                      <h4 className="font-normal text-base leading-tight text-black">
                        Thème
                      </h4>
                      <h2 className="font-bold text-3xl leading-tight w-full text-black">
                        La signification du sang dans vos rêves
                      </h2>
                    </div>
                    <Link to="/details/8bf5qpa7a96hv4o/8" >
                      <button className="w-full py-3 px-7 rounded-full bg-black font-bold lg:text-lg text-base">
                        Voir plus
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full lg:h-[558px] h-auto flex md:flex-row flex-col justify-center items-center gap-10">
                <div className="w-full h-full rounded-[40px] relative">
                  <img
                    src="images/img12.png"
                    className="w-full rounded-[40px] lg:h-[558px] h-[380px]"
                    alt="logo"
                  />
                  <div className="w-full lg:h-[558px] h-[380px] flex flex-col justify-between items-strart absolute left-0 top-0 lg:p-10 p-6">
                    <div className="w-full flex flex-col items-start gap-2">
                      <h2 className="font-bold text-3xl leading-tight w-full text-black">
                        Amitié
                      </h2>
                      <h4 className="font-normal text-xl leading-8 text-black">
                        L&apos;amitié est un thème récurrent dans les rêves.
                      </h4>
                    </div>
                    <Link to="/details/sgzcrrttdbhijms/11" >
                      <button className="w-full py-3 px-7 rounded-full bg-black font-bold lg:text-lg text-base">
                        Voir plus
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="w-full h-full rounded-[40px] relative">
                  <img
                    src="images/img13.png"
                    className="w-full rounded-[40px] lg:h-[558px] h-[380px]"
                    alt="logo"
                  />
                  <div className="w-full lg:h-[558px] h-[380px] flex flex-col justify-between items-strart absolute left-0 top-0 lg:p-10 p-6">
                    <div className="w-full flex flex-col items-start gap-2">
                      <h2 className="font-bold text-3xl leading-tight w-full text-black">
                        Le voyage
                      </h2>
                      <h4 className="font-normal text-xl leading-8 text-black">
                        Chaque voyage est une aventure, et les rêves de voyage
                      </h4>
                    </div>
                    <Link to="/details/5rw24ynuf4tgwkq/5" >
                      <button className="w-full py-3 px-7 rounded-full bg-black font-bold lg:text-lg text-base">
                        Voir plus
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col items-start gap-10">
          <div className="w-full flex justify-between items-center">
            <h2 className="font-bold md:text-3xl text-2xl leading-tight">
              Thèmes de rêves
            </h2>
            <button className="font-normal text-s flex justify-center items-center gap-2">
              Voir plus
              <FontAwesomeIcon
                icon={faAngleDown}
                style={{ color: '#ffffff' }}
              />
            </button>
          </div>
          <div
            className="w-full h-auto grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-6"
            id="cards"
          >
            {themesList &&
              themesList.items.map((itemTheme, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-4 px-10 py-16 bg-black-rgba bg-black-500 backdrop-blur-3xl rounded-3xl "
                >
                  <Link to={`/details/${itemTheme.id}/${index + 1}`}>
                    <img
                      src={`images/T${index + 1}.png`}
                      className="rounded-[40px] w-[80px]"
                      alt="logo"
                    />
                    <h2 className="font-bold text-xl leading-tight text-center w-full">
                      {itemTheme.name}
                    </h2>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Footer modeWhite={props.modeWhite}/>
    </div>
  );
}

export default Topics;
