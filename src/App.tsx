import { useState } from 'react';
import { mockCampaigns } from './data/mockCampaigns';
import CampaignList from './components/CampaignList';
import CampaignForm from './components/CampaignForm';
import { Campaign, CampaignFormData } from './types';
import './App.css';

function App() {
  const [campaigns, setCampaigns] = useState(mockCampaigns);
  const [campaignToEdit, setCampaignToEdit] = useState<Campaign | null>(null);

  const handleSaveCampaign = (formData: CampaignFormData) => {
    if (campaignToEdit) {
      setCampaigns(campaigns.map(c =>
        c.id === campaignToEdit.id ? { ...c, ...formData } : c
      ));
    } else {
      const newCampaign: Campaign = {
        id: Date.now(),
        ...formData,
      };
      setCampaigns([...campaigns, newCampaign]);
    }
    setCampaignToEdit(null);
  };

  const handleSelectCampaignToEdit = (campaign: Campaign) => {
    setCampaignToEdit(campaign);
  };

  const handleCancelEdit = () => {
    setCampaignToEdit(null);
  };
  
  const deleteCampaign = (id: number) => {
    if (window.confirm('Na pewno usunac te kampanie?')) {
      setCampaigns(campaigns.filter(c => c.id !== id));
    }
  };

  return (
    <main>
      <CampaignForm
        onSave={handleSaveCampaign}
        currentCampaign={campaignToEdit}
        onCancel={handleCancelEdit}
      />
      <section className="campaign-list-section">
        <h1>Zarządzanie Kampaniami</h1>
        <CampaignList 
          campaigns={campaigns} 
          onEdit={handleSelectCampaignToEdit}
          onDelete={deleteCampaign}
        />
      </section>
    </main>
  );
}

export default App;