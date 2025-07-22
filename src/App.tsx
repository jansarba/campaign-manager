import React from 'react';
import { mockCampaigns } from './data/mockCampaigns';
import CampaignList from './components/CampaignList';
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <h1>Zarządzanie Kampaniami</h1>
      <CampaignList campaigns={mockCampaigns} />
    </>
  );
};

export default App;