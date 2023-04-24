/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ArrowFilter from './ui/ArrowFilter';
import DropdownFilter from './ui/DropdownFilter';
import SelectOption from './ui/Select';

export default function Filter() {
  return (
    <div className="container mx-auto py-6 space-y-2">
      <div className="justify-start right-0 items-center space-y-8 md:flex md:m-auto md:space-x-4 md:space-y-0">
        <DropdownFilter />
        <DropdownFilter />
        <DropdownFilter />
      </div>
    </div>
  );
}
