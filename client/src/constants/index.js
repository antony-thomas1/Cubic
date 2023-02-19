import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';


export const navlinks = [
  {
    name: 'dashboard',
    imgUrl: dashboard,
    link: './home',
  },
  {
    name: 'campaign',
    imgUrl: createCampaign,
    link: './create-campaign',
  },
  {
    name: 'profile',
    imgUrl: profile,
    link: './profile',
  },
  
];