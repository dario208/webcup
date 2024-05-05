import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { CommonData, ItemCommon, PropsMode } from '../Type/Type';
import { common } from '../Query/Common.query';
import CardTextareaIA from '../Components/CardTextareaIA/CardTextareaIA';
import Footer from '../Components/Footer/Footer';
import Advertissement from '../Components/Advertisement/Advertissement';

function Dream(props: PropsMode) {
  const [commonList, setCommonList] = useState<ItemCommon[][] | null>(null);
  const handleCommon = async () => {
    const commonLists = await common('fr');
    const commonListsTab: ItemCommon[][] = [[]];
    let indexTab = 0;
    for (let i = 0; i < commonLists.totalItems; i += 3) {
      commonListsTab[indexTab] = [
        commonLists.items[i],
        commonLists.items[i + 1],
        commonLists.items[i + 2],
      ];
      indexTab++;
    }
    console.log(commonListsTab);
    setCommonList(commonListsTab);
  };

  useEffect(() => {
    handleCommon();
  }, []);

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center">
      <div className='my-8 md:my-0'>
        <CardTextareaIA />
      </div>
      

      <div className="w-full h-auto flex flex-col justify-center items-center gap-28 py-20">
        <div className="w-full flex justify-between items-center">
          <div className="w-full flex flex-col items-start gap-20">
            <div className="xl:w-2/5 w-full flex flex-col items-strart gap-10">
              <h2 className="font-bold lg:text-5xl text-4xl leading-tight w-full">
                Dites-vous qu&apos;aucun rêve n&apos;arrive par hasard
              </h2>
              <p className="lg:text-lg text-base leading-7 text-gray-400">
                Selon la psychanalyse, les rêves sont des manifestations de
                notre subconscient. Ils sont le reflet de nos désirs, de nos
                peurs et de nos émotions. Ils peuvent nous aider à mieux
                comprendre notre vie et à nous connaître nous-mêmes. C&apos;est
                pourquoi il est important de les interpréter correctement.
              </p>
            </div>
            <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:gap-10 gap-6">
              <div className="w-full h-auto col-span-2 lg:row-span-2 rounded-[40px] relative">
                <img
                  src="images/img21.png"
                  className="w-full lg:h-full h-[364px] rounded-[40px] h-full"
                  alt="logo"
                />
                <div className="w-full h-full absolute left-0 top-0 xl:p-10 p-6">
                  <button className="py-3 px-10 rounded-full border-2 border-black font-bold text-lg text-black">
                    Famille
                  </button>
                </div>
              </div>
              <div className="w-full h-auto col-span-2 rounded-[40px] relative bg-white">
                <img
                  src="images/img22.png"
                  className="w-full h-full rounded-[40px] h-full"
                  alt="logo"
                />
                <div className="w-full h-full absolute left-0 top-0 xl:p-10 p-6">
                  <button className="py-3 px-10 rounded-full border-2 border-black font-bold text-lg text-black">
                    Amis
                  </button>
                </div>
              </div>
              <div className="w-full h-auto col-span-2 rounded-[40px] relative bg-white">
                <img
                  src="images/img23.png"
                  className="w-full h-full rounded-[40px] h-full"
                  alt="logo"
                />
                <div className="w-full h-full absolute left-0 top-0 xl:p-10 p-6">
                  <button className="py-3 px-10 rounded-full border-2 border-black font-bold text-lg text-black">
                    Rélation
                  </button>
                </div>
              </div>
              <div className="w-full h-auto rounded-[40px] relative bg-white">
                <img
                  src="images/img24.png"
                  className="w-full h-full rounded-[40px] h-full"
                  alt="logo"
                />
                <div className="w-full h-full absolute left-0 top-0 xl:p-10 p-6">
                  <button className="py-3 px-10 rounded-full border-2 border-black font-bold text-lg text-black">
                    Maison
                  </button>
                </div>
              </div>
              <div className="w-full h-auto rounded-[40px] relative bg-white">
                <img
                  src="images/img25.png"
                  className="w-full h-full rounded-[40px] h-full"
                  alt="logo"
                />
                <div className="w-full h-full absolute left-0 top-0 xl:p-10 p-6">
                  <button className="py-3 px-10 rounded-full border-2 border-black font-bold text-lg text-black">
                    Ex
                  </button>
                </div>
              </div>
              <div className="w-full h-auto rounded-[40px] relative bg-white">
                <img
                  src="images/img26.png"
                  className="w-full h-full rounded-[40px] h-full"
                  alt="logo"
                />
                <div className="w-full h-full absolute left-0 top-0 xl:p-10 p-6">
                  <button className="py-3 px-10 rounded-full border-2 border-black font-bold text-lg text-black">
                    Mort
                  </button>
                </div>
              </div>
              <div className="w-full h-auto rounded-[40px] relative bg-white">
                <img
                  src="images/img27.png"
                  className="w-full h-full rounded-[40px] h-full"
                  alt="logo"
                />
                <div className="w-full h-full absolute left-0 top-0 xl:p-10 p-6">
                  <button className="py-3 px-10 rounded-full border-2 border-black font-bold text-lg text-black">
                    Crush
                  </button>
                </div>
              </div>
              <div className="w-full h-auto col-span-2 rounded-[40px] relative bg-white">
                <img
                  src="images/img28.png"
                  className="w-full h-full rounded-[40px] h-full"
                  alt="logo"
                />
                <div className="w-full h-full absolute left-0 top-0 xl:p-10 p-6">
                  <button className="py-3 px-10 rounded-full border-2 border-black font-bold text-lg text-black">
                    Attaque
                  </button>
                </div>
              </div>
              <div className="w-full h-auto rounded-[40px] relative bg-white">
                <img
                  src="images/img29.png"
                  className="w-full h-full rounded-[40px] h-full"
                  alt="logo"
                />
                <div className="w-full h-full absolute left-0 top-0 xl:p-10 p-6">
                  <button className="py-3 px-10 rounded-full border-2 border-black font-bold text-lg text-black">
                    Course
                  </button>
                </div>
              </div>
              <div className="w-full h-auto rounded-[40px] relative bg-white">
                <img
                  src="images/img30.png"
                  className="w-full h-full rounded-[40px] h-full"
                  alt="logo"
                />
                <div className="w-full h-full absolute left-0 top-0 xl:p-10 p-6">
                  <button className="py-3 px-10 rounded-full border-2 border-black font-bold text-lg text-black">
                    Bébé
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="w-full h-auto flex flex-col justify-between items-strart md:gap-10 gap-6">
              <div className="w-full xl:h-[768px] md:h-[564px] h-auto flex md:flex-row flex-col justify-between items-center md:gap-10 gap-6">
                <div className="w-full md:h-full h-[364px] rounded-[40px] relative">
                  <img
                    src="images/img21.png"
                    className="w-full rounded-[40px] h-full"
                    alt="logo"
                  />
                  <div className="w-full h-full absolute left-0 top-0 xl:p-10 p-6">
                    <button className="py-3 px-10 rounded-full border-2 border-black font-bold text-lg text-black">
                      Famille
                    </button>
                  </div>
                </div>
                <div className="w-full md:h-full h-auto h- flex md:flex-col flex-row justify-between items-strart md:gap-10 gap-6">
                  <div className="w-full md:h-[364px] h-auto rounded-[40px] relative bg-white">
                    <img
                      src="images/img22.png"
                      className="w-full rounded-[40px] h-full"
                      alt="logo"
                    />
                    <div className="w-full h-full absolute left-0 top-0 xl:p-10 p-6">
                      <button className="py-3 px-10 rounded-full border-2 border-black font-bold text-lg text-black">
                        Amis
                      </button>
                    </div>
                  </div>
                  <div className="w-full md:h-[364px] h-auto rounded-[40px] relative bg-white">
                    <img
                      src="images/img23.png"
                      className="w-full rounded-[40px] h-full"
                      alt="logo"
                    />
                    <div className="w-full h-full absolute left-0 top-0 xl:p-10 p-6">
                      <button className="py-3 px-10 rounded-full border-2 border-black font-bold text-lg text-black">
                        Rélation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className=":w-full xl:h-[364px] h-auto flex xl:flex-row flex-col justify-between items-center md:gap-10 gap-6">
                <div className="w-full h-full flex justify-between items-center md:gap-10 gap-6">
                  <div className="w-full h-full rounded-[40px] relative bg-white">
                    <img
                      src="images/img24.png"
                      className="w-full rounded-[40px] h-full"
                      alt="logo"
                    />
                    <div className="w-full h-full absolute left-0 top-0 xl:p-10 p-6">
                      <button className="py-3 px-10 rounded-full border-2 border-black font-bold text-lg text-black">
                        Maison
                      </button>
                    </div>
                  </div>
                  <div className="w-full h-full rounded-[40px] relative bg-white">
                    <img
                      src="images/img25.png"
                      className="w-full rounded-[40px] h-full"
                      alt="logo"
                    />
                    <div className="w-full h-full absolute left-0 top-0 xl:p-10 p-6">
                      <button className="py-3 px-10 rounded-full border-2 border-black font-bold text-lg text-black">
                        Ex
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full h-full flex justify-between items-center md:gap-10 gap-6">
                  <div className="w-full h-full rounded-[40px] relative bg-white">
                    <img
                      src="images/img26.png"
                      className="w-full rounded-[40px] h-full"
                      alt="logo"
                    />
                    <div className="w-full h-full absolute left-0 top-0 xl:p-10 p-6">
                      <button className="py-3 px-10 rounded-full border-2 border-black font-bold text-lg text-black">
                        Mort
                      </button>
                    </div>
                  </div>
                  <div className="w-full h-full rounded-[40px] relative bg-white">
                    <img
                      src="images/img27.png"
                      className="w-full rounded-[40px] h-full"
                      alt="logo"
                    />
                    <div className="w-full h-full absolute left-0 top-0 xl:p-10 p-6">
                      <button className="py-3 px-10 rounded-full border-2 border-black font-bold text-lg text-black">
                        Crush
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full xl-h-[364px] h-auto flex md:flex-row flex-col justify-between items-center md:gap-10 gap-6">
                <div className="w-full h-full rounded-[40px] relative bg-white">
                  <img
                    src="images/img28.png"
                    className="w-full rounded-[40px] h-full"
                    alt="logo"
                  />
                  <div className="w-full h-full absolute left-0 top-0 xl:p-10 p-6">
                    <button className="py-3 px-10 rounded-full border-2 border-black font-bold text-lg text-black">
                      Attaque
                    </button>
                  </div>
                </div>
                <div className="w-full h-full flex justify-between items-center md:gap-10 gap-6">
                  <div className="w-full h-full rounded-[40px] relative bg-white">
                    <img
                      src="images/img29.png"
                      className="w-full rounded-[40px] h-full"
                      alt="logo"
                    />
                    <div className="w-full h-full absolute left-0 top-0 xl:p-10 p-6">
                      <button className="py-3 px-10 rounded-full border-2 border-black font-bold text-lg text-black">
                        Course
                      </button>
                    </div>
                  </div>
                  <div className="w-full h-full rounded-[40px] relative bg-white">
                    <img
                      src="images/img30.png"
                      className="w-full rounded-[40px] h-full"
                      alt="logo"
                    />
                    <div className="w-full h-full absolute left-0 top-0 xl:p-10 p-6">
                      <button className="py-3 px-10 rounded-full border-2 border-black font-bold text-lg text-black">
                        Bébé
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="w-full h-auto flex flex-col items-center gap-20">
          <div className="flex flex-col items-center gap-2">
            <h4 className="font-bold lg:text-base text-sm text-center leading-tight text-transparent bg-clip-text bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF] uppercase">
              Institut International des Rêves
            </h4>
            <h2 className="font-bold lg:text-6xl text-4xl text-center leading-none text-center w-3/4">
              Les rêves les plus courants
            </h2>
          </div>

          <div className="w-full h-auto flex flex-col items-center gap-10">
            {commonList &&
              commonList.map((itemsTab, index) => (
                <div
                  key={index}
                  className="w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-10"
                >
                  {itemsTab.map((item, indexKey) => (
                    <div
                      key={indexKey}
                      className="w-full h-full rounded-xl bg-black-rgba backdrop-blur-3xl border-2 border-[#3D3D3D] px-10 pt-14 pb-10 flex flex-col items-start gap-20"
                    >
                      <div className="w-full h-full flex flex-col items-start gap-10">
                        <div className="flex justify-normal items-center gap-2">
                          <img
                            src={process.env.REACT_APP_LOCAL_IMAGE_PATH + 'idea.svg'}
                            className=""
                            alt="Right-svg"
                          />
                          <h4 className="font-bold text-base leading-tight text-gray-400 uppercase">
                            {item.name}
                          </h4>
                        </div>
                        <p className="text-lg leading-7 text-gray-400">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex justify-normal items-center gap-6 w-full">
                        <img
                          src={process.env.REACT_APP_LOCAL_IMAGE_PATH + 'dream_catcher.svg'}
                          className=""
                          alt="Right-svg"
                        />
                        <div className="w-full h-full flex flex-col items-start gap-2">
                          <h3 className="font-bold text-base leading-tight text-gray-400 uppercase border-b-2 border-gray-400">
                            Thèmes
                          </h3>
                          <h4 className="font-bold text-base leading-tight text-gray-400 uppercase">
                            - {item.expand.themes[0].name}
                          </h4>
                          {item.expand.themes[1] && (
                            <h4 className="font-bold text-base leading-tight text-gray-400 uppercase">
                              - {item.expand.themes[1].name}
                            </h4>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
      <Advertissement/>
      <Footer modeWhite={props.modeWhite}/>
    </div>
  );
}

export default Dream;
