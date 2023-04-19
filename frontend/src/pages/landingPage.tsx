import React from 'react';
import Filter from '../components/Filter';
import Opportunitycard from '../components/Opportunitycard';

export default function LandingPage() {
  return (
    <div className="container-fluid bg-slate-50">
      <Filter />
      <Opportunitycard />
    </div>
  );
}
