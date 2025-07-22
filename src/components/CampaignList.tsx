import { Campaign } from '../types';
import CampaignListItem from './CampaignListItem';

interface CampaignListProps {
  campaigns: Campaign[];
  onEdit: (campaign: Campaign) => void;
}

function CampaignList({ campaigns, onEdit }: CampaignListProps) {
  return (
    <div className="campaign-list">
      {campaigns.map((campaign) => (
        <CampaignListItem key={campaign.id} campaign={campaign} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default CampaignList;