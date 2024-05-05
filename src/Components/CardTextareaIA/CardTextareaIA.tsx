import React, { useEffect } from 'react';
import { useState } from 'react';
import { sendIaDream } from '../../Mutation/sendIaDream.mutation';
import { dreamInsert } from '../../Mutation/dreamInsert.mutation';
import { getUserInfo } from '../../Query/UserInfo.query';
import { getUser } from '../../Query/GetUser.query';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import { RiSendPlaneFill } from 'react-icons/ri';
import { BsFillSendFill } from 'react-icons/bs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import SvgListening from './SvgListening';
import { PropsMode } from '../../Type/Type';

export default function cardTextareaIA() {
  const [resultIA, setResultIA] = useState<null | string>(null);
  const [dreamDescription, setDreamDescription] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const sendDreamDescription = async () => {
    if (dreamDescription && dreamDescription.length > 4) {
      setLoading(true);
      const resultDream = await sendIaDream(dreamDescription);
      setResultIA(resultDream);
      setLoading(false);
      resetTranscript();
      const access_tokenWeb = localStorage.getItem('access_tokenWeb');
      if (access_tokenWeb) {
        const userInfoData = await getUserInfo(access_tokenWeb);
        const userData = await getUser(userInfoData.id);
        dreamInsert({
          description: dreamDescription,
          response: resultDream,
          user_id: userData.items[0].id,
        });
      } else {
        dreamInsert({
          description: dreamDescription,
          response: resultDream,
          user_id: null,
        });
      }
    }
  };
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  useEffect(() => {
    // Dealing with Textarea Height
    // function calcHeight(value: any) {
    //   const numberOfLineBreaks = (value.match(/\n/g) || []).length;
    //   // min-height + lines x line-height + padding + border
    //   const newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2;
    //   return newHeight;
    // }
    // const textarea = document.querySelector('.resize-ta');
    // textarea?.addEventListener('keyup', () => {
    //   textarea?.style?.setProperty('height', calcHeight(textarea.value) + 'px');
    // });
  }, []);

  useEffect(() => {
    if (transcript.length > 4) setDreamDescription(transcript);
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    console.log("Browser doesn't support speech recognition");
  }
  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: 'fr-FR' });
  };
  return (
    <div className="w-full my-32 flex flex-col justify-center items-center relative -z-50">
      <div className="lg:w-[868px] w-full  flex flex-col place-content-center items-center gap-10 z-10 snap-y">
        <div className="w-full flex flex-col items-center gap-2">
          <h2 className="font-bold text-3xl text-center leading-tight title_color_mode_white">
            Interprétez vos rêves
          </h2>
          <p className="text-base text-center leading-7 text-gray-400 text_color_mode_white">
            Les réponse à vos questions seront totalement personnalisées et
            confidentielles.
          </p>
        </div>
        <div className="w-full h-auto flex flex-col items-center gap-4 bg-black-rgba backdrop-blur-3xl rounded-3xl p-4">
          <textarea
            value={dreamDescription ?? ''}
            className="placeholder:text-base placeholder:text-slate-400 w-full lg:h-[300px] h-[200px] bg-[#061033] outline-none rounded border-2 border-[#081647] lg:p-10 p-4 textarea"
            placeholder="Décrivez votre rêve..."
            name="myInput"
            onChange={(event) => setDreamDescription(event.target.value)}
          />
          {!loading ? (
            // <button
            //   className=" m-3 py-3 px-4 rounded-3xl bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF] font-bold text-sm"
            //   onClick={() => sendDreamDescription()}
            // >
            //   <RiSendPlaneFill />
            // </button>
            <div className="w-full flex justify-between items-center">
              <div className="w-auto flex justify-normal items-strart lg:gap-3.5 gap-2">
                <button
                  onClick={() => sendDreamDescription()}
                  className="lg:py-5 lg:px-10 p-4 lg:rounded-xl rounded-full bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF] font-bold text-lg flex items-center gap-2"
                >
                  <BsFillSendFill />
                  <p className="max-lg:hidden">Interpréter</p>
                </button>
                {browserSupportsSpeechRecognition && (
                  <button
                    onTouchStart={startListening}
                    onMouseDown={startListening}
                    onTouchEnd={SpeechRecognition.stopListening}
                    onMouseUp={SpeechRecognition.stopListening}
                    className={`lg:py-3 lg:px-10 p-4 lg:rounded-xl rounded-full text-s flex justify-center items-center gap-3 font-normal ${
                      listening
                        ? 'bg-gradient-to-br from-[#61285B] via-[#45389E] to-[#1E50FF]'
                        : 'bg-transparent text-gray-400 border-2  border-gray-400'
                    }`}
                  >
                    {/* {listening ? (
                      <SvgListening />
                    ) : ( */}
                    <FontAwesomeIcon
                      icon={faMicrophone}
                      style={{color: "#ffffff" ,}}
                    />
                    {/* )} */}
                    <p className="max-lg:hidden font-bold title_color_mode_white">Activer le micro</p>
                  </button>
                )}
              </div>
              <button className="w-auto font-normal text-s flex justify-center items-center gap-3 title_color_mode_white">
                <FontAwesomeIcon
                  icon={faSquareCheck}
                  style={{color: "#ffffff" ,}}
                />
                Enregister vos reponses
              </button>
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-16 w-16"></div>
            </div>
          )}
          {resultIA && (
            <div className="flex flex-col items-center gap-2 my-4">
              <h2 className="font-bold text-3xl leading-tight title_color_mode_white">Prédiction</h2>
              <p className="text-base leading-7 text-gray-400 text_color_mode_white">{resultIA}</p>
            </div>
          )}
        </div>
      </div>
      <img
        src={process.env.REACT_APP_LOCAL_IMAGE_PATH + 'bg_reve.svg'}
        className="absolute inset-0 w-full h-full max-xl:hidden"
        alt="Right-svg"
      />
    </div>
  );
}
