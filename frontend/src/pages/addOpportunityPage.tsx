/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DropdownType from '../components/ui/DropdownType';
import { useDispatch } from 'react-redux';
import { addOpportunities } from '../reducers/oppReducer';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import fields from '../models/Field';
import types from '../models/Types';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function AddOpportunityPage() {
  const [company, setCompany] = useState('');
  const [deadline, setDeadline] = useState('');
  const [field, setField] = useState(fields[3]);
  const [link, setLink] = useState('');
  const [type, setType] = useState(types[3]);
  const [title, setTitle] = useState('');

  const nav = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('JWT') == null) {
      return nav('/');
    }
  }, []);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const opprtunity = {
      company: company,
      deadline: deadline,
      field: field.place,
      link: link,
      opportunity_type: type.place,
      title: title,
    };
    try {
      const response = await axios.post(
        'http://127.0.0.1:5000/opportunity',
        opprtunity,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('JWT')}`,
          },
        }
      );

      console.log(response);
      setCompany('');
      setField(fields[3]);
      setDeadline('');
      setLink('');
      setType(types[3]);
      setTitle('');
      // dispatch(addOpportunities(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-slate-50">
      <Navbar />
      <div className="mx-auto max-w-screen-xl px-4 py-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">
            What kind of opportunity are you posting?
          </h1>

          <p className="mt-4 text-gray-500">
            We've tried to make it as easy as possible to post an opportunity.
            Just select the opportunity type from the drop down below and follow
            the steps. We'll aim to get your post live within one working day.
            The board is currently free to post to and if you've got an
            opportunity that doesn't currently fit one of the categories in the
            drop down drop please email us at m.batale@alustudent.com and we'll
            see what we can do.
          </p>
        </div>

        <form
          action=""
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Entrer Company:
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full inset-0 border-2 border-dashed border-black  p-4 pe-12 text-sm shadow-sm"
                placeholder="Entrer the company's name "
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Select Deadline:
            </label>
            <div className="relative">
              <input
                type="date"
                className="w-full inset-0 border-2 border-dashed border-black  p-4 pe-12 text-sm shadow-sm"
                placeholder="Please select "
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>
          </div>

          <Listbox value={field} onChange={setField}>
            {({ open }) => (
              <>
                <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
                  Select Field:
                </Listbox.Label>
                <div className="relative mt-2">
                  <Listbox.Button className="relative w-full cursor-pointer  inset-0 border-2 border-dashed border-black  p-4 pe-12 text-sm bg-white m-auto  text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-black-500 sm:text-sm sm:leading-6">
                    <span className="flex items-center">
                      <span className="ml-3 block truncate">{field.place}</span>
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {fields.map((field) => (
                        <Listbox.Option
                          key={field.id}
                          className={({ active }) =>
                            classNames(
                              active
                                ? 'bg-indigo-600 text-white'
                                : 'text-gray-900',
                              'relative cursor-pointer select-none py-2 pl-3 pr-9'
                            )
                          }
                          value={field}
                        >
                          {({ selected, active }) => (
                            <>
                              <div className="flex items-center">
                                <span
                                  className={classNames(
                                    selected ? 'font-semibold' : 'font-normal',
                                    'ml-3 block truncate'
                                  )}
                                >
                                  {field.place}
                                </span>
                              </div>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? 'text-white' : 'text-indigo-600',
                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                  )}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Enter Link:
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full inset-0 border-2 border-dashed border-black  p-4 pe-12 text-sm shadow-sm"
                placeholder="Please select "
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
          </div>

          <Listbox value={type} onChange={setType}>
            {({ open }) => (
              <>
                <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
                  Select Types:
                </Listbox.Label>
                <div className="relative mt-2">
                  <Listbox.Button className="relative w-full cursor-pointer  inset-0 border-2 border-dashed border-black  p-4 pe-12 text-sm bg-white m-auto  text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-black-500 sm:text-sm sm:leading-6">
                    <span className="flex items-center">
                      <span className="ml-3 block truncate">{type.place}</span>
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {types.map((type) => (
                        <Listbox.Option
                          key={type.id}
                          className={({ active }) =>
                            classNames(
                              active
                                ? 'bg-indigo-600 text-white'
                                : 'text-gray-900',
                              'relative cursor-pointer select-none py-2 pl-3 pr-9'
                            )
                          }
                          value={type}
                        >
                          {({ selected, active }) => (
                            <>
                              <div className="flex items-center">
                                <span
                                  className={classNames(
                                    selected ? 'font-semibold' : 'font-normal',
                                    'ml-3 block truncate'
                                  )}
                                >
                                  {type.place}
                                </span>
                              </div>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? 'text-white' : 'text-indigo-600',
                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                  )}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Enter Title:
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full inset-0 border-2 border-dashed border-black  p-4 pe-12 text-sm shadow-sm"
                placeholder="Please select "
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>

          <Button>Submit</Button>
        </form>
      </div>
    </div>
  );
}
