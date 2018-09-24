import * as RegionProvider from '../src/providers/regionprovider';
import * as CityProvider from '../src/providers/cityprovider';
import * as RestaurantProvider from '../src/providers/restaurantprovider';
import { ICity, IRegion, IRestaurant } from '../src/types';

test(
  'Should give restaurants',
  async () => {
    let cities = await CityProvider.getCities();
    let regions = await RegionProvider.getRegions(
      cities.find(x => x.key === 'canakkale')
    );

    expect(
      await RestaurantProvider.getRestaurants(
        regions.find(x => x.key === 'cevat-pasa')
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

    expect(
      await RestaurantProvider.getRestaurants(
        regions.find(x => x.key === 'cevat-pasa')
      )
    ).not.toBeInstanceOf(Error);
  },
  10000
);
