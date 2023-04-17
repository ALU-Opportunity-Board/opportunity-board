import React from 'react';

export default function Filter() {
  return (
    <div className="container mx-auto py-40">
      <ul className="justify-start right-0 items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
        <select className="w-56 p-2.5 text-gray-500 bg-slate-50 border rounded-md shadow-sm outline-none focus:border-blac leading-tight">
          <option>Project manager</option>
          <option>Software engineer</option>
          <option>IT manager</option>
          <option>UI / UX designer</option>
        </select>
        <select className="w-56 p-2.5 text-gray-500 bg-white/75 border rounded-md shadow-sm outline-none  focus:border-black">
          <option>Project manager</option>
          <option>Software engineer</option>
          <option>IT manager</option>
          <option>UI / UX designer</option>
        </select>
        <select className="w-56 p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none focus:border-black">
          <option>Project manager</option>
          <option>Software engineer</option>
          <option>IT manager</option>
          <option>UI / UX designer</option>
        </select>
      </ul>
    </div>
  );
}
