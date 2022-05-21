import { TestBed } from '@angular/core/testing';

import { VideosServService } from './videos-serv.service';

describe('VideosServService', () => {
  let service: VideosServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideosServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
