import { Campaign } from '../types';
import CampaignListItem from './CampaignListItem';

interface CampaignListProps {
  campaigns: Campaign[];
  onEdit: (campaign: Campaign) => void;
  onDelete: (id: number) => void;
}

function CampaignList({ campaigns, onEdit, onDelete }: CampaignListProps) {
  return (
    <div className="campaign-list">
      {campaigns.map((campaign) => (
        <CampaignListItem 
          key={campaign.id} 
          campaign={campaign} 
          onEdit={onEdit}
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
};

export default CampaignList;