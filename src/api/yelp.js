import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer OYBlaNt4MgjU2Gf-nJI58h89RsWiYfMBBo5E2-uKXZXtpGJ-QQUUc0loVHMsqU53MKQmcBxlg7Mz090OLRiTaxc-bYDOq7IuFDbitMT_7yF-4es_rMp27hK0Taz4X3Yx'
  }
});