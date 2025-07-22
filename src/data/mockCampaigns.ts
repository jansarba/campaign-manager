import { Campaign } from "../types";

export const mockCampaigns: Campaign[] = [
  {
    id: 1,
    name: "Wyprzedaz butów",
    keywords: ["buty", "lato", "promocja", "sandaly"],
    bidAmount: 15.50,
    campaignFund: 1200.00,
    status: "on",
    town: "Warszawa",
    radius: 50,
  },
  {
    id: 2,
    name: "Promocja na elektronike",
    keywords: ["smartfon", "telewizor", "okazja"],
    bidAmount: 25.00,
    campaignFund: 5500.00,
    status: "off",
    town: "Kraków",
    radius: 30,
  },
  {
    id: 3,
    name: "Nowosci w ogrodzie",
    keywords: ["ogrod", "narzedzia", "sadzonki"],
    bidAmount: 9.80,
    campaignFund: 850.00,
    status: "on",
    town: "Gdańsk",
    radius: 75,
  },
];

export default mockCampaigns;