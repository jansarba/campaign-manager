import { useState, useEffect, FormEvent } from 'react';
import { Campaign, CampaignFormData, CITIES } from '../types';

interface CampaignFormProps {
  onSave: (campaignData: CampaignFormData) => void;
  currentCampaign: Campaign | null;
  onCancel: () => void;
}

const initialFormData: CampaignFormData = {
  name: '',
  keywords: [],
  bidAmount: 10,
  campaignFund: 1000,
  status: 'on',
  town: CITIES[0],
  radius: 10,
};

function CampaignForm({ onSave, currentCampaign, onCancel }: CampaignFormProps) {
  const [formData, setFormData] = useState(initialFormData);
  const [keywordsInput, setKeywordsInput] = useState('');

  useEffect(() => {
    if (currentCampaign) {
      setFormData({
        name: currentCampaign.name,
        keywords: currentCampaign.keywords,
        bidAmount: currentCampaign.bidAmount,
        campaignFund: currentCampaign.campaignFund,
        status: currentCampaign.status,
        town: currentCampaign.town,
        radius: currentCampaign.radius,
      });
      setKeywordsInput(currentCampaign.keywords.join(', '));
    } else {
      setFormData(initialFormData);
      setKeywordsInput('');
    }
  }, [currentCampaign]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === 'bidAmount' || name === 'campaignFund' || name === 'radius' ? parseFloat(value) || 0 : value }));
  };

  const handleKeywordsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeywordsInput(e.target.value);
    const keywordsArray = e.target.value.split(',').map(kw => kw.trim()).filter(Boolean);
    setFormData(prev => ({ ...prev, keywords: keywordsArray }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const errors = [];
    if (!formData.name.trim()) {
      errors.push("Nazwa kampanii jest wymagana.");
    }
    if (formData.keywords.length === 0) {
      errors.push("Podaj przynajmniej jedno slowo kluczowe.");
    }
    if (formData.bidAmount < 10) {
      errors.push("Minimalna stawka to 10 zl.");
    }
    if (formData.campaignFund <= 0) {
      errors.push("Fundusz kampanii musi byc wiekszy niz 0.");
    }

    if (errors.length > 0) {
      alert(errors.join('\n'));
      return;
    }
    
    onSave(formData);
    setFormData(initialFormData);
    setKeywordsInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="campaign-form">
      <h2>{currentCampaign ? 'Edytuj Kampanię' : 'Dodaj Nową Kampanię'}</h2>

      <div className="form-group">
        <label htmlFor="name">Nazwa Kampanii</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="keywords">Słowa Kluczowe (oddzielone przecinkiem)</label>
        <input type="text" id="keywords" name="keywords" value={keywordsInput} onChange={handleKeywordsChange} />
      </div>

      <div className="form-group">
        <label htmlFor="bidAmount">Stawka (min. 10)</label>
        <input type="number" id="bidAmount" name="bidAmount" value={formData.bidAmount} onChange={handleChange} min="10" />
      </div>

      <div className="form-group">
        <label htmlFor="campaignFund">Fundusz Kampanii</label>
        <input type="number" id="campaignFund" name="campaignFund" value={formData.campaignFund} onChange={handleChange} min="1" />
      </div>

      <div className="form-group">
        <label>Status</label>
        <div className="radio-group">
          <label><input type="radio" name="status" value="on" checked={formData.status === 'on'} onChange={handleChange} /> Włączona</label>
          <label><input type="radio" name="status" value="off" checked={formData.status === 'off'} onChange={handleChange} /> Wyłączona</label>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="town">Miasto</label>
        <select id="town" name="town" value={formData.town} onChange={handleChange}>
          {CITIES.map(city => <option key={city} value={city}>{city}</option>)}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="radius">Promień (km)</label>
        <input type="number" id="radius" name="radius" value={formData.radius} onChange={handleChange} min="1" />
      </div>

      <div className="form-actions">
        <button type="submit" className="btn-save">{currentCampaign ? 'Zapisz zmiany' : 'Dodaj kampanię'}</button>
        {currentCampaign && <button type="button" className="btn-cancel" onClick={onCancel}>Anuluj</button>}
      </div>
    </form>
  );
};

export default CampaignForm;