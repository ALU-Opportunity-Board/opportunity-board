/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Navbar from '../components/Navbar';
import { Button } from '../components/ui/Button';

export default function AddOpportunityPage() {
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

        <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              Opportunity Type *
              <input
                type="email"
                className="w-full inset-0 border-2 border-dashed border-black  p-4 pe-12 text-sm shadow-sm"
                placeholder="Please"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              Where is the company located?*
              <input
                type="email"
                className="w-full inset-0 border-2 border-dashed border-black  p-4 pe-12 text-sm shadow-sm"
                placeholder="Please select"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Please select
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full inset-0 border-2 border-dashed border-black  p-4 pe-12 text-sm shadow-sm"
                placeholder="Please select "
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              What is the *
              <input
                type="email"
                className="w-full  inset-0 border-2 border-dashed border-black  p-4 pe-12 text-sm shadow-sm"
                placeholder="Please select "
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              Deadline *
              <input
                type="date"
                className="w-full inset-0 border-2 border-dashed border-black  p-4 pe-12 text-sm shadow-sm"
                placeholder="Please select"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              Add the link *
              <input
                type="email"
                className="w-full inset-0 border-2 border-dashed border-black  p-4 pe-12 text-sm shadow-sm"
                placeholder="Please select"
              />
            </div>
          </div>
          <div className="relative">
            <button
              type="button"
              className="inline-flex justify-center items-center px-4 py-2 border border-transparent font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              id="options-menu"
              aria-expanded="true"
              aria-haspopup="true"
            >
              Filters
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <div
              className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <div className="py-1" role="none">
                <h3 className="text-sm font-semibold text-gray-700 pl-4 pt-2 pb-1">
                  Category
                </h3>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  All
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Graphic Design
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Web Design
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Illustration
                </a>
              </div>
            </div>
          </div>
          <Button>Submit</Button>
        </form>
      </div>
    </div>
  );
}
