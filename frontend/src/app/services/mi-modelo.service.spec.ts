import { TestBed } from '@angular/core/testing';

import { MiModeloService } from './mi-modelo.service';

describe('MiModeloService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MiModeloService = TestBed.get(MiModeloService);
    expect(service).toBeTruthy();
  });
});
