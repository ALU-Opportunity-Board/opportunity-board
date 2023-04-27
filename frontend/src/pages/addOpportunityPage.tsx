/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Navbar from '../components/Navbar';
import { Button } from '../components/ui/Button';
import DropdownType from '../components/ui/DropdownType';

export default function AddOpportunityPage() {
  return (
    <div className="bg-gray-50">
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
          <DropdownType />

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

          <Button>Submit</Button>
        </form>
      </div>
    </div>
  );
}
