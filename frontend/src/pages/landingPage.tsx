import React from 'react';
import Filter from '../components/Filter';
import Opportunitycard from '../components/Opportunitycard';
import Navbar from '../components/Navbar';

export default function LandingPage() {
  return (
    <div className="container-fluid bg-slate-50">
      <Navbar />
      <Filter />
      <Opportunitycard />
    </div>
  );
}
