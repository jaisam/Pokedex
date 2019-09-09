import { TestBed } from '@angular/core/testing';

import { GetPokemonsDataService } from './get-pokemons-data.service';

describe('GetPokemonsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetPokemonsDataService = TestBed.get(GetPokemonsDataService);
    expect(service).toBeTruthy();
  });
});
