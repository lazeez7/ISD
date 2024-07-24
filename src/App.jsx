import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Experience from './components/Experience/Experience';
import Window from './components/Window/Window';
import Integratsion from './components/Integratsion/Integration';
import Technology from './components/Technology/Technology';
import Deriction from './components/Section_direction/Section_direction';
import Credit from './components/Section_credit/Section_credit';
import Our from './components/Section_our_mission/Section_our_mission';
import Platform from './components/Section_platform/Section_platform';
import Advantages from './components/Section_Advantages/Section_Advantages';
import Score from './components/Section_score/Section_score';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Our />
      <Experience />
      <Deriction />
      <Platform />
      <Score />
      <Advantages />
      <Window />
      <Credit />
      <br />
      <br />
      <Integratsion />
      <Technology />
    </>
  );
}

export default App;
