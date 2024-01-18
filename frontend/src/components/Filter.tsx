/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import DropdownField from './ui/DropdownField';
import DropdownLocation from './ui/DropdownLocation';
import DropdownTime from './ui/DropdownTime';

export default function Filter() {
  return (
    <div className="container mx-auto py-6 space-y-2">
      <div className="justify-start right-0 items-center space-y-8 md:flex md:m-auto md:space-x-4 md:space-y-0">
        <DropdownField />
        <DropdownLocation />
        <DropdownTime />
      </div>
    </div>
  );
}
