import { inject, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { ConfigService } from './config.service';

describe('ConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [ConfigService]
    });
  });

  it('should work', inject([ConfigService], (config) => {
    expect(config).toBeDefined();
  }));
});
