/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import Typewriter from 'typewriter-effect';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import background from '../assets/aluBackground.png';
import logo from '../assets/alu-logo.png';
import { buttonVariants } from '../components/ui/Button';
import LargeHeading from '../components/ui/LargeHeading';
import Paragraph from '../components/ui/Paragraph';
import { setAuthUser, setIsAuthenticated } from '../reducers/authReducer';

export default function LoginPage(props: any) {
  // const user = useSelector((state: any) => state.App.authUser as any) as any;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('JWT') !== null) {
      return navigate('/home');
    }
  }, []);

  return (
    <body
      className="bg-cover bg-center bg-no-repeat h-full"
      style={{
        backgroundImage: `url(${background})`,
        height: '100vh',
        width: '100vw',
      }}
    >
      <div className="p-5">
        <img src={logo} alt="Logo" width={140} height={120} />
      </div>
      <div className="absolute inset-0 mx-auto container flex h-screen flex-col items-center justify-center">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 max-w-lg">
          <div className="flex flex-col items-center gap-3 text-center text-white">
            <LargeHeading>
              <Typewriter
                options={{
                  strings: ['Welcome to', 'Opportunity Board'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </LargeHeading>
            <Paragraph>
              This Opportunities Board is exclusively for ALU students and
              ALUmini. Pleas use your ALU email address to login
            </Paragraph>
          </div>
          <button
            className="text-white hover:text-black w-full flex items-center justify-center -gap-x-3 py-2.5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100"
            onClick={(e) => props.login(e)}
          >
            <FcGoogle className="text-2xl mr-4" /> Continue with Google
          </button>
        </div>
      </div>
    </body>
  );
}
