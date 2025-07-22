export type CampaignStatus = 'on' | 'off';

export interface Campaign {
  id: number;
  name: string;
  keywords: string[];
  bidAmount: number;
  campaignFund: number;
  status: CampaignStatus;
  town: string;
  radius: number; // w km
}