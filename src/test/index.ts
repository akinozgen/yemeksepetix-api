import YemekSepetiX from '../index';

YemekSepetiX.CityProvider.getCities().then(x => {
  YemekSepetiX.RegionProvider.getRegions(
    x.find(_ => _.key === 'canakkale')
  ).then(y => {
    YemekSepetiX.RestaurantProvider.getRestaurants(
      y.find(_ => _.key === 'cevat-pasa')
    ).then(z => {
      YemekSepetiX.MenuProvider.getMenus(z[0]).then(t => {
        console.log('Menus', t);
      });
    });
  });
});
