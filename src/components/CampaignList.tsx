import { Campaign } from '../types';
import CampaignListItem from './CampaignListItem';

interface CampaignListProps {
  campaigns: Campaign[];
}

const CampaignList = ({ campaigns }: CampaignListProps) => {
  if (campaigns.length === 0) {
    return <div className="empty-message">Brak dostępnych kampanii.</div>;
  }

  return (
    <div className="campaign-list">
      {campaigns.map((campaign) => (
        <CampaignListItem key={campaign.id} campaign={campaign} />
      ))}
    </div>
  );
};

export default CampaignList;