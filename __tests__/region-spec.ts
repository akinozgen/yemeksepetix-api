import * as RegionProvider from '../src/providers/regionprovider';
import * as CityProvider from '../src/providers/cityprovider';
import { ICity, IRegion } from '../src/types';

test(
  'Should give regions',
  async () => {
    let cities = await CityProvider.getCities();

    expect(
      await RegionProvider.getRegions(cities.find(x => x.key === 'canakkale'))
    ).toBeInstanceOf(Array);
  },
  10000
);

test(
  "Shouldn't rejected from region provider.",
  async () => {
    let cities = await CityProvider.getCities();

    expect(
      await RegionProvider.getRegions(cities.find(x => x.key === 'canakkale'))
    ).not.toBeInstanceOf(Error);
  },
  10000
);
