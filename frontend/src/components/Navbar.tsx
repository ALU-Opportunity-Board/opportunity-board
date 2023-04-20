/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { GrNotification } from 'react-icons/gr';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { Button, buttonVariants } from './ui/Button';

function Navbar() {
  const [state, setState] = useState(false);
  const navigation = [
    { title: 'Home', path: '/home' },
    { title: 'Add Oppotunities', path: '/opportunity' },
    { title: 'FaQ', path: '/support' },
    { title: 'Contact us', path: '/contactUs' },
  ];
  return (
    <div className="fixed backdrop-blur-sm bg-white/75 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 shadow-sm flex items-center justify-between">
      <div className="container max-w-7xl mx-auto w-full flex justify-between items-center ">
        <img src="./src/assets/alu.png" alt="Logo" width={120} height={50} />

        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? 'block' : 'hidden'
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx}>
                  <a href={item.path}>
                    <Button variant="ghost" size="lg">
                      {item.title}
                    </Button>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="justify-end md:flex hidden">
          <Button variant="ghost" size="lg">
            <GrNotification />
          </Button>
        </div>

        <div className="md:hidden">
          <Button variant="ghost" onClick={() => setState(!state)}>
            {state ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
