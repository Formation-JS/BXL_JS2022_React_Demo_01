import { useState } from 'react';
import './App.css';
import BigButton from './components/big-button/big-button';
import DemoEffect from './components/demo-effect/demo-effect';
import LoginForm from './components/login-form/login-form';
import PersonTable from './components/person-table/person-table';
import Welcome from './components/welcome/welcome';
import LiveboardStation from './containers/liveboard-station/liveboard-station';

// Donnée static pour la demo
const people = [
  { id:1, firstname: 'Zaza', lastname: 'Vanderquack', age : 15 },
  { id:2, firstname: 'Balthazar', lastname: 'Picsou', age : 67 },
  { id:3, firstname: 'Della', lastname: 'Duck', age : 36 }
];

function App() {

  const [displayEffect, setDisplayEffect] = useState(true);

  return (
    <div className='App'>
      <Welcome 
        firstname='Zaza'
        lastname='Vanderquack'/>
      
      {/* <h2>Collections</h2>
      <PersonTable data={people} /> */}

      {/* <h2>Event & State</h2>
      <BigButton /> */}

      {/*<h2>Formulaire</h2>
      <LoginForm /> */}

      {/* <h3>Cycle de vie (Effect)</h3>
      <button onClick={() => setDisplayEffect(d => !d)}>Change</button>
      {displayEffect && (
        <DemoEffect />
      )} */}

      <h2>Requete Ajax</h2>
      <LiveboardStation />

    </div>
  );
}

export default App;
