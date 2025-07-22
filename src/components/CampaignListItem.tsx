import { Campaign } from '../types';

interface CampaignListItemProps {
  campaign: Campaign;
  onEdit: (campaign: Campaign) => void;
}

const CampaignListItem = ({ campaign, onEdit }: CampaignListItemProps) => {
  const statusClass = campaign.status === 'on' ? 'status-on' : 'status-off';

  return (
    <div className="campaign-item">
      <div className="campaign-header">
        <h3 className="campaign-name">{campaign.name}</h3>
        <span className={`status-indicator ${statusClass}`}>{campaign.status}</span>
      </div>
      <div className="campaign-details">
        <p><strong>Słowa kluczowe:</strong> {campaign.keywords.join(', ')}</p>
        <p><strong>Miasto:</strong> {campaign.town}</p>
        <p><strong>Promień:</strong> {campaign.radius} km</p>
        <p><strong>Stawka:</strong> {campaign.bidAmount.toFixed(2)} zł</p>
        <p><strong>Budżet:</strong> {campaign.campaignFund.toFixed(2)} zł</p>
      </div>
      <div className="campaign-actions">
        <button className="btn-edit" onClick={() => onEdit(campaign)}>Edytuj</button>
        <button className="btn-delete">Usuń</button>
      </div>
    </div>
  );
};

export default CampaignListItem;