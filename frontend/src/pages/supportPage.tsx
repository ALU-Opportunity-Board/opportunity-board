/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Icon from '../components/ui/icon';
import IconFaQ from '../components/ui/iconFaQ';
import Paragraph from '../components/ui/Paragraph';
import { Button } from '../components/ui/Button';

export default function SupportPage() {
  return (
    <div className="container-fluid">
      <div>
        <Navbar />
      </div>
      <div className="bg-slate-50">
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Find your career path
              </h2>

              <p>
                The SPD Team empowers students to navigate their long-term
                career paths by equipping them with the right tools, skills, and
                mindsets which enables them in turn to source, secure and excel
                in their annual internships during their time at ALU as well as
                beyond in targetted full time opportunities.
              </p>

              <a href="/home" className="mt-8 inline-block ">
                <Button>Get Started Today</Button>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-0 sm:grid-cols-3">
              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="/accountant"
              >
                <Icon />

                <h2 className="mt-2 font-bold">Accra Hub</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </a>

              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="/accountant"
              >
                <Icon />
                <h2 className="mt-2 font-bold">Lagos Hub</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </a>

              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="/accountant"
              >
                <Icon />

                <h2 className="mt-2 font-bold">Kampala Hub</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </a>

              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="/accountant"
              >
                <Icon />

                <h2 className="mt-2 font-bold">Nairobi Hub</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </a>

              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="/accountant"
              >
                <Icon />

                <h2 className="mt-2 font-bold">Addis-Abeba Hub</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </a>

              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="/accountant"
              >
                <Icon />

                <h2 className="mt-2 font-bold">Kigali Hub</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  How to get access to opportunities at different hub?
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="space-y-8 px-28">
          <details
            className="group border-l-4 border-blue-600 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary className="flex items-center justify-between cursor-pointer">
              <h2 className="text-lg font-medium text-gray-900">
                How to get access to opportunities at different hub?
              </h2>

              <IconFaQ />
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700">
              To be able to access any opportunities contact the hub ambassador
              of the hub
            </p>
          </details>

          <details className="group border-l-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between cursor-pointer">
              <h2 className="text-lg font-medium text-gray-900">
                How to get access to opportunities at different hub?
              </h2>

              <IconFaQ />
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700">
              To be able to access any opportunities contact the hub ambassador
              of the hub
            </p>
          </details>

          <details
            className="group border-l-4 border-blue-600 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary className="flex items-center justify-between cursor-pointer">
              <h2 className="text-lg font-medium text-gray-900">
                How to get access to opportunities at different hub?
              </h2>
              <IconFaQ />
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700">
              To be able to access any opportunities contact the hub ambassador
              of the hub
            </p>
          </details>

          <details
            className="group border-l-4 border-blue-600 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary className="flex items-center justify-between cursor-pointer">
              <h2 className="text-lg font-medium text-gray-900">
                How to get access to opportunities at different hub?
              </h2>

              <IconFaQ />
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700">
              To be able to access any opportunities contact the hub ambassador
              of the hub
            </p>
          </details>

          <details
            className="group border-l-4 border-blue-600 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary className="flex items-center justify-between cursor-pointer">
              <h2 className="text-lg font-medium text-gray-900">
                How to get access to opportunities at different hub?
              </h2>

              <IconFaQ />
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700">
              To be able to access any opportunities contact the hub ambassador
              of the hub
            </p>
          </details>
        </div>
        <Footer />
      </div>
    </div>
  );
}
