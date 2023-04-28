/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-script-url */
import React, { useEffect, useState } from 'react';
import { FcLike, FcLikePlaceholder, FcCalendar } from 'react-icons/fc';
import Filter from './Filter';
import Icon from './ui/icon';
import members from '../models/opportunities';
import axios from 'axios';

export default function Opportunitycard() {
  const [pages, setPages] = useState(['1', '2', '3', , '...', '8', '9', '10']);
  const [currentPage, setCurrentPage] = useState('1');
  const [state, setState] = useState(members);

  const toggleLike = (id: any) => {
    const updatedItems = state.map((item) =>
      item.id === id ? { ...item, currentState: !item.currentState } : item
    );
    setState(updatedItems);
  };

  useEffect(() => {
    const fetchOpportunities = async () => {
      await axios
        .get('http://localhost:5000/opportunities', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('JWT')}`,
          },
        })
        .then((res) => {
          setState(res.data);
        })
        .catch((error) => console.log(error));
    };
    fetchOpportunities();
  }, []);

  return (
    <section className="py-0">
      <div>
        <ul className="flex border-b border-gray-200 text-center">
          <li className="flex-1">
            <a
              className="relative block border-t border-l border-r border-gray-200 bg-white p-4 text-sm font-medium"
              href=""
            >
              <span className="absolute inset-x-0 -bottom-px h-px w-full bg-white" />
              Available
            </a>
          </li>

          <li className="flex-1">
            <a className="block p-4 text-sm font-medium text-gray-500" href="">
              Saved
            </a>
          </li>
        </ul>
      </div>
      <div className="max-w-screen-lg mx-auto px-4 md:px-8">
        <ul className="mt-12 divide-y space-y-3">
          {state.map((item, idx) => (
            <li
              key={idx}
              className="px-4 py-5 duration-150 hover:border-white hover:rounded-xl hover:bg-white"
            >
              <a href={item.link} className="space-y-3">
                <div className="flex items-center gap-x-3">
                  <div className="bg-white w-14 h-14 border rounded-full flex items-center justify-center">
                    <Icon />
                  </div>
                  <div>
                    <span className="block text-2xl text-black-600 font-medium">
                      {item.title}
                    </span>
                    <h3 className="text-base text-red-600 font-semibold mt-1">
                      {item.company}
                    </h3>
                  </div>
                </div>
                {/* <p className="text-gray-600 sm:text-sm">
                  {item.job_description}
                </p> */}
                <div className="text-sm text-gray-600 flex items-center gap-6">
                  <span className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6 6V5C6 3.34315 7.34315 2 9 2H11C12.6569 2 14 3.34315 14 5V6H16C17.1046 6 18 6.89543 18 8V11.5708C15.5096 12.4947 12.8149 12.9999 10 12.9999C7.18514 12.9999 4.49037 12.4947 2 11.5707V8C2 6.89543 2.89543 6 4 6H6ZM8 5C8 4.44772 8.44772 4 9 4H11C11.5523 4 12 4.44772 12 5V6H8V5ZM9 10C9 9.44772 9.44772 9 10 9H10.01C10.5623 9 11.01 9.44772 11.01 10C11.01 10.5523 10.5623 11 10.01 11H10C9.44772 11 9 10.5523 9 10Z"
                        fill="#9CA3AF"
                      />
                      <path
                        d="M2 13.6923V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V13.6923C15.4872 14.5404 12.7964 14.9999 10 14.9999C7.20363 14.9999 4.51279 14.5404 2 13.6923Z"
                        fill="#9CA3AF"
                      />
                    </svg>
                    {item.opportunity_type}
                  </span>
                  <span className="flex items-center gap-2">
                    <FcCalendar />

                    {item.deadline}
                  </span>
                </div>

                <div className="text-sm text-gray-600 flex items-center gap-6">
                  <span
                    className="flex gap-2"
                    onClick={() => toggleLike(item.id)}
                  >
                    {item.currentState ? (
                      <FcLike className="w-5 h-5" />
                    ) : (
                      <FcLikePlaceholder className="w-5 h-5" />
                    )}
                    Like
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="max-w-screen-xl mx-auto mt-12 px-4 text-gray-600 md:px-8">
        <div className="flex items-center justify-between text-sm text-gray-600 font-medium">
          <a
            href="/"
            className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50"
          >
            Previous
          </a>
          <div>
            Page {currentPage} of {pages.length}
          </div>
          <a
            href="/"
            className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50"
          >
            Next
          </a>
        </div>
      </div>
    </section>
  );
}
