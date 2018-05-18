const desctop = {
  latitude: 57.78801,
  longitude: 101.850636,
  zoom: 2.4
};
const mobile = {
  latitude: 58.97,
  longitude: 54.05,
  zoom: 2
};

export default (window.innerWidth > 719 ? desctop : mobile);
