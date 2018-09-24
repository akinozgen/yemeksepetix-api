import * as CityProvider from '../src/providers/cityprovider';
import { ICity } from '../src/types';

test(
  'Should give cities',
  async () => {
    expect(await CityProvider.getCities()).toBeInstanceOf(Array);
  },
  10000
);

test(
  "Shouldn't rejected from city provider.",
  async () => {
    expect(await CityProvider.getCities()).not.toBeInstanceOf(Error);
  },
  10000
);
