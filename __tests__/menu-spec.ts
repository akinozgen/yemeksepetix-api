import * as RegionProvider from '../src/providers/regionprovider';
import * as CityProvider from '../src/providers/cityprovider';
import * as RestaurantProvider from '../src/providers/restaurantprovider';
import * as MenuProvider from '../src/providers/menuprovider';
import { ICity, IRegion, IRestaurant, IMenu } from '../src/types';

test(
  'Should give restaurants',
  async () => {
    let cities = await CityProvider.getCities();
    let regions = await RegionProvider.getRegions(
      cities.find(x => x.key === 'canakkale')
    );
    let restaurants = await RestaurantProvider.getRestaurants(
      regions.find(x => x.key === 'cevat-pasa')
    );

    expect(
      await MenuProvider.getMenus(
        restaurants.find(
          x => x.SeoUrl === '/adress-pizza-fast-food-yeni-kordon-canakkale'
        )
      )
    ).toBeInstanceOf(Array);
  },
  10000
);

test(
  "Shouldn't rejected from restaurant provider.",
  async () => {
    let cities = await CityProvider.getCities();
    let regions = await RegionProvider.getRegions(
      cities.find(x => x.key === 'canakkale')
    );
    let restaurants = await RestaurantProvider.getRestaurants(
      regions.find(x => x.key === 'cevat-pasa')
    );

    expect(
      await MenuProvider.getMenus(
        restaurants.find(
          x => x.SeoUrl === '/adress-pizza-fast-food-yeni-kordon-canakkale'
        )
      )
    ).not.toBeInstanceOf(Error);
  },
  10000
);
