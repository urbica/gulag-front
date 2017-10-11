import { mapToken } from './tokens';

export const viewport = {
  latitude: 60,
  longitude: 90,
  zoom: 2.5
};

export default {
  styles: `https://api.mapbox.com/styles/v1/gulagmap/cj8bt4qbw7kbo2rry4oft6e5g?access_token=${mapToken}`
};
