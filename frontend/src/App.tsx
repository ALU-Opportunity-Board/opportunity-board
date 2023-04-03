import React, { useState } from 'react';
import './App.css';

function App() {
  const navigation = [
    { title: 'Home', path: '/' },
    { title: 'Add Oppotunities', path: '/' },
    { title: 'Support', path: '/' },
    { title: 'Contact us', path: '/' },
  ];
  return (
    <div className="fixed backdrop-blur-sm bg-white/75 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 shadow-sm flex items-center justify-between">
      <div className="container max-w-7xl mx-auto w-full flex justify-between items-center">
        <img src="./src/assets/alu.png" alt="Logo" width={120} height={50} />

        <div className="flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 hidden">
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-gray-600 hover:text-indigo-600">
                  {item.title}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="justify-end md:flex hidden">
          <h1> text</h1>
        </div>

        <div className="md:hidden">
          <h1>test</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
