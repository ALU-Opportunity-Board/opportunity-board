import React from 'react';
import logo from '../assets/alu-logo.png';

export default function Footer() {
  return (
    <footer aria-label="Site Footer" className="bg-slate-50">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center text-teal-600 sm:justify-start">
            <div className="p-5">
              <img src={logo} alt="Logo" width={140} height={120} />
            </div>
          </div>

          <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
            Copyright &copy; 2023. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
