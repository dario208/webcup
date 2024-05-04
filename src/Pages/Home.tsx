import React from 'react';
import Accueil from '../Components/Accueil/Accueil';
import Partenaire from '../Components/Partenaire/Partenaire';
import Nunc from '../Components/Nunc/Nunc';
import Vestibulum from '../Components/Vestibulum/Vestibulum';
import Penatibus from '../Components/Penatibus/Penatibus';
import CardTextareaIA from '../Components/CardTextareaIA/CardTextareaIA';
import Interdum from '../Components/Interdum/Interdum';
import CardPenatibus from '../Components/CardPenatibus/CardPenatibus';
import Footer from '../Components/Footer/Footer';
import Services from '../Components/Vestibulum/Services';
import Temoignage from '../Components/Temoignage/Temoignage';
import ExPromptCard from '../Components/CardPenatibus/ExPromptCard';
import Advertissement from '../Components/Advertisement/Advertissement';
import { PropsMode } from '../Type/Type';

function Home(props: PropsMode) {
  return (
    <div>
      <Accueil />
      <Advertissement />
      <Partenaire modeWhite={props.modeWhite}/>
      <ExPromptCard/>
      {/* <Services /> */}
      <Penatibus />
      <Nunc/>
      <CardTextareaIA />
      <Temoignage />
      {/* <CardPenatibus /> */}
      {/* <Interdum /> */}
      <Footer modeWhite={props.modeWhite}/>
    </div>
  );
}

export default Home;
