import { TestBed } from '@angular/core/testing';

import { App.Common.ServiceService } from './app.common.service.service';

describe('App.Common.ServiceService', () => {
  let service: App.Common.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(App.Common.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
