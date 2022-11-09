import './App.css';
import Contacts from './contacts/Contacts';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Sms from './sms/Sms';
import Contact from './contacts/Contact';
import Home from './Home';
import Compose from './contacts/Compose';
import { createContext, useState } from 'react';

export const context=createContext({});

function App() {

  const [sms,setSms]= useState([]);

  return (
    <div className="">
      <header className="px-3 py-4 primaryColor text-xl">
        <h1 className='text-2xl'>OTP tool</h1>
      </header>
      <context.Provider value={{ sms, setSms }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="sms" element={<Sms />} />
            <Route exact path="contact/:id" element={<Contact />} />
            <Route exact path="contact/:id/compose" element={<Compose />} />
          </Routes>
      </context.Provider>
    </div>
  );
}

export default App;