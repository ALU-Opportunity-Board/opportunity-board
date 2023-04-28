/* eslint-disable no-script-url */
import React, { useEffect, useState } from 'react';
import Filter from '../components/Filter';
import Opportunitycard from '../components/Opportunitycard';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const [auth, setAuth] = useState(null);
  const nav = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('JWT') == null) {
      return nav('/');
    } else {
      axios
        .get('http://127.0.0.1:5000/opportunities', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('JWT')}`,
          },
        })
        .then((res) => {
          console.log(res);
          setAuth(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);
  return (
    <div className="container-fluid bg-gray-50">
      <Navbar />
      <section className="max-w-screen-xl mx-auto pt-20 pb-auto px-4 md:px-4">
        <div className="max-w-xl">
          <div className="py-4">
            <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
              Explore below verified opportunities with a new{' '}
              <span className="text-red-600">search experience</span>
            </h3>
            <p className="text-gray-500 leading-relaxed mt-3">
              Embark on a mission to intentionally and actively drive
              technological change on the continent with industry-relevant
              knowledge and skills you will acquire throughout your learning
              journey at ALU.
            </p>
          </div>
          <a
            className="cta-pr-btn px-4 py-2 text-indigo-600 font-medium bg-indigo-50 rounded-full inline-flex items-center"
            href="/support"
          >
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-1 duration-150"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>

        <style jsx>{`
          .cta-pr-btn:hover svg {
            transform: translateX(5px);
          }
        `}</style>
      </section>

      <Filter />
      <Opportunitycard />
    </div>
  );
}
